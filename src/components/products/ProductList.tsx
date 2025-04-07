import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductCard, { Product } from './ProductCard';

interface ProductListProps {
  products: Product[];
  title: string;
  subtitle?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title, subtitle }) => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              position: 'relative',
              display: 'inline-block',
              fontWeight: 500,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
                px: { xs: 2, md: 0 }
              }}
            >
              {subtitle}
            </Typography>
          )}
          <Divider sx={{ 
            width: '80px', 
            margin: '16px auto', 
            borderColor: '#F3AAA6', 
            borderWidth: 2 
          }} />
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={4} lg={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductList; 