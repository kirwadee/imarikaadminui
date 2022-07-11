import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NewProject from './pages/new/NewProject';
import Projects from './pages/list/Projects';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/login/Register';
import Navbar from './components/navbar/Navbar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Events from './pages/list/Events';
import NewEvent from './pages/new/NewEvent';




function App() {

  
  
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
        <Navbar />
      <Routes>
          <Route path='/'  element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/new" element={<NewEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
    
      </Routes>
  </BrowserRouter>
  <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
