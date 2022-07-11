import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  
  const {user} = useSelector((state) => state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user, navigate])

  return (
    <Container maxWidth="xl">
      <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", p:"30px"}} >
          <Typography>Welcome {user && user.firstname}</Typography>
      </Box>
      <Grid 
         Container
         spacing={8}
         gap={2}
         sx={{display:"flex", justifyContent:"center", alignItems:"center"}}
       >
        <Grid item sm={6} xs={12} >
          <Box sx={{padding:"40px", boxShadow:5}}>
          <Link to='/projects/new' style={{textDecoration:'none', color:"inherit"}}>
          <Typography>
            Add New Project
          </Typography>
          </Link>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} >
          <Box sx={{padding:"40px", boxShadow:5}}>
          <Link to='/events/new' style={{textDecoration:'none', color:"inherit"}}>
          <Typography>Add New Event</Typography>
          </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard