import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import profileImage from './images/profile-image.jpg'
import muiThemeable from 'material-ui/styles/muiThemeable'
import styled from 'styled-components'
import {MIN_WIDTH} from './constants/layout'

const Header = (props) => {

  let {
    primary1Color,
    primary2Color,
    alternateTextColor,
    secondaryTextColor
  } = props.muiTheme.palette

  let avatarRadius = 150;
  let nameFontSize = 32;

  const Name = styled.h1`
  color: ${alternateTextColor};
  font-size: ${nameFontSize}px;
  `

  const Title = styled.h2`
  color: ${secondaryTextColor};
  `
  const Subtitle = styled.h3`
    color: ${secondaryTextColor};
  `
  const TopStripe = styled.div`
    height:${1.5*avatarRadius}px;
    background-color: ${primary2Color};
    margin-bottom: ${-avatarRadius}px;
    padding-top: 0px;
    overflow:hidden;
    @media(max-width: 330px) {
      height:${1.5*avatarRadius+nameFontSize}px;
    }
  `
  const Container = styled.div`
    background-color: ${primary1Color};
    padding: 1.5em 0;
  `

  return(
    <header>
      <TopStripe>
        <Name>Rodrigo Roa Rodríguez</Name>
      </TopStripe>
      <Avatar size={2*avatarRadius} src={profileImage} />
      <Title>Javascript, UI & Data Visualization</Title>
      <Subtitle>Developer Portfolio</Subtitle>
    </header>
  )
}

export default muiThemeable()(Header)
