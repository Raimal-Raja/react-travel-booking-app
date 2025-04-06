import React, { useState, useEffect } from 'react';
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
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  
  // State for carousel
  const [activeStep, setActiveStep] = useState(0);
  const carouselItems = [
    // {
    //   image: "https://bykea.com/wp-content/uploads/2021/09/03-Bykea-Lower-Banner-SJ-Ride-e15839371395834.png",
    //   caption: "Comfortable Rides Across Badin"
    // },
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

  // Auto carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Rotate every 5 seconds
    
    return () => {
      clearInterval(timer);
    };
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % carouselItems.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? carouselItems.length - 1 : prevActiveStep - 1
    );
  };

  // Navigation functions for buttons
  const handleBookRide = () => {
    navigate('/booking');
  };

  const handleBecomeRider = () => {
    navigate('./become-rider');
  };

  return (
    <>
      {/* Hero Section - Centered Content */}
      <Box 
        className="hero-section" 
        sx={{ 
          pt: 12, 
          pb: 8, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #004d40 0%, #00796b 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
              Your Premium Ride Service in Badin
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Experience safe, reliable, and comfortable rides at competitive prices. Join thousands of satisfied customers today!
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
              <Button 
                variant="contained" 
                onClick={handleBookRide}
                sx={{ 
                  bgcolor: 'white', 
                  color: '#004d40',
                  fontWeight: 'bold',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    bgcolor: '#e0f2f1',
                    transform: 'scale(1.05)',
                  }
                }}
              >
                Book a Ride
              </Button>
              <Button 
                variant="outlined" 
                onClick={handleBecomeRider}
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  fontWeight: 'bold',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.05)',
                  }
                }}
              >
                Become a Rider
              </Button>
            </Box>
          </motion.div>
          
          {/* Centered Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Box sx={{ maxWidth: '80%', mx: '500%' }}>
              <Box component="img" src="/images/BadinRideMod1.png" alt="Badin Rides" sx={{ width: '100%',boxSizing:'50px'}} />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section - Row of Images (CountUp visualizations) */}
      <Box 
        sx={{ 
          py: 5, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
        }}
      >
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
                { end: 5000, suffix: "+", label: "Happy Customers" },
                { end: 200, suffix: "+", label: "Active Riders" },
                { end: 15000, suffix: "+", label: "Completed Rides" },
                { end: 4.8, decimals: 1, label: "Average Rating" }
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Box 
                    className="stat-card" 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      borderRadius: '10px',
                      padding: '20px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      background: 'white',
                      height: '100%',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      component="div" 
                      className="stat-number"
                      sx={{ color: '#004d40', fontWeight: 'bold' }}
                    >
                      <CountUp 
                        end={stat.end} 
                        suffix={stat.suffix || ""} 
                        decimals={stat.decimals || 0} 
                        duration={2.5} 
                      />
                    </Typography>
                    <Typography 
                      variant="body1" 
                      component="div" 
                      className="stat-label"
                      sx={{ mt: 1, fontWeight: 'medium' }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* New Carousel Section */}
      <Box sx={{ py: 5, bgcolor: '#004d40' }}>
        <Container>
          <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            {carouselItems.map((item, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{ 
                  opacity: activeStep === index ? 1 : 0,
                  scale: activeStep === index ? 1 : 0.92,
                  zIndex: activeStep === index ? 1 : 0
                }}
                transition={{ duration: 0.7 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
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
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: activeStep === index ? 0 : 50,
                    opacity: activeStep === index ? 1 : 0
                  }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      position: 'absolute', 
                      bottom: '20px', 
                      color: 'white', 
                      bgcolor: 'rgba(0,77,64,0.8)', 
                      px: 3, 
                      py: 1, 
                      borderRadius: '4px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    {item.caption}
                  </Typography>
                </motion.div>
              </motion.div>
            ))}
            <Button 
              onClick={handleBack}
              sx={{ 
                position: 'absolute', 
                left: '10px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                minWidth: '48px',
                width: '48px',
                height: '48px',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.5)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                transition: 'transform 0.3s, background-color 0.3s'
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
                borderRadius: '50%',
                minWidth: '48px',
                width: '48px',
                height: '48px',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.5)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                transition: 'transform 0.3s, background-color 0.3s'
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
                    bgcolor: activeStep === index ? '#e0f2f1' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, background-color 0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      bgcolor: activeStep === index ? '#e0f2f1' : 'rgba(255,255,255,0.7)'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section - Text Content */}
      <Box 
        sx={{ 
          py: 5, 
          bgcolor: 'background.paper', 
          textAlign: 'center'
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                textAlign: 'center', 
                mb: 5,
                color: '#004d40',
                fontWeight: 700,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  width: '80px',
                  height: '4px',
                  bgcolor: '#004d40',
                  transform: 'translateX(-50%)'
                }
              }}
            >
              Why Choose Badin Rides?
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                At Badin Rides, we prioritize your experience by providing exceptional service that stands out from the rest.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section - Row of Images (Feature Icons) */}
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <ShieldIcon sx={{ fontSize: 48 }} />, title: "Safe & Secure", text: "All our riders are verified and trained professionals. Your safety is our top priority." },
              { icon: <AccessTimeIcon sx={{ fontSize: 48 }} />, title: "Quick Pickup", text: "Get picked up within minutes of booking your ride. No more waiting!" },
              { icon: <AccountBalanceWalletIcon sx={{ fontSize: 48 }} />, title: "Best Rates", text: "Enjoy competitive prices and transparent fare calculation." }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="feature-card" 
                    sx={{ 
                      height: '100%', 
                      textAlign: 'center',
                      borderRadius: '10px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardContent>
                      <Box 
                        sx={{ 
                          color: '#004d40', 
                          mb: 3, 
                          display: 'flex', 
                          justifyContent: 'center',
                          transform: 'scale(1.2)',
                          '&:hover': {
                            animation: 'pulse 1.5s infinite'
                          },
                          '@keyframes pulse': {
                            '0%': { transform: 'scale(1.2)' },
                            '50%': { transform: 'scale(1.35)' },
                            '100%': { transform: 'scale(1.2)' }
                          }
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1">
                        {feature.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* App Download Section - Text Content */}
      <Box 
        sx={{ 
          py: 5, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)'
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                mb: 4,
                color: '#004d40',
                fontWeight: 700
              }}
            >
              Download Our Mobile App
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography variant="h6" component="p" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Get the best experience with our mobile app. Book rides, track your driver, and manage payments - all in one place.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* App Images & Buttons Section */}
      <Box 
        sx={{ 
          py: 5,
          background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)'
        }}
      >
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center', mb: 4 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box 
                  component="img" 
                  src="https://pngimg.com/d/qr_code_PNG33.png" 
                  alt="Mobile App" 
                  sx={{ 
                    width: '20%', 
                    mx: 'auto',
                    borderRadius: '15px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }} 
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Button 
                    variant="contained" 
                    color="inherit" 
                    startIcon={<AppleIcon />}
                    sx={{ 
                      bgcolor: '#000', 
                      color: '#fff', 
                      transition: 'transform 0.3s',
                      '&:hover': { 
                        bgcolor: '#333',
                        transform: 'scale(1.05)'
                      } 
                    }}
                  >
                    App Store
                  </Button>
                  <Button 
                    variant="contained" 
                    color="inherit" 
                    startIcon={<AndroidIcon />}
                    sx={{ 
                      bgcolor: '#000', 
                      color: '#fff', 
                      transition: 'transform 0.3s',
                      '&:hover': { 
                        bgcolor: '#333',
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    Play Store
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;