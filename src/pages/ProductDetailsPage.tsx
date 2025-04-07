import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Divider } from '@mui/material';
import { Product } from '../components/products/ProductCard';
import products from '../data/products';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Product Not Found
        </Typography>
        <Button component={Link} to="/products" variant="contained" sx={{ mt: 2 }}>
          Back to Products
        </Button>
      </Container>
    );
  }

  const handleBackToProducts = () => {
    // Navigate back to products page with state to set the correct category
    navigate('/products', { state: { category: product.category } });
  };

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.imageUrl}
              alt={product.name}
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
                maxHeight: { xs: '350px', md: '500px' },
                objectFit: 'contain'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "'Playfair Display', serif",
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              ₹{product.price}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, color: 'text.secondary' }}>
              Category: {product.category}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#F3AAA6',
                  '&:hover': {
                    backgroundColor: '#E38F8B'
                  },
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleBackToProducts}
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#F3AAA6',
                  color: '#D6635F',
                  '&:hover': {
                    borderColor: '#E38F8B',
                    backgroundColor: 'rgba(243, 170, 166, 0.1)'
                  },
                  mt: { xs: 2, sm: 0 },
                  ml: { xs: 0, sm: 2 },
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                Back to Products
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetailsPage; 