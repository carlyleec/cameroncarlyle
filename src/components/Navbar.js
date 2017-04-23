import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import BackArrow from './BackArrow';


const NavbarWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  font-weight: 400;
  flex-basis: 90%;
  margin-top: 10px;
`;

const Nav = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  color: #2196F3
`;

const Title = styled.h1`
  font-size: 1em;
  color: inherit;
  margin: auto;
`;

const pageTitle = page => (
  page.split('/').reverse()[0].toUpperCase()
);


const Navbar = ({ page }) => {
  if (page === '/') {
    return (
      <NavbarWrapper justifyContent="flex-end">
        <Nav to="/contact">CONTACT</Nav>
      </NavbarWrapper>
    );
  }
  return (
    <NavbarWrapper justifyContent="space-between">
      <Nav to="">MENU</Nav>
      <Title><BackArrow size="1em" /> {pageTitle(page)} </Title>
      <Nav to="/contact">CONTACT</Nav>
    </NavbarWrapper>
  );
};


Navbar.propTypes = {
  page: React.PropTypes.string,
};

export default Navbar;
