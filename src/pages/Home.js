import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper, Grow, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import QualityIcon from '@mui/icons-material/HighQuality';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <QualityIcon fontSize="large" color="primary" />,
    title: 'Superior Quality',
    description: 'We use the latest printing technology and highest quality materials to ensure your products look amazing.',
  },
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: 'Fast Turnaround',
    description: 'Get your orders processed and delivered quickly without compromising on quality. We meet your deadlines.',
  },
  {
    icon: <SupportIcon fontSize="large" color="primary" />,
    title: 'Expert Support',
    description: 'Our team of printing experts is here to help you every step of the way, from design to delivery.',
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          pb: { xs: 8, sm: 12 },
          textAlign: 'center',
          color: 'white',
          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        }}
      >
        <Container maxWidth="md">
          <Grow in={true} timeout={500}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.75rem' }
              }}
            >
              Your Vision, Printed.
            </Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Typography
              variant="h5"
              align="center"
              paragraph
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              High-quality printing and branding solutions that make your business stand out. From business cards to billboards, we bring your ideas to life.
            </Typography>
          </Grow>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/services"
            >
              Explore Our Services
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
              size="large"
              component={Link}
              to="/contact"
            >
              Get a Quote
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Why Choose ImpressArt?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            We are more than just a printing company.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow in={true} timeout={500 * (index + 1)}>
                <Paper elevation={0} sx={{ p: 3, textAlign: 'center', backgroundColor: 'transparent' }}>
                  {feature.icon}
                  <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
