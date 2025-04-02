import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

import { Container, Box, Typography, TextField, Button, Paper, CircularProgress, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setLoginError('');
      
      try {
        // Simulate API request
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real app, this would be a backend authentication
        // For demo, we'll check localStorage
        const riders = JSON.parse(localStorage.getItem('riders') || '[]');
        const rider = riders.find(r => 
          r.email === values.email && 
          r.password === values.password
        );
        
        if (rider) {
          // Set logged in user in localStorage (in real app, would use proper auth tokens)
          localStorage.setItem('currentRider', JSON.stringify(rider));
          navigate('/rider-dashboard');
        } else {
          setLoginError('Invalid email or password');
        }
      } catch (error) {
        console.error('Login error:', error);
        setLoginError('An error occurred during login');
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
        backgroundImage: 'url(/images/login-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
          className="login-container"
        >
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Rider Login
          </Typography>
          
          {loginError && (
            <Alert severity="error" sx={{ mb: 3 }}>{loginError}</Alert>
          )}
          
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mb: 2 }}
            />
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
              sx={{ mb: 3 }}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disabled={isSubmitting}
              sx={{ py: 1.5, mb: 2 }}
            >
              {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
            </Button>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button 
                color="primary" 
                variant="text" 
                onClick={() => navigate('/become-rider')}
              >
                Don't have an account? Sign up
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;