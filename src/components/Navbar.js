import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ERP System
        </Typography>
        <Button color="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Dashboard
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/Products" style={{ textDecoration: 'none', color: 'white' }}>
            Products
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/Orders" style={{ textDecoration: 'none', color: 'white' }}>
            Orders
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/Calendar" style={{ textDecoration: 'none', color: 'white' }}>
            Calendar
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
