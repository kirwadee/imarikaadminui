import { createTheme } from "@mui/material";
import { green, pink, red } from '@mui/material/colors';

const primaryColorLight = green[50];
const primaryColorMain = green[100];
const primaryColorDark = green[200];

const secondaryColorLight = green[50];
const secondaryColorMain = green[300];
const secondaryColorDark = green[300];


export const theme = createTheme({
    palette:{
        primary:{
            light:primaryColorLight,
            main:primaryColorMain,
            dark:primaryColorDark
        },
        secondary:{
            light:secondaryColorLight,
            main:secondaryColorMain,
            dark:secondaryColorDark,
        }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      components: {
        // Name of the component
        MuiButton: {
          defaultProps:{
                disableRipple:true,
            },
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              textTransform:'none'
            },
          },
        },
        MuiDrawer: {
            defaultProps:{
                  
              },
            styleOverrides: {
              // Name of the slot
              paperAnchorTop: {
                // Some CSS
                backgroundColor:"pink",
                maxWidth:"200px",
                marginTop:"60px",
                borderRadius:"10px",
                marginLeft:"auto"

              },
            },
          },
        MuiFab: {
            defaultProps:{
                  disableRipple:true,
              },
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                textTransform:'none'
              },
            },
          },
        MuiTab: {
            defaultProps:{
                  disableRipple:true,
              },
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                textTransform:'none'
              },
            },
          },
      },
      
      
})