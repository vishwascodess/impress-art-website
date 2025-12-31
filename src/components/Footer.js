import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMedia = [
  { icon: <FacebookIcon />, url: 'https://facebook.com' },
  { icon: <TwitterIcon />, url: 'https://twitter.com' },
  { icon: <InstagramIcon />, url: 'https://instagram.com' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              ImpressArt
            </Typography>
            <Typography variant="body2" component="p">
              Your partner in high-quality printing and branding solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>About Us</Link>
            <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1 }}>Services</Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              {socialMedia.map((item, index) => (
                <IconButton
                  key={index}
                  aria-label="social media link"
                  color="inherit"
                  component="a"
                  href={item.url}
                  target="_blank"
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          {'© '}
          <Link color="inherit" href="#">
            ImpressArt
          </Link>{' '}
          {new Date().getFullYear()}
          {'. All Rights Reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
