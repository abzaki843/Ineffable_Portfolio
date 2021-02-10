import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F7F9FA',
    },
    secondary: {
      main: '#67C974',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text:{
      primary: "#67C974",
      secondary: "#000000"
    },
   
  },
});

export default theme;
