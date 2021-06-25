import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#707070',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2BA054',
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
      primary: '#707070',
      secondary: '#2BA054',
      third: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

export default theme
