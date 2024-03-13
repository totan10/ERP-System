import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>ERP System</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
          <LinkContainer to="/Dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Orders">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Calendar">
              <Nav.Link>Calendar View</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

