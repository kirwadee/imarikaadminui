import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { Alert, Box, Button, FormLabel,Paper, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../firebase';
import { createProject, reset } from '../../features/projects/projectSlice';
import {useNavigate} from 'react-router-dom'


const NewProject = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState('');
  const[perc, setPerc] = useState(null)

 const dispatch = useDispatch()
 const navigate = useNavigate()


 const handleChange = (e) => {
  setInputs((prev) => {
    return {...prev, [e.target.name]: e.target.value}
  })
 }



const {isCreated, isLoading, isError, message} = useSelector(state => state.projects)

useEffect(()=>{
  if (isCreated){
    dispatch(reset())
    navigate('/projects')
  }
  
},[isCreated, dispatch])


 const uploadData = (e) =>{
      e.preventDefault()
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);


  uploadTask.on('state_changed', 
  (snapshot) => {
   
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const projectdata = ({...inputs, image:downloadURL})
      dispatch(createProject(projectdata))
      setInputs('')
    });
  }
);
    }   
    


  return (
    <Box maxWidth={'xl'} marginTop={7}>
         <Typography align='center' marginBottom={3} fontWeight='bold'>
          New Project
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
              
          <Box textAlign="center" marginRight={4}>
            <img 
            src={!file && "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
            alt=""
            style={{objectFit:"contain", width:"100px", height:"100px",}}
             />
          </Box>
      

                <form>
                   <FormLabel htmlFor='file'>
                    Image: <DriveFolderUploadOutlined />
                    <TextField 
                     type='file' 
                     id="file"  
                     fullWidth 
                     required
                     onChange={(e)=>setFile(e.target.files[0])} 
                     />
                    </FormLabel> 
                 
                    
                     
                     <TextField
                      name="title"
                      variant='standard'
                      label="Title"
                      multiline 
                      type="text"
                      fullWidth
                      size='small'
                      required
                      onChange={handleChange}
                     />
                     
                     <TextField
                      name="event"
                      variant='standard'
                      label="Event and Place"
                      multiline 
                      type="text"
                      fullWidth
                      size='small'
                      required
                      onChange={handleChange}
                     />
        
                     <TextField
                      name="description"
                      variant='standard'
                      label="Description"
                      multiline 
                      type="text"
                      fullWidth
                      required
                      onChange={handleChange}
                     />
                    
                    {isLoading ? <Alert severity='info'>Uploading Data</Alert> : isError ? 
                    <Alert severity='error'>{message}</Alert> :   
      
                   <Button
                    sx={{marginTop:3}}
                    size="large" 
                    justifyContent="center" 
                    variant='contained' 
                    disabled = {(perc !== null && perc < 100) && <Alert severity='info'>Uploading Image Please Wait</Alert> } 
                    onClick={uploadData}
                  >
                  Upload Data
                 </Button>
                  }
            </form>
            </Box>
          </Box>
    
  
  )
}

export default NewProject