import React from 'react';
// import { Link } from 'react-router-dom';
import {Link} from "react-router-dom";

import { Box, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'text.secondary', color: 'white', py: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h5" sx={{ mb: 4 }}>
              About Badin Rides
            </Typography>
            <Typography variant="body1">
              Your trusted ride service in Badin, providing safe and reliable transportation solutions for everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h5" sx={{ mb: 4 }}>
              Quick Links
            </Typography>
            <List>
              {/* <ListItem component={Link} to="/about" sx={{ textDecoration: 'none', color: 'white' }}> */}
                {/* <ListItemText primary="About Us" /> */}
              {/* </ListItem> */}
              <ListItem component={Link} to="/services" sx={{ textDecoration: 'none', color: 'white' }}>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem component={Link} to="/careers" sx={{ textDecoration: 'none', color: 'white' }}>
                <ListItemText primary="Careers" />
              </ListItem>
              <ListItem component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'white' }}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h5" sx={{ mb: 4 }}>
              Contact Us
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="support@badinrides.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+92 3180130173" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'white' }}>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Badin, Sindh, Pakistan" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.2)', pt: 4, mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; 2024 Badin Rides. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;