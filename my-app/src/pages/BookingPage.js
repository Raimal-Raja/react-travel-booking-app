import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, MenuItem, Paper, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Receipt from '../components/Receipt';

const BookingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [riders, setRiders] = useState([]);
  const [selectedRider, setSelectedRider] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  
  // Load available riders from localStorage (in a real app, this would come from an API)
  useEffect(() => {
    const storedRiders = JSON.parse(localStorage.getItem('riders') || '[]');
    // Filter only available riders
    const availableRiders = storedRiders.filter(rider => rider.available);
    setRiders(availableRiders);
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
      .required('Phone number is required'),
    location: Yup.string().required('Pickup location is required'),
    destination: Yup.string().required('Destination is required'),
    vehicleId: Yup.string().required('Please select a vehicle')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      location: '',
      destination: '',
      vehicleId: '',
      riderPhone: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simulate API request
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Find the selected rider
        const rider = riders.find(r => r.id.toString() === values.vehicleId);
        
        // Create booking details
        const booking = {
          id: `BKG-${Date.now()}`,
          customerName: values.name,
          customerPhone: values.phone,
          pickup: values.location,
          destination: values.destination,
          riderName: rider.name,
          riderPhone: rider.phone,
          vehicleType: rider.vehicleType,
          vehicleNumber: rider.vehicleNumber,
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        
        // In a real app, this would be sent to your backend
        // For demo purposes, we'll store in localStorage
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        // Update rider's orders
        const allRiders = JSON.parse(localStorage.getItem('riders') || '[]');
        const updatedRiders = allRiders.map(r => {
          if (r.id === rider.id) {
            return {
              ...r,
              orders: [...(r.orders || []), booking.id]
            };
          }
          return r;
        });
        localStorage.setItem('riders', JSON.stringify(updatedRiders));
        
        setBookingDetails(booking);
        setSubmitted(true);
      } catch (error) {
        console.error('Error booking ride:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  // Update rider phone when vehicle is selected
  useEffect(() => {
    if (formik.values.vehicleId) {
      const rider = riders.find(r => r.id.toString() === formik.values.vehicleId);
      if (rider) {
        formik.setFieldValue('riderPhone', rider.phone);
        setSelectedRider(rider);
      }
    }
  }, [formik.values.vehicleId, riders]);

  return (
    <Box
      sx={{
        pt: 12,
        pb: 6,
        backgroundImage: 'url(/images/booking-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="md">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)'
          }}
          className="form-container"
        >
          {!submitted ? (
            <>
              <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Book a Ride
              </Typography>
              <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
                Fill in the details below to book your ride in Badin
              </Typography>
              
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Your Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Your Phone Number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="location"
                      name="location"
                      label="Pickup Location"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      error={formik.touched.location && Boolean(formik.errors.location)}
                      helperText={formik.touched.location && formik.errors.location}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="destination"
                      name="destination"
                      label="Your Destination"
                      value={formik.values.destination}
                      onChange={formik.handleChange}
                      error={formik.touched.destination && Boolean(formik.errors.destination)}
                      helperText={formik.touched.destination && formik.errors.destination}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="vehicleId"
                      name="vehicleId"
                      select
                      label="Select Available Vehicle"
                      value={formik.values.vehicleId}
                      onChange={formik.handleChange}
                      error={formik.touched.vehicleId && Boolean(formik.errors.vehicleId)}
                      helperText={formik.touched.vehicleId && formik.errors.vehicleId}
                    >
                      {riders.length > 0 ? (
                        riders.map((rider) => (
                          <MenuItem key={rider.id} value={rider.id.toString()}>
                            {rider.vehicleType.charAt(0).toUpperCase() + rider.vehicleType.slice(1)} - {rider.location} ({rider.vehicleNumber})
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled value="">
                          No vehicles available
                        </MenuItem>
                      )}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="riderPhone"
                      name="riderPhone"
                      label="Rider's Phone Number"
                      value={formik.values.riderPhone}
                      disabled
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={isSubmitting || riders.length === 0}
                      sx={{ py: 1.5 }}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'Book Now'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          ) : (
            <Box sx={{ textAlign: 'center', py: 2 }} className="success-message">
              <Typography variant="h4" component="h2" color="primary" gutterBottom>
                Booking Confirmed!
              </Typography>
              <Typography variant="body1" paragraph>
                Your ride has been booked successfully. Here's your receipt:
              </Typography>
              
              {bookingDetails && (
                <Receipt booking={bookingDetails} />
              )}
              
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => {
                  setSubmitted(false);
                  formik.resetForm();
                }}
                sx={{ mt: 4 }}
              >
                Book Another Ride
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default BookingPage;