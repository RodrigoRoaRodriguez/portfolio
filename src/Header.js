import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import profileImage from './images/profile-image.jpg'




const Header = () =>(
  <header>
    <div id="ColoredRectangle"></div>
    <Avatar size="300" src={profileImage} />
    <h1>Rodrigo Roa Rodríguez</h1>
    <h2>Javascript, UI & Data Visualization</h2>
    <h2>Developer Portfolio</h2>
  </header>
)

export default Header
