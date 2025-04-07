import React, { useRef, useEffect, useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Paper,
  TextField,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  GoogleMap, 
  useLoadScript, 
  Marker, 
  DirectionsRenderer,
  InfoWindow 
} from '@react-google-maps/api';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DirectionsIcon from '@mui/icons-material/Directions';
import NearMeIcon from '@mui/icons-material/NearMe';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import NavigationIcon from '@mui/icons-material/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  const mapRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  
  const { isLoaded} = useLoadScript({
    googleMapsApiKey: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`,
    libraries: ["places", "directions"]
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });

    
    
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const services = [
    {
      title: "City Rides",
      description: "Reliable transportation within the city for your daily commute or short errands. Our drivers are professional and know every corner of Badin.",
      image: "https://bykea.com/wp-content/uploads/2020/02/Updated-1.jpg",
      icon: "🏙️",
      position: { lat: 24.6558, lng: 68.8383 }
    },
    {
      title: "Out of Town",
      description: "Long-distance rides for trips to neighboring cities with experienced drivers. Enjoy the journey with comfort and safety.",
      image: "https://bykea.com/wp-content/uploads/2020/02/Updated-2.jpg",
      icon: "🚗",
      position: { lat: 24.6658, lng: 68.8483 }
    },
    {
      title: "Bike Rides",
      description: "Quick and affordable bike rides to navigate through traffic easily. Perfect for solo travelers and short distances.",
      image: "https://bykea.com/wp-content/uploads/2020/03/zubair-a-1.jpg",
      icon: "🏍️",
      position: { lat: 24.6458, lng: 68.8283 }
    },
    {
      title: "Auto Rickshaw",
      description: "Traditional and economical way to travel around the city. Experience the local culture with our friendly rickshaw drivers.",
      image: "https://bykea.com/wp-content/uploads/2024/09/rickshaw.png",
      icon: "🛺",
      position: { lat: 24.6498, lng: 68.8343 }
    },
    {
      title: "Rental Services",
      description: "Rent vehicles for hours or days for your specific needs. Choose from our wide range of cars, bikes, and more.",
      image: "https://media.istockphoto.com/id/1419724017/photo/car-rental-agency-employee-giving-car-keys-to-beautiful-young-woman.jpg?s=612x612&w=0&k=20&c=fmJXUDhx3AGaQoa_pr3bLqliyhX6yKD3WFXPkLbSDyw=",
      icon: "🔑",
      position: { lat: 24.6528, lng: 68.8373 }
    },
    {
      title: "Package Delivery",
      description: "Fast and secure package delivery within Badin. Trust us with your important deliveries and documents.",
      image: "https://bykea.com/wp-content/uploads/2020/03/sundus-s.jpg",
      icon: "📦",
      position: { lat: 24.6578, lng: 68.8403 }
    }
  ];

  const stats = [
    { value: 5000, label: "Happy Customers", icon: "😊" },
    { value: 200, label: "Active Riders", icon: "🚴" },
    { value: 10, label: "Cities Covered", icon: "🏙️" },
    { value: 15000, label: "Rides Completed", icon: "🚗" }
  ];

  const center = userLocation || { lat: 24.6558, lng: 68.8383 }; // Default to Badin if user location not available

  const calculateDirections = () => {
    if (!origin || !destination) return;

    const directionsService = new window.google.maps.DirectionsService();
    
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Directions request failed: ${status}`);
        }
      }
    );
  };

  const handleMarkerClick = (service, index) => {
    setSelectedService(service);
    setActiveMarker(index);
  };

  const useCurrentLocation = () => {
    if (userLocation) {
      setOrigin(`${userLocation.lat},${userLocation.lng}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
        
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <Box sx={{ pt: -12, overflow: 'hidden' }}>
      <Box 
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 15,
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <Container>
          <Typography 
            variant="h2" 
            component={motion.h1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ 
              mb: 3, 
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Our Premium Services
          </Typography>
          <Typography 
            variant="h6" 
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ 
              textAlign: 'center', 
              maxWidth: 1000, 
              mx: 'auto',
              mb: 4
            }}
          >
            We provide a wide range of transportation services to meet all your needs in Badin and beyond. 
            Experience convenience, reliability, and comfort with our premium services.
          </Typography>
          <Box 

          
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              
              
            }}
          >
            <Button 
              variant="contained" 
              size="large" 
              color="secondary"
              startIcon={<NearMeIcon />}
              sx={{ 
                borderRadius: 50,
                px: 4
              }}
              onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
            <Button 
              variant="outlined"
              size="large"
              color="inherit"
              startIcon={<NavigationIcon />}
              sx={{ 
                borderRadius: 50,
                px: 4
              }}
              onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Find a Ride
            </Button>
          </Box>
        </Container>
      </Box>

      <Box id="services-section" sx={{ py: 8 }}>
        <Container>
          <Typography 
            variant="h3" 
            component="h2" 
            data-aos="fade-up"
            sx={{ 
              mb: 2, 
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'text.primary'
            }}
          >
            Premium Transportation Solutions
          </Typography>
          <Typography 
            variant="body1"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              maxWidth: 800,
              mx: 'auto',
              color: 'text.secondary'
            }}
          >
            Choose from our diverse range of services tailored to meet every transportation need.
            Scroll through our options and find the perfect ride for your journey.
          </Typography>

          <Box 
            data-aos="fade-up" 
            data-aos-delay="200"
            sx={{ 
              '.slick-dots li button:before': { 
                color: theme.palette.primary.main 
              },
              '.slick-dots li.slick-active button:before': { 
                color: theme.palette.secondary.main 
              },
              pb: 6
            }}
          >
            <Slider {...carouselSettings}>
              {services.map((service, index) => (
                <Box key={index} sx={{ px: 2 }}>
                  <Card 
                    elevation={4}
                    sx={{ 
                      height: '100%', 
                      transition: 'all 0.3s ease', 
                      '&:hover': { 
                        transform: 'translateY(-10px)', 
                        boxShadow: theme.shadows[10]
                      },
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={service.image}
                        alt={service.title}
                        sx={{ 
                          transition: 'transform 0.5s ease',
                          '&:hover': { transform: 'scale(1.05)' }
                        }}
                      />
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: 16, 
                          left: 16, 
                          bgcolor: 'primary.main', 
                          color: 'white',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem'
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          mb: 2,
                          fontWeight: 'bold'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        {service.description}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        fullWidth
                        startIcon={<DirectionsIcon />}
                        onClick={() => {
                          document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
                          setDestination(`${service.position.lat},${service.position.lng}`);
                          setSelectedService(service);
                          setTimeout(() => calculateDirections(), 1000);
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>

      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          py: 8,
          background: 'linear-gradient(135deg, rgba(245,247,250,1) 0%, rgba(235,238,245,1) 100%)'
        }}
      >
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                mb: 5, 
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.palette.primary.dark
              }}
              variants={itemVariants}
            >
              Badin Rides in Numbers
            </Typography>
            
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: 4, 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4,
                        paddingLeft: "100px",
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        background: 'linear-gradient(135deg, #0a3d62 0%, #38ada9 100%)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: theme.shadows[10]
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          fontSize: '3rem', 
                          mb: 2, 
                          color: theme.palette.primary.main 
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography 
                        variant="h3" 
                        component="div" 
                        sx={{ 
                          mb: 1,
                          fontWeight: 'bold',
                          color: theme.palette.primary.dark
                        }}
                      >
                        <CountUp 
                          end={stat.value} 
                          suffix="+" 
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyOnce={false}
                        />
                      </Typography>
                      <Typography 
                        variant="body1" 
                        component="div"
                        sx={{ 
                          textAlign: 'center',
                          color: theme.palette.text.secondary
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      <Box 
        id="map-section"
        sx={{ py: 8 }}
        data-aos="fade-up"
      >
        <Container>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 3, 
              textAlign: 'center',
              fontWeight: 'bold'
            }}
            data-aos="fade-up"
          >
            Find a Ride Near You
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              textAlign: 'center', 
              mb: 5,
              maxWidth: 800,
              mx: 'auto',
              color: 'text.secondary'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Use our interactive map to plan your journey, find available rides, and get directions to your destination.
          </Typography>

          <Paper 
            elevation={4}
            sx={{ 
              p: 3,
              mb: 3,
              borderRadius: 2
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Starting Point"
                  variant="outlined"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Enter your current location"
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={useCurrentLocation} size="small">
                        <Tooltip title="Use current location">
                          <MyLocationIcon color="primary" />
                        </Tooltip>
                      </IconButton>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Destination"
                  variant="outlined"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter your destination"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  onClick={calculateDirections}
                  startIcon={<DirectionsIcon />}
                  sx={{ 
                    height: '56px',
                    borderRadius: 2
                  }}
                >
                  Get Directions
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Box 
            sx={{ 
              height: 600, 
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: theme.shadows[5]
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={center}
                zoom={13}
                options={{
                  styles: [
                    {
                      featureType: "all",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#7c93a3" }, { lightness: -10 }]
                    },
                    {
                      featureType: "administrative.country",
                      elementType: "geometry",
                      stylers: [{ visibility: "on" }]
                    },
                    {
                      featureType: "administrative.country",
                      elementType: "geometry.stroke",
                      stylers: [{ color: "#c2d1d6" }]
                    },
                    {
                      featureType: "landscape",
                      elementType: "geometry",
                      stylers: [{ color: "#f9f9f9" }]
                    },
                    {
                      featureType: "landscape.natural",
                      elementType: "geometry.fill",
                      stylers: [{ color: "#f5f5f2" }]
                    },
                    {
                      featureType: "landscape.natural.terrain",
                      elementType: "geometry.fill",
                      stylers: [{ visibility: "on" }, { color: "#e2e2e2" }]
                    },
                    {
                      featureType: "poi",
                      elementType: "all",
                      stylers: [{ visibility: "off" }]
                    },
                    {
                      featureType: "poi.park",
                      elementType: "geometry.fill",
                      stylers: [{ visibility: "on" }, { color: "#d3e8d7" }]
                    },
                    {
                      featureType: "road",
                      elementType: "all",
                      stylers: [{ saturation: -100 }, { lightness: 45 }]
                    },
                    {
                      featureType: "road.highway",
                      elementType: "geometry.fill",
                      stylers: [{ color: "#f5f5f5" }]
                    },
                    {
                      featureType: "road.highway",
                      elementType: "geometry.stroke",
                      stylers: [{ color: "#c9c9c9" }]
                    },
                    {
                      featureType: "water",
                      elementType: "all",
                      stylers: [{ color: "#b7e4f4" }]
                    }
                  ],
                  mapTypeControl: false,
                  streetViewControl: false,
                  fullscreenControl: true
                }}
                ref={mapRef}
              >
                {/* User location marker */}
                {userLocation && (
                  <Marker
                    position={userLocation}
                    icon={{
                      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36'%3E%3Ccircle cx='12' cy='12' r='10' fill='%234285F4' stroke='white' stroke-width='2'/%3E%3Ccircle cx='12' cy='12' r='3' fill='white'/%3E%3C/svg%3E",
                      scaledSize: new window.google.maps.Size(36, 36),
                      anchor: new window.google.maps.Point(18, 18)
                    }}
                  />
                )}

                {/* Service location markers */}
                {services.map((service, idx) => (
                  <Marker
                    key={idx}
                    position={service.position}
                    onClick={() => handleMarkerClick(service, idx)}
                    animation={window.google.maps.Animation.DROP}
                    icon={{
                      url: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='32' height='32'%3E%3Cpath fill='%23${idx === activeMarker ? 'FF5722' : '673AB7'}' d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z'/%3E%3Ctext x='12' y='14' text-anchor='middle' fill='white' font-size='10' font-family='Arial'%3E${service.icon.codePointAt(0).toString(16)}%3C/text%3E%3C/svg%3E`,
                      scaledSize: new window.google.maps.Size(32, 32),
                      anchor: new window.google.maps.Point(16, 32)
                    }}
                  />
                ))}

                {/* Info Window for selected service */}
                {selectedService && activeMarker !== null && (
                  <InfoWindow
                    position={selectedService.position}
                    onCloseClick={() => {
                      setSelectedService(null);
                      setActiveMarker(null);
                    }}
                    options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
                  >
                    <Box sx={{ p: 1, maxWidth: 200 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {selectedService.title} {selectedService.icon}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {selectedService.description.slice(0, 70)}...
                      </Typography>
                      <Button 
                        variant="contained" 
                        size="small" 
                        color="primary" 
                        fullWidth
                        onClick={() => {
                          setDestination(`${selectedService.position.lat},${selectedService.position.lng}`);
                          setTimeout(() => calculateDirections(), 500);
                        }}
                      >
                        Get Directions
                      </Button>
                    </Box>
                  </InfoWindow>
                )}

                {/* Directions renderer */}
                {directions && <DirectionsRenderer directions={directions} options={{ suppressMarkers: false }} />}
              </GoogleMap>
            ) : (
              <Box 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  bgcolor: 'grey.100'
                }}
              >
                <Typography>Loading map...</Typography>
              </Box>
            )}
          </Box>

          {directions && (
            <Box 
              data-aos="fade-up"
              data-aos-delay="400"
              sx={{ mt: 4 }}
            >
              <Paper 
                elevation={3}
                sx={{ 
                  p: 3,
                  borderRadius: 2
                }}
              >
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Journey Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body1" color="text.secondary">
                      Distance:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {directions.routes[0].legs[0].distance.text}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body1" color="text.secondary">
                      Duration:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {directions.routes[0].legs[0].duration.text}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body1" color="text.secondary">
                      Estimated Fare:
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      PKR {Math.round((directions.routes[0].legs[0].distance.value / 1000) * 15) + 50}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    size="large"
                    startIcon={<NearMeIcon />}
                  >
                    Book This Ride
                  </Button>
                </Box>
              </Paper>
            </Box>
          )}
        </Container>
      </Box>

      <Box 
        component="section"
        sx={{ 
          py: 8, 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center'
        }}
        data-aos="fade-up"
      >
        <Container>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 3,
              fontWeight: 'bold'
            }}
          >
            Ready to Experience Our Services?
          </Typography>
          <Typography 
            variant="h6" 
            component="p"
            sx={{ 
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              opacity: 0.9
            }}
          >
            Download our app today and enjoy the convenience of booking rides anytime, anywhere in Badin.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap'
            }}
          >
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              sx={{ 
                borderRadius: 50,
                px: 4
              }}
            >
              Download App
            </Button>
            <Button 
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ 
                borderRadius: 50,
                px: 4
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;