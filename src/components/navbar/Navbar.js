import {  Toolbar, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText  } from '@mui/material'
import React from 'react'
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';







const Navbar = () => {
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)

    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }

  return (
   <Box sx={{height:"75px", borderBottom:"0.5px solid rgb(231, 228, 228)", fontSize:"8px", position:"sticky", top:0}}>
     <Toolbar>
      <Link to="/" style={{textDecoration:"none", color:'inherit'}}>
      <Typography 
        component='div'
        flexGrow={1}
        fontSize='22px'
        fontWeight='bold'
      >
         Imarika Peace &amp; Mediation Initiative 
      </Typography>
      </Link>
      <Box sx={{marginLeft:"auto"}}>
      <List sx={{display:"flex", flex:2, justifyContent:"space-between", alignItems:"center"}}  >
        <Link to="/projects" style={{textDecoration:"none", color:"inherit"}}>
        <ListItemButton>
          <ListItemIcon><FormatListNumberedRtlIcon /></ListItemIcon>
          <ListItemText>Projects</ListItemText>
        </ListItemButton>
        </Link>
        <Link to="/events" style={{textDecoration:"none", color:"inherit"}}>
        <ListItemButton>
          <ListItemIcon><CollectionsIcon /></ListItemIcon>
          <ListItemText>Events</ListItemText>
        </ListItemButton>
        </Link>
        {user ? (
          
          <ListItemButton onClick={onLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
      
        ) : (
        <>
         <Link to="/login" style={{textDecoration:"none"}}>
        <ListItemButton>
          <ListItemIcon><LoginIcon /></ListItemIcon>
          <ListItemText>Login</ListItemText>
        </ListItemButton>
        </Link>
        <Link to="/register" style={{textDecoration:"none"}}>
        <ListItemButton>
          <ListItemIcon><PersonAddAltIcon /></ListItemIcon>
          <ListItemText>Register</ListItemText>
        </ListItemButton>
        </Link>
        </>)}  
      </List>
      </Box>
    </Toolbar>  
   </Box>
  )
}

export default Navbar