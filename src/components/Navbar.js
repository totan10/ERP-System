// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           ERP System
//         </Typography>
//         <Button color="inherit">
//           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//             Dashboard
//           </Link>
//         </Button>
//         <Button color="inherit">
//           <Link to="/Products" style={{ textDecoration: 'none', color: 'white' }}>
//             Products
//           </Link>
//         </Button>
//         <Button color="inherit">
//           <Link to="/Orders" style={{ textDecoration: 'none', color: 'white' }}>
//             Orders
//           </Link>
//         </Button>
//         <Button color="inherit">
//           <Link to="/Calendar" style={{ textDecoration: 'none', color: 'white' }}>
//             Calendar
//           </Link>
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// Navbar.js
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

