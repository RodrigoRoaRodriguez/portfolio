import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
// import Home from './Routes/Home';
// import Skills from './Routes/Skills';
// import Portfolio from './Routes/Portfolio';
import './index.css';
// import reduxStore from './scripts/reducers/root';

ReactDOM.render(
  <App />,
  /*<Provider store={reduxStore}>
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
