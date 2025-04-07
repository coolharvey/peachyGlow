import React from 'react';
import { AppBar, Toolbar, Box, Button, Container, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box 
        component={Link} 
        to="/"
        sx={{ 
          display: 'block',
          py: 2,
          textDecoration: 'none'
        }}
      >
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/images/Brand_logo.png"}
          alt="Peachy Glow"
          sx={{
            height: 50,
            width: 'auto'
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} component={Link} to={item.path} sx={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <Container>
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Box
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/images/Brand_logo.png"}
                alt="Peachy Glow"
                sx={{
                  height: 40,
                  width: 'auto'
                }}
              />
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.title} 
                    component={Link} 
                    to={item.path}
                    sx={{ 
                      color: 'inherit',
                      mx: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(243, 170, 166, 0.1)',
                      }
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            )}
            
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header; 