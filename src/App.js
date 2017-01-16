import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from './Navigation'
import Header from './Header'
import Disclaimer from './Disclaimer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Disclaimer />
      </div>
    );
  }
}

export default App;
