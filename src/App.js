import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation'
import Header from './Header'
import Disclaimer from './Disclaimer'
import muiThemeable from 'material-ui/styles/muiThemeable';


class App extends Component {

  render() {
    let AppStyle = {fontFamily:this.props.muiTheme.fontFamily}

    return (
      <div className="App" style={AppStyle}>
        <Navigation />
        <Header />
        <Disclaimer />
      </div>
    )
  }
}

export default muiThemeable()(App);
