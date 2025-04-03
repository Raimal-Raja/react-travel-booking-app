import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

import { Container, Grid, Typography, Button, Box, Card, CardContent, Paper } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CountUp from 'react-countup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePage = () => {
  // State for carousel
  const [activeStep, setActiveStep] = useState(0);
  const carouselItems = [
    {
      image: "https://bykea.com/wp-content/uploads/2021/09/03-Bykea-Lower-Banner-SJ-Ride-e15839371395834.png",
      caption: "Comfortable Rides Across Badin"
    },
    {
      image: "https://bykea.com/wp-content/uploads/2021/10/flywheel_bg.png",
      caption: "Professional Drivers at Your Service"
    },
    {
      image: "https://bykea.com/wp-content/uploads/2022/09/Fold_02_all-verticals-1.png",
      caption: "Explore the City with Badin Rides"
    },
    {
      image: "https://bykea.com/wp-content/uploads/elementor/thumbs/management-q9ov8gh9dwhuqrkpkl86jpkbdkfvmbc53svlcjrf6o.jpg",
      caption: "Explore the City with Badin Rides"
    }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % carouselItems.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? carouselItems.length - 1 : prevActiveStep - 1
    );
  };

  return (
    <>
      {/* Hero Section - Centered Content */}
      <Box className="hero-section" sx={{ pt: 12, pb: 8, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
            Your Premium Ride Service in Badin
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Experience safe, reliable, and comfortable rides at competitive prices. Join thousands of satisfied customers today!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
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
                  bgcolor: 'rgba(250, 6, 6, 0.1)',
                }
              }}
            >
              Become a Rider
            </Button>
          </Box>
          
          {/* Centered Hero Image */}
          <Box sx={{ maxWidth: '80%', mx: 'auto' }}>
            <Box component="img" src="/images/BadinRideMod1.png" alt="Badin Rides" sx={{ width: '100%'}} />
          </Box>
        </Container>
      </Box>

      {/* Stats Section - Row of Images (CountUp visualizations) */}
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={5000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Happy Customers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={200} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Active Riders
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={15000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Completed Rides
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

      {/* New Carousel Section */}
      <Box sx={{ py: 5, bgcolor: '#f5f5f5' }}>
        <Container>
          <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: activeStep === index ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box 
                  component="img" 
                  src={item.image} 
                  alt={`Carousel image ${index + 1}`}
                  sx={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }} 
                />
                <Typography 
                  variant="h5" 
                  sx={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    color: 'white', 
                    bgcolor: 'rgba(0,0,0,0.5)', 
                    px: 3, 
                    py: 1, 
                    borderRadius: '4px' 
                  }}
                >
                  {item.caption}
                </Typography>
              </Box>
            ))}
            <Button 
              onClick={handleBack}
              sx={{ 
                position: 'absolute', 
                left: '10px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.3)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' }
              }}
            >
              <ArrowBackIosIcon />
            </Button>
            <Button 
              onClick={handleNext}
              sx={{ 
                position: 'absolute', 
                right: '10px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.3)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' }
              }}
            >
              <ArrowForwardIosIcon />
            </Button>
            <Box 
              sx={{ 
                position: 'absolute', 
                bottom: '0px', 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 1,
                py: 1
              }}
            >
              {carouselItems.map((_, index) => (
                <Box 
                  key={index}
                  onClick={() => setActiveStep(index)}
                  sx={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    bgcolor: activeStep === index ? 'primary.main' : 'grey.400',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section - Text Content */}
      <Box sx={{ py: 5, bgcolor: 'background.paper', textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 5 }}>
            Why Choose Badin Rides?
          </Typography>
          <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              At Badin Rides, we prioritize your experience by providing exceptional service that stands out from the rest.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Features Section - Row of Images (Feature Icons) */}
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card className="feature-card" sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 3, display: 'flex', justifyContent: 'center' }}>
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
              <Card className="feature-card" sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 3, display: 'flex', justifyContent: 'center' }}>
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
              <Card className="feature-card" sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 3, display: 'flex', justifyContent: 'center' }}>
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

      {/* App Download Section - Text Content */}
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
            Download Our Mobile App
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Get the best experience with our mobile app. Book rides, track your driver, and manage payments - all in one place.
          </Typography>
        </Container>
      </Box>

      {/* App Images & Buttons Section */}
      <Box sx={{ py: 5 }}>
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center', mb: 4 }}>
              <Box component="img" src="/images/mobileapp.jpg" alt="Mobile App" sx={{ width: '80%', mx: 'auto' }} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;