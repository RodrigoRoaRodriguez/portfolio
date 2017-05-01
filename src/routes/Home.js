import React, { Component } from 'react';
import { RouteContent } from '../utils/style-mixins';

class Home extends Component {
  render() {
    return (
      <RouteContent>
        <h1> Hello! </h1>
      </RouteContent>
    );
  }
}

export default Home;