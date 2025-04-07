import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Define the product interface
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const StyledCard = styled(Card)({
  maxWidth: 340,
  borderRadius: 12,
  boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s ease',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  },
});

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, pb: 2 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60 }}>
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            ₹{product.price}
          </Typography>
          <Button 
            component={Link}
            to={`/products/${product.id}`}
            variant="contained" 
            size="small"
            sx={{ 
              backgroundColor: '#F3AAA6', 
              '&:hover': { 
                backgroundColor: '#E38F8B' 
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard; 