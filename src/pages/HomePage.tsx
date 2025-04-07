import React from 'react';
import { Box, Button, Container, Typography, Grid, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <Box component="main">
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundColor: '#FBE9E7', 
          py: { xs: 8, md: 12 }, 
          mb: 6 
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/Brand_logo.png"
                alt="Peachy Glow"
                sx={{
                  height: 80,
                  width: 'auto',
                  mb: 2,
                  display: 'block'
                }}
              />
              <Typography
                variant="h4"
                component="h2"
                sx={{ 
                  mb: 4,
                  fontWeight: 500,
                  color: '#333'
                }}
              >
                NATURAL SKINCARE PRODUCTS
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, fontWeight: 300 }}>
                Glow the Natural Way!
              </Typography>
              <Button 
                component={Link} 
                to="/products" 
                variant="contained" 
                size="large"
                sx={{ 
                  backgroundColor: '#F3AAA6', 
                  '&:hover': { 
                    backgroundColor: '#E38F8B' 
                  },
                  px: 4,
                  py: 1.5
                }}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src="/hero-image.jpg" 
                alt="Natural skincare products" 
                sx={{ 
                  width: '100%', 
                  borderRadius: 2,
                  boxShadow: 3
                }} 
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontFamily: "'Playfair Display', serif"
            }}
          >
            WHY CHOOSE US
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
            We are a homegrown brand committed to quality, crafting skincare with only natural ingredients. Our products are kind to your skin, safe for your body, and gentle on the planet — promoting beauty through sustainability.
          </Typography>
          <Divider sx={{ 
            width: '80px', 
            margin: '20px auto', 
            borderColor: '#F3AAA6', 
            borderWidth: 2 
          }} />
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                height: '100%',
                backgroundColor: '#fef6f6',
                borderRadius: 2
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
              <Typography variant="h6" gutterBottom>
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
                borderRadius: 2
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
              <Typography variant="h6" gutterBottom>
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
                borderRadius: 2
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
              <Typography variant="h6" gutterBottom>
                HOMEGROWN WITH LOVE
              </Typography>
              <Typography variant="body2">
                Every product is handmade in small batches to ensure freshness, quality, and care.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Box sx={{ py: 6, backgroundColor: '#fdf1f0' }}>
        <ProductList 
          products={getFeaturedProducts()} 
          title="Featured Products"
          subtitle="Our best-selling natural skincare products"
        />
      </Box>

      {/* About Us Brief */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component="img" 
              src="/images/Founder.png"
              alt="Founder of Peachy Glow" 
              sx={{ 
                width: '100%', 
                borderRadius: 2,
                boxShadow: 3
              }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontFamily: "'Playfair Display', serif"
              }}
            >
              OUR STORY
            </Typography>
            <Typography variant="body1" paragraph>
              We are a woman-led natural skincare brand, celebrating the strength, beauty, and empowerment of women through clean, conscious self-care.
            </Typography>
            <Typography variant="body1" paragraph>
              Our brand is all about harnessing the power of nature to create effective skincare products that nourish and enhance your skin. We understand the unique needs and challenges that everyone faces when it comes to skincare.
            </Typography>
            <Button 
              component={Link} 
              to="/about" 
              variant="outlined" 
              sx={{ 
                borderColor: '#F3AAA6', 
                color: '#D6635F', 
                '&:hover': { 
                  borderColor: '#E38F8B', 
                  backgroundColor: 'rgba(243, 170, 166, 0.1)' 
                },
                mt: 2
              }}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage; 