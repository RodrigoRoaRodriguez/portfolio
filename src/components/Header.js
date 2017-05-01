import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';


const Navigation = styled.nav`
  display: flex;
  background: #eee;
  `;

const NavItem = styled(NavLink)`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  display: block;
  padding: 1.2em;
  justify-content: flex-end;
  text-align: center;
  height: 4em;
  flex: 0 1 6em;
  color: #555;
  weight: bold;
  text-decoration: none;
  transition: color 1s, background .2s; 
  background: #eee;
  border-bottom: solid .3em ${({ color }) => color};

  &.name {
    flex: 1;
    text-align:left;
    padding: 0 0 0 1.2em;
    height: 4em;
  }

  &:hover, &.active {
    color: #000;
  }
  &:active {
    background: #fff;
  }
  &.active {
    color: #000;
    background: #fefefe;
    border-bottom: none;
  }
  `;

const Brand = styled.div` 
  display: flex;
  background: #eee;
  flex: 1;
  align-items: center;
  & > img {
    height: 3em;
    margin: 0 1em;
  }
`;
const Name = styled.div` 
  & > h1 {
    margin: 0;
    font-weight: 300;
  }
  & > h3 {
    margin: 0;
    color: gray;
    font-weight: 300;
  }
`;

let Space = styled.div`flex:1;`;

let COLORS = ['#e91e63', '#ffc107', '#4caf50', '#2196f3'];

const Header = ({ routes }) => (
  <Navigation>
    <Brand>
      <img src={logo} className="App-logo" alt="logo" />
      <NavItem to={'/'} className="name">
        <Name>
          <h1> Rodrigo Roa Rodríguez </h1>
          <h3> Data Visualization, UX & Web-Development</h3>
        </Name>
      </NavItem>
    </Brand>
    <Space />
    {routes.map((route, i) => <NavItem key={route.path} to={`/${route.path}`} color={COLORS[i]}>{route.name}</NavItem>)}
  </Navigation>
);

export default Header;
