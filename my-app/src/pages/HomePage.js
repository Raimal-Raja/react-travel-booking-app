// import React from 'react';
// // import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

// import { Container, Grid, Typography, Button, Box, Card, CardContent } from '@mui/material';
// import ShieldIcon from '@mui/icons-material/Shield';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import AppleIcon from '@mui/icons-material/Apple';
// import AndroidIcon from '@mui/icons-material/Android';
// import CountUp from 'react-countup';

// const HomePage = () => {
//   return (
//     <>
//       <Box className="hero-section" sx={{ pt: 12, pb: 8 }}>
//         <Container>
//           <Grid container alignItems="center" className="hero-content">
//             <Grid item xs={12} md={6}>
//               <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
//                 Your Premium Ride Service in Badin
//               </Typography>
//               <Typography variant="h5" component="p" sx={{ mb: 4 }}>
//                 Experience safe, reliable, and comfortable rides at competitive prices. Join thousands of satisfied customers today!
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button 
//                   variant="contained" 
//                   component={Link} 
//                   to="/booking"
//                   sx={{ 
//                     bgcolor: 'white', 
//                     color: 'primary.main',
//                     '&:hover': {
//                       bgcolor: '#f8f9fa',
//                     }
//                   }}
//                 >
//                   Book a Ride
//                 </Button>
//                 <Button 
//                   variant="outlined" 
//                   component={Link} 
//                   to="/become-rider"
//                   sx={{ 
//                     color: 'white',
//                     borderColor: 'white',
//                     '&:hover': {
//                       borderColor: 'white',
//                       bgcolor: 'rgba(255, 255, 255, 0.1)',
//                     }
//                   }}
//                 >
//                   Become a Rider
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 } }}>
//               <Box component="img" src="/images/BadinRideMod1.png" alt="Badin Rides" sx={{ width: '100%' }} />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       <Box sx={{ py: 5 }}>
//         <Container>
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6} md={3}>
//               <Box className="stat-card">
//                 <Typography variant="h3" component="div" className="stat-number">
//                   <CountUp end={5000} suffix="+" duration={2.5} />
//                 </Typography>
//                 <Typography variant="body1" component="div" className="stat-label">
//                   Happy Customers
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Box className="stat-card">
//                 <Typography variant="h3" component="div" className="stat-number">
//                   <CountUp end={200} suffix="+" duration={2.5} />
//                 </Typography>
//                 <Typography variant="body1" component="div" className="stat-label">
//                   Active Riders
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Box className="stat-card">
//                 <Typography variant="h3" component="div" className="stat-number">
//                   <CountUp end={15000} suffix="+" duration={2.5} />
//                 </Typography>
//                 <Typography variant="body1" component="div" className="stat-label">
//                   Completed Rides
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Box className="stat-card">
//                 <Typography variant="h3" component="div" className="stat-number">
//                   <CountUp end={4.8} decimals={1} duration={2.5} />
//                 </Typography>
//                 <Typography variant="body1" component="div" className="stat-label">
//                   Average Rating
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
//         <Container>
//           <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 5 }}>
//             Why Choose Badin Rides?
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Card className="feature-card" sx={{ height: '100%' }}>
//                 <CardContent>
//                   <Box sx={{ color: 'primary.main', mb: 3 }}>
//                     <ShieldIcon sx={{ fontSize: 48 }} />
//                   </Box>
//                   <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
//                     Safe & Secure
//                   </Typography>
//                   <Typography variant="body1">
//                     All our riders are verified and trained professionals. Your safety is our top priority.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card className="feature-card" sx={{ height: '100%' }}>
//                 <CardContent>
//                   <Box sx={{ color: 'primary.main', mb: 3 }}>
//                     <AccessTimeIcon sx={{ fontSize: 48 }} />
//                   </Box>
//                   <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
//                     Quick Pickup
//                   </Typography>
//                   <Typography variant="body1">
//                     Get picked up within minutes of booking your ride. No more waiting!
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card className="feature-card" sx={{ height: '100%' }}>
//                 <CardContent>
//                   <Box sx={{ color: 'primary.main', mb: 3 }}>
//                     <AccountBalanceWalletIcon sx={{ fontSize: 48 }} />
//                   </Box>
//                   <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
//                     Best Rates
//                   </Typography>
//                   <Typography variant="body1">
//                     Enjoy competitive prices and transparent fare calculation.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       <Box sx={{ py: 5 }}>
//         <Container>
//           <Grid container alignItems="center" spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
//                 Download Our Mobile App
//               </Typography>
//               <Typography variant="h6" component="p" sx={{ mb: 4 }}>
//                 Get the best experience with our mobile app. Book rides, track your driver, and manage payments - all in one place.
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button 
//                   variant="contained" 
//                   color="inherit" 
//                   startIcon={<AppleIcon />}
//                   sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
//                 >
//                   App Store
//                 </Button>
//                 <Button 
//                   variant="contained" 
//                   color="inherit" 
//                   startIcon={<AndroidIcon />}
//                   sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
//                 >
//                   Play Store
//                 </Button>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box component="img" src="/images/mobileapp.jpg" alt="Mobile App" sx={{ width: '100%' }} />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default HomePage;






import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

// MUI Components
import { 
  Container, Grid, Typography, Button, Box, Card, CardContent, 
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText,
  useMediaQuery, useTheme, Paper, Divider, Avatar
} from '@mui/material';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import ShieldIcon from '@mui/icons-material/Shield';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

// External libraries
import CountUp from 'react-countup';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Carousel images
  const carouselItems = [
    {
      image: "/images/carousel-1.jpg",
      title: "Safe Rides Across Badin",
      description: "Your comfort and safety are our top priorities"
    },
    {
      image: "/images/carousel-2.jpg",
      title: "Reliable Service 24/7",
      description: "Book a ride anytime, anywhere in Badin"
    },
    {
      image: "/images/carousel-3.jpg",
      title: "Affordable Transportation",
      description: "Premium service at competitive prices"
    },
    {
      image: "/images/carousel-4.jpg",
      title: "Join Our Community",
      description: "Become a rider and earn on your own schedule"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Book a Ride', path: '/booking' },
    { text: 'Become a Rider', path: '/become-rider' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Navbar Section */}
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 2 }}>
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DirectionsCarIcon sx={{ color: 'primary.main', fontSize: 32, mr: 1 }} />
              <Typography variant="h5" component={Link} to="/" sx={{ 
                color: 'primary.main', 
                fontWeight: 700, 
                textDecoration: 'none',
                letterSpacing: '0.5px'
              }}>
                BadinRides
              </Typography>
            </Box>
            
            {isMobile ? (
              <IconButton 
                edge="end" 
                color="primary" 
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 600,
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Carousel Section */}
      <Box sx={{ 
        position: 'relative', 
        mt: 8, 
        height: { xs: '60vh', md: '75vh' },
        overflow: 'hidden'
      }}>
        {carouselItems.map((item, index) => (
          <Box 
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: activeSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              color: 'white',
              px: 3,
              maxWidth: '800px'
            }}>
              <Typography variant="h2" sx={{ 
                fontWeight: 700, 
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontSize: { xs: '2rem', md: '3.5rem' }
              }}>
                {item.title}
              </Typography>
              <Typography variant="h5" sx={{ 
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}>
                {item.description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button 
                  variant="contained" 
                  component={Link} 
                  to="/booking"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: '30px'
                  }}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outlined" 
                  component={Link} 
                  to="/learn-more"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 600,
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '30px',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
        
        {/* Carousel Controls */}
        <IconButton 
          sx={{ 
            position: 'absolute', 
            left: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.3)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.5)',
            }
          }}
          onClick={handlePrevSlide}
        >
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        
        <IconButton 
          sx={{ 
            position: 'absolute', 
            right: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.3)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.5)',
            }
          }}
          onClick={handleNextSlide}
        >
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
        
        {/* Carousel Indicators */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 16, 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1
        }}>
          {carouselItems.map((_, index) => (
            <Box 
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: activeSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer'
              }}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </Box>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 700,
            mb: 6,
            position: 'relative',
            display: 'inline-block',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }}>
            Our Impact in Numbers
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Paper sx={{ 
                py: 4, 
                boxShadow: 3, 
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  <CountUp end={5000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1, fontWeight: 500 }}>
                  Happy Customers
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ 
                py: 4, 
                boxShadow: 3, 
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  <CountUp end={200} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1, fontWeight: 500 }}>
                  Active Riders
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ 
                py: 4, 
                boxShadow: 3, 
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  <CountUp end={15000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1, fontWeight: 500 }}>
                  Completed Rides
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ 
                py: 4, 
                boxShadow: 3, 
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  <CountUp end={4.8} decimals={1} duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1, fontWeight: 500 }}>
                  Average Rating
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content Section - Travel Pictures */}
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ 
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
            position: 'relative',
            display: 'inline-block',
            mx: 'auto',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }}>
            Explore Badin With Us
          </Typography>
          
          <Typography variant="h6" component="p" sx={{ 
            textAlign: 'center', 
            mb: 5, 
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Join thousands of travelers who choose BadinRides for convenient, safe and comfortable transportation across the city. Whether it's for work, leisure, or exploration - we've got you covered.
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Box sx={{ 
                position: 'relative', 
                height: { xs: '300px', md: '400px' },
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3
              }}>
                <Box component="img" 
                  src="/images/travel-main.jpg" 
                  alt="Family traveling" 
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }} 
                />
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white'
                }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Family Adventures
                  </Typography>
                  <Typography variant="body1">
                    Travel safely with your loved ones
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ 
                    position: 'relative', 
                    height: '190px',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3
                  }}>
                    <Box component="img" 
                      src="/images/business-travel.jpg" 
                      alt="Business travel" 
                      sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }} 
                    />
                    <Box sx={{ 
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Business Travel
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    position: 'relative', 
                    height: '190px',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3
                  }}>
                    <Box component="img" 
                      src="/images/tourism.jpg" 
                      alt="Tourism" 
                      sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }} 
                    />
                    <Box sx={{ 
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        City Exploration
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                position: 'relative', 
                height: '250px',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3
              }}>
                <Box component="img" 
                  src="/images/airport-transfer.jpg" 
                  alt="Airport transfers" 
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }} 
                />
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Airport Transfers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                position: 'relative', 
                height: '250px',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3
              }}>
                <Box component="img" 
                  src="/images/shopping.jpg" 
                  alt="Shopping trips" 
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }} 
                />
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Shopping Trips
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ 
                position: 'relative', 
                height: '250px',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3
              }}>
                <Box component="img" 
                  src="/images/nightlife.jpg" 
                  alt="Nightlife" 
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }} 
                />
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Nightlife & Entertainment
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button 
              variant="contained" 
              component={Link} 
              to="/services"
              size="large"
              sx={{ 
                px: 5, 
                py: 1.5,
                borderRadius: '30px',
                fontWeight: 600
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ 
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
            position: 'relative',
            display: 'inline-block',
            mx: 'auto',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }}>
            Why Choose BadinRides?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <Avatar sx={{ 
                      bgcolor: 'primary.light', 
                      width: 80, 
                      height: 80,
                      mb: 2
                    }}>
                      <ShieldIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Safe & Secure
                  </Typography>
                  <Typography variant="body1">
                    All our riders undergo thorough background checks and receive professional training. 
                    Your safety is our top priority, with real-time tracking and emergency support available 24/7.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <Avatar sx={{ 
                      bgcolor: 'primary.light', 
                      width: 80, 
                      height: 80,
                      mb: 2
                    }}>
                      <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Quick Pickup
                  </Typography>
                  <Typography variant="body1">
                    Get picked up within minutes of booking your ride. With our strategic placement of drivers
                    around Badin, you'll never have to wait long for your ride to arrive.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                borderRadius: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <Avatar sx={{ 
                      bgcolor: 'primary.light', 
                      width: 80, 
                      height: 80,
                      mb: 2
                    }}>
                      <AccountBalanceWalletIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Best Rates
                  </Typography>
                  <Typography variant="body1">
                    Enjoy competitive prices with transparent fare calculation. No hidden charges, 
                    no surge pricing - just honest and affordable transportation for everyone in Badin.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* App Download Section with QR Code */}
      <Box sx={{ 
        py: 8, 
        bgcolor: 'primary.main',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '50%',
          opacity: 0.05,
          backgroundImage: 'url(/images/pattern.png)',
          backgroundSize: 'cover',
          zIndex: 0
        }}/>
        
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" sx={{ 
                mb: 4, 
                fontWeight: 700,
                textShadow: '0px 1px 2px rgba(0,0,0,0.2)'
              }}>
                Download Our Mobile App
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 4 }}>
                Get the best experience with our mobile app. Book rides, track your driver, 
                and manage payments - all in one place. Available for iOS and Android devices.
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    borderRadius: 2
                  }}>
                    <Box component="img" 
                      src="/images/qr-code.png" 
                      alt="QR Code" 
                      sx={{ 
                        width: '150px',
                        height: '150px',
                        mb: 2
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      Scan to download
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="inherit" 
                      startIcon={<AppleIcon />}
                      fullWidth
                      sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main', 
                        py: 1.5,
                        fontWeight: 600,
                        '&:hover': { 
                          bgcolor: '#f8f9fa' 
                        } 
                      }}
                    >
                      App Store
                    </Button>
                    <Button 
                      variant="contained" 
                      color="inherit" 
                      startIcon={<AndroidIcon />}
                      fullWidth
                      sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main', 
                        py: 1.5,
                        fontWeight: 600,
                        '&:hover': { 
                          bgcolor: '#f8f9fa' 
                        } 
                      }}
                    >
                      Play Store
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                * Download the app now and get 25% off on your first ride!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Box 
                component="img" 
                src="/images/app-mockup.png" 
                alt="BadinRides Mobile App" 
                sx={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
                  borderRadius: 2,
                  transform: { xs: 'none', md: 'rotate(-5deg)' }
                }} 
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ bgcolor: '#222', color: 'white', pt: 8, pb: 4 }}>
        <Container>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <DirectionsCarIcon sx={{ fontSize: 32, mr: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    BadinRides
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Your premium ride service in Badin, providing safe and reliable transportation for all your needs.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {navItems.map((item) => (
                  <Box component="li" key={item.text} sx={{ mb: 2 }}>
                    <Link to={item.path} style={{ 
                      color: '#ddd', 
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}>
                      {item.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Services
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Link to="/service/city-travel" style={{ color: '#ddd', textDecoration: 'none' }}>
                    City Travel
                  </Link>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Link to="/service/airport-transfer" style={{ color: '#ddd', textDecoration: 'none' }}>
                    Airport Transfers
                  </Link>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Link to="/service/corporate" style={{ color: '#ddd', textDecoration: 'none' }}>
                    Corporate Services
                  </Link>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Link to="/service/packages" style={{ color: '#ddd', textDecoration: 'none' }}>
                    Package Delivery
                  </Link>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Link to="/service/events" style={{ color: '#ddd', textDecoration: 'none' }}>
                    Events & Wedding
                  </Link>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography variant="body2">
                  123 Main Street, Badin City Center, Badin
                </Typography>
              </Box>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  +92 333 1234567
                </Typography>
              </Box>
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  info@badinrides.com
                </Typography>
              </Box>
              
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Operating Hours:
              </Typography>
              <Typography variant="body2">
                24/7, 365 days a year
              </Typography>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              © {new Date().getFullYear()} BadinRides. All rights reserved.
            </Typography>
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
              <Link to="/terms" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.875rem' }}>
                Terms of Service
              </Link>
              <Link to="/privacy" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.875rem' }}>
                Privacy Policy
              </Link>
              <Link to="/faq" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.875rem' }}>
                FAQ
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;