import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            ImpressArt
          </RouterLink>
        </Typography>
        <Box>
          <Button sx={{color: 'text.primary'}} component={RouterLink} to="/">
            Home
          </Button>
          <Button sx={{color: 'text.primary'}} component={RouterLink} to="/about">
            About
          </Button>
          <Button sx={{color: 'text.primary'}} component={RouterLink} to="/services">
            Services
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/contact"
            sx={{ ml: 2 }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
