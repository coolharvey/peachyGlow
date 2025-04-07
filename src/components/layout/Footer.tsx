import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#FBE9E7', 
        py: { xs: 4, md: 6 }, 
        mt: 'auto',
        borderTop: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 2, textAlign: { xs: 'center', sm: 'left' } }}>
              Peachy Glow
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: { xs: '100%', sm: 300 }, textAlign: { xs: 'center', sm: 'left' } }}>
              We are a woman-led natural skincare brand, celebrating the strength, beauty, and empowerment of women through clean, conscious self-care.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: { xs: 'center', sm: 'left' } }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }}>
              <MuiLink component={RouterLink} to="/" color="inherit" underline="hover" sx={{ mb: 1 }}>Home</MuiLink>
              <MuiLink component={RouterLink} to="/products" color="inherit" underline="hover" sx={{ mb: 1 }}>Products</MuiLink>
              <MuiLink component={RouterLink} to="/about" color="inherit" underline="hover" sx={{ mb: 1 }}>About Us</MuiLink>
              <MuiLink component={RouterLink} to="/contact" color="inherit" underline="hover" sx={{ mb: 1 }}>Contact</MuiLink>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: { xs: 'center', sm: 'left' } }}>Stay Connected</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <EmailIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                peachyyglow@gmail.com
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <WhatsAppIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                9883170550
              </Typography>
              <Box>
                <IconButton aria-label="instagram" href="https://instagram.com/peachyy_glow" target="_blank" sx={{ mr: 1, color: '#E1306C' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="facebook" href="#" target="_blank" sx={{ color: '#4267B2' }}>
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: { xs: 3, md: 5 }, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Peachy Glow. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Handmade with ❤️ | Sustainable Skincare
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 