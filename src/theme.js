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
      fontFamily: `"Roboto", "Montserrat"`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  },
})

export default theme
