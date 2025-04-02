import React, { useRef, useEffect } from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import CountUp from 'react-countup';

const ServicesPage = () => {
  const mapRef = useRef();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY_HERE",
  });

  const services = [
    {
      title: "City Rides",
      description: "Reliable transportation within the city for your daily commute or short errands.",
      image: "/images/city-ride.jpg"
    },
    {
      title: "Out of Town",
      description: "Long-distance rides for trips to neighboring cities with experienced drivers.",
      image: "/images/outstation.jpg"
    },
    {
      title: "Bike Rides",
      description: "Quick and affordable bike rides to navigate through traffic easily.",
      image: "/images/bike-ride.jpg"
    },
    {
      title: "Auto Rickshaw",
      description: "Traditional and economical way to travel around the city.",
      image: "/images/auto-rickshaw.jpg"
    },
    {
      title: "Rental Services",
      description: "Rent vehicles for hours or days for your specific needs.",
      image: "/images/rental.jpg"
    },
    {
      title: "Package Delivery",
      description: "Fast and secure package delivery within Badin.",
      image: "/images/package.jpg"
    }
  ];

  const center = { lat: 24.6558, lng: 68.8383 }; // Coordinates for Badin

  return (
    <Box sx={{ pt: 10 }}>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
            Our Services
          </Typography>
          <Typography variant="h6" component="p" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            We provide a wide range of transportation services to meet all your needs in Badin and beyond. Explore our premium services below.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ mb: 5, textAlign: 'center' }}>
            Badin Rides in Numbers
          </Typography>
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
                  <CountUp end={10} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Cities Covered
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Typography variant="h3" component="div" className="stat-number">
                  <CountUp end={15000} suffix="+" duration={2.5} />
                </Typography>
                <Typography variant="body1" component="div" className="stat-label">
                  Rides Completed
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ mb: 5, textAlign: 'center' }}>
            Our Coverage Area
          </Typography>
          <Box sx={{ height: 500, width: '100%' }}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={center}
                zoom={13}
                options={{ disableDefaultUI: true }}
                ref={mapRef}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
                <Typography>Loading Map...</Typography>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;