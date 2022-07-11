
import { Alert, Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, reset } from '../../features/events/eventSlice';
import { useNavigate } from 'react-router-dom'


const NewEvent = () => {
  const [event, setEvent] = useState({});

  

  const dispatch = useDispatch()
  const navigate = useNavigate()

 const {isSuccess,isLoading, isError, message,} = useSelector(state => state.upcomingevents)

useEffect(()=>{
  if (isSuccess){
    dispatch(reset())
    navigate('/events')
  }
  
},[isSuccess, dispatch])

const handleChange = e => {
  setEvent((prevData) => {
    return {...prevData, [e.target.name] : e.target.value}
  })
}


 const uploadData = (e) =>{
      e.preventDefault()
      dispatch(createEvent(event))
      setEvent({})
 }  
    


  return (
    <Box maxWidth={'xl'} marginTop={7}>
         <Typography align='center' marginBottom={3} fontWeight='bold'>
          New Event
          </Typography>
         <Box component={Paper} 
          sx={{
            padding:"50px", 
            display:"flex",
            justifyContent:"center", 
            alignItems:"center",
            width:"800px",
            margin:"auto"
            }}>
              
      

                <form>     
                    <TextField
                      name="title"
                      variant='standard'
                      label='Event Title'
                      placeholder="This Month Event"
                      multiline 
                      type="text"
                      fullWidth
                      size='small'
                      required
                      onChange={handleChange}
                     />

                    <TextField
                      name='timelines'
                      variant='standard'
                      label='Timelines Events'
                      placeholder="You are welcome for 2nd July Event to be held at Marigat"
                      multiline 
                      type="text"
                      fullWidth
                      size='small'
                      required
                      onChange={handleChange}
                     />
                     
                    
                    {isLoading && <Alert severity='info'>Uploading Data</Alert>} 
                     {isError && <Alert severity='error'>{message}</Alert> } 
      
                   <Button
                    sx={{marginTop:3}}
                    size="large" 
                    justifyContent="center" 
                    variant='contained' 
                    onClick={uploadData}
                  >
                  Add Event
                 </Button>
                   
            </form>
            </Box>
          </Box>
    
  
  )
}


export default NewEvent