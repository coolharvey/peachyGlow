import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle the form submission here
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600 
            }}
          >
            CONTACT US
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </Typography>
          <Divider sx={{ 
            width: '80px', 
            margin: '16px auto', 
            borderColor: '#F3AAA6', 
            borderWidth: 2 
          }} />
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: "'Playfair Display', serif" }}>
                Send Us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ 
                    mt: 3, 
                    backgroundColor: '#F3AAA6', 
                    '&:hover': { 
                      backgroundColor: '#E38F8B' 
                    },
                    px: 4
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                borderRadius: 2, 
                height: '100%',
                backgroundColor: '#fef6f6' 
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Feel free to contact us through any of these channels. We are always happy to help with any questions about our natural skincare products.
              </Typography>

              <List sx={{ mb: 4 }}>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email" 
                    secondary="peachyyglow@gmail.com" 
                    primaryTypographyProps={{ 
                      fontWeight: 600, 
                      variant: 'subtitle2' 
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone" 
                    secondary="9883170550" 
                    primaryTypographyProps={{ 
                      fontWeight: 600, 
                      variant: 'subtitle2' 
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <InstagramIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Instagram" 
                    secondary="@peachyy_glow" 
                    primaryTypographyProps={{ 
                      fontWeight: 600, 
                      variant: 'subtitle2' 
                    }}
                  />
                </ListItem>
              </List>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Business Hours
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Monday - Friday: 10:00 AM - 7:00 PM
              </Typography>
              <Typography variant="body2">
                Saturday: 11:00 AM - 5:00 PM
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage; 