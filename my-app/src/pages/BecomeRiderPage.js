import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

import { Container, Box, Typography, TextField, Button, Grid, MenuItem, Paper, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const BecomeRiderPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const vehicleTypes = [
    { value: 'bike', label: 'Bike' },
    { value: 'rickshaw', label: 'Auto Rickshaw' },
    { value: 'car', label: 'Car' }
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
      .required('Phone number is required'),
    location: Yup.string().required('Location is required'),
    vehicleType: Yup.string().required('Vehicle type is required'),
    vehicleNumber: Yup.string().required('Vehicle number is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      location: '',
      vehicleType: '',
      vehicleNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // In a real app, you would send this data to your backend
        // For demonstration purposes, we're simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate storing data in localStorage (in a real app this would be handled by your backend)
        const riders = JSON.parse(localStorage.getItem('riders') || '[]');
        riders.push({
          id: Date.now(),
          name: values.name,
          phone: values.phone,
          location: values.location,
          vehicleType: values.vehicleType,
          vehicleNumber: values.vehicleNumber,
          email: values.email,
          password: values.password, // In a real app, never store passwords in plain text
          available: true
        });
        localStorage.setItem('riders', JSON.stringify(riders));
        
        setSubmitted(true);
      } catch (error) {
        console.error('Error registering rider:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <Box
      sx={{
        pt: 12,
        pb: 6,
        backgroundImage: 'url(/images/rider-background.jpg)',
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
                Become a Rider
              </Typography>
              <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
                Join our team of professional riders and start earning today!
              </Typography>
              
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Full Name"
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
                      label="Phone Number"
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
                      label="Location/Area"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      error={formik.touched.location && Boolean(formik.errors.location)}
                      helperText={formik.touched.location && formik.errors.location}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="vehicleType"
                      name="vehicleType"
                      select
                      label="Vehicle Type"
                      value={formik.values.vehicleType}
                      onChange={formik.handleChange}
                      error={formik.touched.vehicleType && Boolean(formik.errors.vehicleType)}
                      helperText={formik.touched.vehicleType && formik.errors.vehicleType}
                    >
                      {vehicleTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="vehicleNumber"
                      name="vehicleNumber"
                      label="Vehicle Number"
                      value={formik.values.vehicleNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.vehicleNumber && Boolean(formik.errors.vehicleNumber)}
                      helperText={formik.touched.vehicleNumber && formik.errors.vehicleNumber}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={isSubmitting}
                      sx={{ py: 1.5 }}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button 
                      color="primary" 
                      variant="text" 
                      onClick={() => navigate('/login')}
                    >
                      Already registered? Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }} className="success-message">
              <Typography variant="h4" component="h2" color="primary" gutterBottom>
                Registration Successful!
              </Typography>
              <Typography variant="body1" paragraph>
                Thank you for registering as a rider. Your application has been submitted successfully.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/login')}
                sx={{ mt: 2 }}
              >
                Login to Your Account
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default BecomeRiderPage;