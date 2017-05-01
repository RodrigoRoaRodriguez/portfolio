import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  `;


const Header = ({routes}) => (
  <Navigation>
    <span> logo </span>
    <span> Rodrigo Roa Rodríguez </span>
      {routes.map(route => <NavLink key={route.path} to={`/${route.path}`}>{route.name}</NavLink>)}
  </Navigation>
);

export default Header;
