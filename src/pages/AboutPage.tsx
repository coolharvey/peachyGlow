import React from 'react';
import { Box, Container, Typography, Paper, Divider, Grid } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Box component="main" sx={{ pt: 5, pb: 8 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundColor: '#FBE9E7',
          mb: 6
        }}
      >
        <Container>
          <Typography 
            variant="h2" 
            component="h1" 
            align="center"
            gutterBottom
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              color: '#222'
            }}
          >
            OUR STORY
          </Typography>
          
          <Divider sx={{ 
            width: '80px', 
            margin: '16px auto 24px', 
            borderColor: '#F3AAA6', 
            borderWidth: 2 
          }} />
        </Container>
      </Box>

      {/* About Us Content */}
      <Container>
        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: "'Playfair Display', serif" }}>
                We are a woman-led natural skincare brand
              </Typography>
              <Typography variant="body1" paragraph>
                We are celebrating the strength, beauty, and empowerment of women through clean, conscious self-care.
              </Typography>
              <Typography variant="body1" paragraph>
                Our brand is all about harnessing the power of nature to create effective skincare products that nourish and enhance your skin. We understand the unique needs and challenges that everyone faces when it comes to skincare.
              </Typography>
              <Typography variant="body1">
                We're proud to offer products that are not only natural but also tailored to meet the specific needs of your skin. Join us on this journey to embrace your natural beauty and radiate confidence! 💪🌿✨
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden' }}>
              <img 
                src={process.env.PUBLIC_URL + "/images/Founder.png"}
                alt="Founder of Peachy Glow" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }} 
              />
            </Paper>
          </Grid>
        </Grid>

        {/* Why Choose Us */}
        <Box sx={{ py: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              mb: 1
            }}
          >
            WHY CHOOSE US
          </Typography>
          
          <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 5 }}>
            We are a homegrown brand committed to quality, crafting skincare with only natural ingredients. Our products are kind to your skin, safe for your body, and gentle on the planet — promoting beauty through sustainability.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  backgroundColor: '#fef6f6',
                  borderRadius: 4
                }}
              >
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    backgroundColor: '#F3AAA6', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                  <Typography variant="h5" color="white">1</Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  VISIBLE RESULTS, GUILT-FREE
                </Typography>
                <Typography variant="body2">
                  Our formulations are effective, gentle, and safe — promoting real skin and hair health without harmful side effects.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  backgroundColor: '#fef6f6',
                  borderRadius: 4
                }}
              >
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    backgroundColor: '#F3AAA6', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                  <Typography variant="h5" color="white">2</Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  NATURAL INGREDIENTS
                </Typography>
                <Typography variant="body2">
                  We use only pure, chemical-free, and skin-loving ingredients sourced from nature.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  backgroundColor: '#fef6f6',
                  borderRadius: 4
                }}
              >
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    backgroundColor: '#F3AAA6', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                  <Typography variant="h5" color="white">3</Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  HOMEGROWN WITH LOVE
                </Typography>
                <Typography variant="body2">
                  Every product is handmade in small batches to ensure freshness, quality, and care.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage; 