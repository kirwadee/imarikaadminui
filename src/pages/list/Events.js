import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { deleteEvent, getEvents, reset } from '../../features/events/eventSlice'



const Events = () => {
  
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "timelines", headerName: "Events Timelines", width: 550 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/events/" + params.row._id}
              style={{textDecoration:'none'}}
            >
              <Button
               size='small'
                 sx={{mr:"20px"}}
                 variant='outlined'

               >
                Edit
            </Button>
            </Link>
            <Button
               size='small'
                 sx={{mr:"10px"}}
                 variant='outlined'
                 onClick={() => dispatch(handleDelete(params.row._id))}
               >
                Delete
            </Button>
          </>
        );
      },
    },
  ];



    const dispatch= useDispatch()
    const navigate = useNavigate();

    //Pull events from the redux store
    const {evs,isDeleted, isLoading, isError, message} = useSelector((state) => state.upcomingevents)

  
  
    const handleDelete = (id) => {
      if(window.confirm('Are you sure')){
        dispatch(deleteEvent(id))
      }

    }


     //When the component mounts dispatch all projects to the redux store
     useEffect(()=>{
    if (isError){
      toast.error(message)
    }

    dispatch(getEvents())

    if(isDeleted){
      dispatch(getEvents())
    }

    return () => {
      dispatch(reset())
    }
     
   },[dispatch, isError, isDeleted])

  



  return (  
  <Box  padding={5} height={'75vh'}>
    <Typography
     align='center'
     marginBottom={3}
     variant='h6'
    >
      Events Timeline
    </Typography>
  
    <Button
     variant='contained'
     sx={{mb:3}}
     onClick={()=>navigate('/events/new')}
    >
      Add New Event
    </Button>
       
        { 
          isLoading ? <CircularProgress /> : evs.length <= 0 ? <Alert severity='error'>No Event Found</Alert> :
          isError ? <Alert severity='error'>{message}</Alert> :

        <DataGrid
         rows={evs}
         columns={columns}
         pageSize={8}
         getRowId={(row) => row._id}
         rowsPerPageOptions={[8]} 
         checkboxSelection
         disableSelectionOnClick
         />
        }
    </Box>

  )
}

export default Events