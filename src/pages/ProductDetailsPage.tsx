import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Divider } from '@mui/material';
import { Product } from '../components/products/ProductCard';
import products from '../data/products';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.imageUrl.startsWith('http') ? product.imageUrl : process.env.PUBLIC_URL + product.imageUrl}
              alt={product.name}
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
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
                mb: 2
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 'bold'
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
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#F3AAA6',
                '&:hover': {
                  backgroundColor: '#E38F8B'
                },
                mt: 3,
                px: 4,
                py: 1.5
              }}
            >
              Add to Cart
            </Button>
            <Button
              component={Link}
              to="/products"
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#F3AAA6',
                color: '#D6635F',
                '&:hover': {
                  borderColor: '#E38F8B',
                  backgroundColor: 'rgba(243, 170, 166, 0.1)'
                },
                mt: 3,
                ml: 2,
                px: 4,
                py: 1.5
              }}
            >
              Back to Products
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetailsPage; 