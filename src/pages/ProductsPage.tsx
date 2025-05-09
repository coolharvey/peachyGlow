import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Tabs, Tab, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import { getProductsByCategory, products, CATEGORIES } from '../data/products';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState<string>(Object.values(CATEGORIES)[0]);

  // Check if we have a category in location state (from ProductDetailsPage)
  useEffect(() => {
    if (location.state && location.state.category) {
      setCurrentCategory(location.state.category);
    }
  }, [location.state]);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setCurrentCategory(newValue);
  };

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#FBE9E7', py: 6, mb: 2 }}>
        <Container>
          <Typography 
            variant="h2" 
            component="h1" 
            align="center"
            gutterBottom
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }
            }}
          >
            NATURAL SKINCARE PRODUCTS
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              fontWeight: 300,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
            }}
          >
            Glow the Natural Way!
          </Typography>
          <Divider sx={{ 
            width: '80px', 
            margin: '20px auto', 
            borderColor: '#F3AAA6', 
            borderWidth: 2 
          }} />
        </Container>
      </Box>

      {/* Category Navigation */}
      <Container>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, overflowX: 'auto' }}>
          <Tabs 
            value={currentCategory} 
            onChange={handleCategoryChange} 
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ 
              '& .MuiTab-root': { 
                textTransform: 'none',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                fontWeight: 500,
                px: { xs: 2, sm: 3 },
                minWidth: { xs: 'auto', sm: 90 },
                '&.Mui-selected': {
                  color: '#E38F8B'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#F3AAA6'
              }
            }}
          >
            {Object.values(CATEGORIES).map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Product Lists by Category */}
        <Box mb={6}>
          {currentCategory && (
            <ProductList 
              products={getProductsByCategory(currentCategory)} 
              title={currentCategory}
              subtitle={`Discover our range of natural ${currentCategory.toLowerCase()} products`}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsPage; 