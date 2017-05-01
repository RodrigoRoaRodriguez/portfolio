import React, { Component } from 'react';
import { RouteContent } from '../utils/style-mixins';

const URL = {
  linkedIn: 'https://www.linkedin.com/in/rodrigo-roa-rodr%C3%ADguez-51b68a83/',
};

//TODO: fix github card.

export default class Contact extends Component {
  render() {
    return (
      <RouteContent>
        <h1> Contact </h1>
        <a href="mailto:rorr@kth.se" target="_top">E-mail</a>
        <h2> Social </h2>
        <div className="github-card" data-github="RodrigoRoaRodriguez" data-width="400" data-height="" data-theme="medium" />

        <div>
          <a href={URL.linkedIn} target="_blank" rel="noopener noreferrer"> Linked-in </a>
        </div>
      </RouteContent>
    );
  }
}
