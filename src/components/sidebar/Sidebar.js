import { Box, Divider, List,  ListItemButton, ListItemIcon, ListItemText, Paper,styled, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { AccountCircleOutlined, BookmarksTwoTone, Dashboard, ExitToApp, InsertChartOutlined, NotificationsNone, PersonOutlined, PsychologyOutlined, SettingsApplicationsOutlined, SettingsSystemDaydreamOutlined } from '@mui/icons-material';

const Sidebar = () => {

    const SidebarNavList = styled(List)({
      '& .MuiListItemButton-root': {
        paddingRight: 24,
      },
      '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
      },
      '& .MuiSvgIcon-root': {
        fontSize: 20,
      },
    })


    const ColorOption = styled('div')({
      height:20,
      width:20,
      border:2,
      borderRadius:"25%"
    })
    
  
  return (
    <Box  sx={{flex:1, bgcolor:"white", borderRight:"0.5px solid rgb(230, 227, 227)", minHeight:"100vh"}}>
       <SidebarNavList component="nav" disablePadding>
         <ListItemButton component="a" href="#logo" sx={{height:75}}>
           <ListItemIcon sx ={{fontSize:20}} ><LibraryBooksIcon color="primary" /></ListItemIcon>
           <ListItemText
           sx={{my:0}}
           primaryTypographyProps={{
             fontSize:20,
             fontWeight:'medium',
             letterSpacing:0,
           }}
            />
         </ListItemButton>
         <Divider />
         <ListItemText
          primary="MAIN"
          primaryTypographyProps={{
            fontSize:11,
            fontWeight:'medium',
            lineHeight:'20px',
            mb:0,
            ml:2
          }} 
          />
         <ListItemButton>
           <ListItemIcon><Dashboard  color='primary' /></ListItemIcon>
           <ListItemText
            secondary="Dashboard"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemText
          primary="LISTS"
          primaryTypographyProps={{
            fontSize:11,
            fontWeight:'medium',
            lineHeight:'20px',
            mb:0,
            ml:2
          }} 
          />
         <ListItemButton>
           <ListItemIcon ><PersonOutlined color='primary' /></ListItemIcon>
           <ListItemText
            secondary="Projects"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon ><BookmarksTwoTone color='primary'/></ListItemIcon>
           <ListItemText
            secondary="Gallery"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemText
          primary="USEFUL"
          primaryTypographyProps={{
            fontSize:11,
            fontWeight:'medium',
            lineHeight:'20px',
            mb:0,
            ml:2
          }} 
          />
         <ListItemButton>
           <ListItemIcon ><InsertChartOutlined color='primary' /></ListItemIcon>
           <ListItemText
            secondary="Stats"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            
            />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon ><NotificationsNone color='primary'/></ListItemIcon>
           <ListItemText
            secondary="Notifications"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemText
          primary="SERVICE"
          primaryTypographyProps={{
            fontSize:11,
            fontWeight:'medium',
            lineHeight:'20px',
            mb:0,
            ml:2
          }} 
          />
         <ListItemButton>
           <ListItemIcon ><SettingsSystemDaydreamOutlined color='primary' /></ListItemIcon>
           <ListItemText
            secondary="System Health"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon ><PsychologyOutlined color='primary'/></ListItemIcon>
           <ListItemText
            secondary="Logs"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon ><SettingsApplicationsOutlined color='primary'/></ListItemIcon>
           <ListItemText
            secondary="Settings"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemText
          primary="USER"
          primaryTypographyProps={{
            fontSize:11,
            fontWeight:'medium',
            lineHeight:'20px',
            mb:0,
            ml:2
          }} 
          />
         <ListItemButton>
           <ListItemIcon ><AccountCircleOutlined color='primary'/></ListItemIcon>
           <ListItemText
            secondary="Profile"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon ><ExitToApp color='primary'/></ListItemIcon>
           <ListItemText
            secondary="Logout"
            secondaryTypographyProps={{
              fontSize:15,
              lineHeight:'16px',
              fontWeight:'medium'
            }}
            sx={{my:0}}
            />
         </ListItemButton>

       </SidebarNavList>

     <Box marginTop={2} sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
       <ColorOption sx={{bgcolor:"whitesmoke"}} />
       <ColorOption sx={{bgcolor:"black", ml:2}} />
     </Box>
    </Box>
  )
}

export default Sidebar