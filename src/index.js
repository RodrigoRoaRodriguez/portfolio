import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from './constants/theme'

// Temporal, needed for onTouchTap, which some components have
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Material-UI components require a theme to be provided. MuiThemeProvider
 * injects the theme into the application context.
 */
const AppWrapper = (props) => (
  <MuiThemeProvider muiTheme={theme}>
    {props.app}
  </MuiThemeProvider>
)

ReactDOM.render(
  <AppWrapper app={<App />}/>,
  document.getElementById('root')
)
