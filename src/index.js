import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './constants/theme';
// import Home from './Routes/Home';
// import Skills from './Routes/Skills';
// import Portfolio from './Routes/Portfolio';
import './index.css';
// import reduxStore from './scripts/reducers/root';

ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>,
  /* <Provider store={reduxStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/art" component={Art} />
      </Switch>
    </Router>
  </Provider>,*/
  document.getElementById('root'),
);
