import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#67C974',
      contrastText: '#fff',
    },
    secondary: {
      main: '#67C974',
    },
    third: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },

    text: {
      primary: '#67C974',
      secondary: '#000000',
      third: '#FFFFFF',
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  },
})

export default theme
