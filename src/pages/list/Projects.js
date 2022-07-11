import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProject, getProjects, reset } from '../../features/projects/projectSlice'


const Projects = () => {
  
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    
    },
    {field: "images", headerName: "Images", width: 200,
      renderCell: (params) => {
        return (
          <Box>
            <img  src={params.row.image} alt={params.title}
              style={{width:"200px", height:"200px", objectFit:"cover"}}
             />
          </Box>
        );
      },
    },
    { field: "description", headerName: "Description", width: 500 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/projects/" + params.row._id}
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
                 onClick={() => dispatch(deleteProject(params.row._id))}
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

    const {isDeleted, projects, isLoading, isError, message} = useSelector((state) => state.projects)
    // const {user} = useSelector(state => state.user)
  


     //When the component mounts dispatch all projects to the redux store
   useEffect(()=>{
    if (isError){
      toast.error(message)
    }

    
      dispatch(getProjects())
    
      if(isDeleted){
        dispatch(getProjects())
      }
    

    return () => {
      dispatch(reset())
    }
     
   },[dispatch, isError, isDeleted])

  



  return (  
  <Box  padding={5} height={'85vh'}>
     <Typography
     align='center'
     marginBottom={3}
     variant='h6'
    >
      Projects News
    </Typography>
  
    <Button
     variant='contained'
     sx={{mb:3}}
     onClick={()=>navigate('/projects/new')}
    >
      Add New Project
    </Button>

        { 
          isLoading ? <CircularProgress /> : 
          isError ? <Alert severity='error'>{message}</Alert> :

        <DataGrid
         rows={projects}
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

export default Projects