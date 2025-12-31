import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Grow } from '@mui/material';

const Contact = () => {
  return (
    <Grow in={true} timeout={500}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Get a Free Quote
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph align="center">
            Have a project in mind? Fill out the form below to get a free quote for our printing and branding services. We'll get back to you as soon as possible.
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="name" label="Your Name" name="name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Your Email Address"
                  name="email"
                  type="email"
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="company"
                  label="Company (Optional)"
                  name="company"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="message"
                  label="Tell us about your project"
                  name="message"
                  multiline
                  rows={6}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Request
            </Button>
          </Box>
        </Box>
      </Container>
    </Grow>
  );
};

export default Contact;
