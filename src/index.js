import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


/**
 * Material-UI components require a theme to be provided. MuiThemeProvider
 * injects the theme into the application context.
 */
const WrappedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <WrappedApp />,
  document.getElementById('root')
);
