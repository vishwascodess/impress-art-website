import React from 'react';
import { Container, Typography, Box, Grid, Grow } from '@mui/material';

const About = () => {
  return (
    <Grow in={true} timeout={500}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            About ImpressArt
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Your Partner in Printing and Branding
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At ImpressArt, our mission is to empower businesses by providing exceptional printing and branding services. We are committed to delivering superior quality products that help our clients make a memorable impact and build a strong brand presence. We strive for excellence in every project, no matter the size.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h2" gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" paragraph>
                ImpressArt is a team of printing professionals, designers, and strategists who are passionate about quality and craftsmanship. With years of experience in the industry, we have the expertise to handle a diverse range of printing needs, from intricate business cards to large-scale billboards. We are your one-stop-shop for all things print.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grow>
  );
};

export default About;
