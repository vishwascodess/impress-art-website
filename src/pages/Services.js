import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardHeader, Grow } from '@mui/material';
import StickerIcon from '@mui/icons-material/StickyNote2Outlined';
import BillboardIcon from '@mui/icons-material/ArtTrackOutlined';
import ThreeDIcon from '@mui/icons-material/ViewInArOutlined';
import BusinessCardIcon from '@mui/icons-material/ContactMailOutlined';
import PrintIcon from '@mui/icons-material/PrintOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';

const services = [
  {
    title: 'Stickers & Labels',
    description: 'Durable, high-quality vinyl stickers and labels in any shape, size, and finish. Perfect for products, promotions, and personal expression.',
    icon: <StickerIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Large-Format Printing',
    description: 'Make a big statement with our banners, posters, and billboards. Printed on weather-resistant materials for indoor or outdoor use.',
    icon: <BillboardIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Business Cards',
    description: 'Create a lasting impression with premium business cards. A wide variety of paper stocks, finishes, and designs to choose from.',
    icon: <BusinessCardIcon fontSize="large" color="primary" />,
  },
  {
    title: '3D Letters & Signage',
    description: 'Elevate your storefront or office with custom 3D lettering and signage. Available in a range of materials, colors, and lighting options.',
    icon: <ThreeDIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Custom Apparel',
    description: 'From t-shirts and hoodies to hats and totes, we offer high-quality custom apparel printing for your brand or event.',
    icon: <PrintIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Promotional Products',
    description: 'Put your brand on anything. We source and customize a wide range of promotional items like pens, mugs, and tech accessories.',
    icon: <ShoppingBagIcon fontSize="large" color="primary" />,
  }
];

const Services = () => {
  return (
    <Grow in={true} timeout={500}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Box sx={{ mb: { xs: 4, sm: 6 }, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            High-quality print and branding solutions for any project.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #e0e0e0',
                  boxShadow: 'none',
                  transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardHeader
                  avatar={service.icon}
                  title={
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                  }
                  sx={{ pb: 0, pt: 3 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grow>
  );
};

export default Services;
