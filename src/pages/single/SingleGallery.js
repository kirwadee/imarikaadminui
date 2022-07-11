import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableList from '../../components/table/Table'


const Single = () => {
  return (
    <Box sx={{display:"flex", width:"100%"}}>
      <Sidebar />
      <Box sx={{flex:6}}>
       <Navbar />
       <Box sx={{display:"flex", p:"20px", gap:"20px"}}>
         <Box sx={{flex:1, p:"20px", position:"relative"}} boxShadow={5}>
           <Button variant="contained" size="small" sx={{position:"absolute", top:0, right:0,mr:1,mt:1}}>
             Edit
            </Button>
           <Typography variant='h6' fontSize={16} mb={2} component="h6">Information</Typography>
           <Box sx={{display:"flex", gap:"20px",}}>
             <Avatar
               src=""
               fontSize="small"
              />
              <Box>
                <Typography variant='h6' component="h1">Anne Kish</Typography>
                <Box sx={{mb:"10px"}}>
                  <Typography fontSize ={14} mr={0.5}  variant='subtitle1' component="span">Email:</Typography>
                  <Typography fontSize ={14} fontWeight={300} variant='subtitle1' component="span">annie@gmail.com</Typography>
                </Box>
                <Box sx={{mb:"10px"}}>
                  <Typography fontSize ={14} mr={0.5}  variant='subtitle1' component="span">Phone:</Typography>
                  <Typography fontSize ={14} fontWeight={300} variant='subtitle1' component="span">+254 710 280 345</Typography>
                </Box>
                <Box sx={{mb:"10px"}}>
                  <Typography fontSize ={14} mr={0.5}  variant='subtitle1' component="span">Address:</Typography>
                  <Typography fontSize ={14} fontWeight={300} variant='subtitle1' component="span">100-30202 Moi' Bridge</Typography>
                </Box>
                <Box sx={{mb:"10px"}}>
                  <Typography fontSize ={14} mr={0.5}  variant='subtitle1' component="span">Country:</Typography>
                  <Typography fontSize ={14} fontWeight={300} variant='subtitle1' component="span">Kenya</Typography>
                </Box>
              </Box>
           </Box>
         </Box>
         <Box sx={{flex:2}}>
           <Chart aspect={3 / 1} title="User Borrowed Books(Last 6 Months)" />
         </Box>
       </Box>

       <Box p={4} boxShadow={6} margin={3}>
         <Typography fontSize={16} mb={2} variant='h6'>Latest Transactions</Typography>
         <TableList />
       </Box>

      </Box>    
    </Box>
  )
}

export default Single