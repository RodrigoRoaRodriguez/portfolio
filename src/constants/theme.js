import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const customBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.red700,
    primary2Color: Colors.red500,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.cyan200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    secondaryTextColor: fade(Colors.darkBlack, 0.54),
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
}

// Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(customBaseTheme)
