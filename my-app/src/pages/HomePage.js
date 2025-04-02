import React from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

import { Container, Grid, Typography, Button, Box, Card, CardContent } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CountUp from 'react-countup';

const HomePage = () => {
  return (
    <>
      <Box className="hero-section" sx={{ pt: 12, pb: 8 }}>
        <Container>
          <Grid container alignItems="center" className="hero-content">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
                Your Premium Ride Service in Badin
              </Typography>
              <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                Experience safe, reliable, and comfortable rides at competitive prices. Join thousands of satisfied customers today!
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  component={Link} 
                  to="/booking"
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: '#f8f9fa',
                    }
                  }}
                >
                  Book a Ride
                </Button>
                <Button 
                  variant="outlined" 
                  component={Link} 
                  to="/become-rider"
                  sx={{ 
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Become a Rider
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 } }}>
              <Box component="img" src="/images/BadinRideMod1.png" alt="Badin Rides" sx={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={5000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Happy Customers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={200} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Active Riders
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={15000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Completed Rides
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={4.8} decimals={1} duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Average Rating
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 5 }}>
            Why Choose Badin Rides?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card className="feature-card" sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    <ShieldIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    Safe & Secure
                  </Typography>
                  <Typography variant="body1">
                    All our riders are verified and trained professionals. Your safety is our top priority.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="feature-card" sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    <AccessTimeIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    Quick Pickup
                  </Typography>
                  <Typography variant="body1">
                    Get picked up within minutes of booking your ride. No more waiting!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="feature-card" sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    <AccountBalanceWalletIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    Best Rates
                  </Typography>
                  <Typography variant="body1">
                    Enjoy competitive prices and transparent fare calculation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
                Download Our Mobile App
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 4 }}>
                Get the best experience with our mobile app. Book rides, track your driver, and manage payments - all in one place.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  color="inherit" 
                  startIcon={<AppleIcon />}
                  sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
                >
                  App Store
                </Button>
                <Button 
                  variant="contained" 
                  color="inherit" 
                  startIcon={<AndroidIcon />}
                  sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
                >
                  Play Store
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src="/images/mobileapp.jpg" alt="Mobile App" sx={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;