import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Box, Typography, TextField, Button, Grid, MenuItem, 
  Paper, CircularProgress, Slide, Grow, Fade, Zoom
} from '@mui/material';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Custom styled TextField with icon
const IconTextField = ({ icon, ...props }) => (
  <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ 
      position: 'absolute', 
      left: 12, 
      top: 14, 
      color: 'primary.main',
      opacity: 0.8,
      zIndex: 1
    }}>
      {icon}
    </Box>
    <TextField
      {...props}
      fullWidth
      InputProps={{ sx: { pl: 4.5 } }}
    />
  </Box>
);

const BecomeRiderPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const navigate = useNavigate();

  const vehicleTypes = [
    { value: 'bike', label: 'Bike', icon: <DirectionsBikeIcon /> },
    { value: 'rickshaw', label: 'Auto Rickshaw', icon: <ElectricRickshawIcon /> },
    { value: 'car', label: 'Car', icon: <DirectionsCarIcon /> }
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
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate storing data in localStorage
        const riders = JSON.parse(localStorage.getItem('riders') || '[]');
        riders.push({
          id: Date.now(),
          name: values.name,
          phone: values.phone,
          location: values.location,
          vehicleType: values.vehicleType,
          vehicleNumber: values.vehicleNumber,
          email: values.email,
          password: values.password,
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

  const handleVehicleSelect = (value) => {
    formik.setFieldValue('vehicleType', value);
    setSelectedVehicle(value);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        pt: 12,
        pb: 6,
        background: 'linear-gradient(135deg, #0a3d62 0%, #38ada9 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center horizontally
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
        }}
      />
      <Box
        component={motion.div}
        animate={{ 
          x: [0, 20, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
        }}
      />

      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Slide direction="up" in={true} timeout={800} mountOnEnter unmountOnExit>
          <Paper 
            elevation={10} 
            sx={{ 
              p: 4, 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              width: '100%', // Ensure full width within container
              maxWidth: '800px', // Optional: limit max width
              mx: 'auto' // Center horizontally within container
            }}
            className="form-container"
          >
            {!submitted ? (
              <>
                <Zoom in={true} timeout={1000}>
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography 
                      variant="h4" 
                      component="h1" 
                      sx={{ 
                        fontWeight: 700,
                        background: 'linear-gradient(90deg, #4a47a3 0%, #0e7490 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                      }}
                    >
                      Join Our Rider Team
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Start your journey with us and earn money on your schedule
                    </Typography>
                  </Box>
                </Zoom>
                
                <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }}>
                  <Grid container spacing={3} justifyContent="center">
                    {/* Vehicle selection cards */}
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>Select Your Vehicle</Typography>
                      <Grid container spacing={2} justifyContent="center">
                        {vehicleTypes.map((vehicle, index) => (
                          <Grid item xs={12} sm={4} key={vehicle.value} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grow in={true} timeout={(index + 1) * 300}>
                              <Paper
                                component={motion.div}
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                elevation={selectedVehicle === vehicle.value ? 6 : 1}
                                onClick={() => handleVehicleSelect(vehicle.value)}
                                sx={{
                                  p: 2,
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                  borderRadius: '12px',
                                  border: selectedVehicle === vehicle.value ? '2px solid' : '1px solid',
                                  borderColor: selectedVehicle === vehicle.value ? 'primary.main' : 'divider',
                                  transition: 'all 0.3s ease',
                                  width: '100%' // Take full width of grid item
                                }}
                              >
                                <Box sx={{ 
                                  color: selectedVehicle === vehicle.value ? 'primary.main' : 'text.secondary',
                                  fontSize: '2rem',
                                  mb: 1,
                                  display: 'flex',
                                  justifyContent: 'center' // Center icon
                                }}>
                                  {vehicle.icon}
                                </Box>
                                <Typography 
                                  variant="subtitle1" 
                                  fontWeight={selectedVehicle === vehicle.value ? 600 : 400}
                                >
                                  {vehicle.label}
                                </Typography>
                              </Paper>
                            </Grow>
                          </Grid>
                        ))}
                      </Grid>
                      {formik.touched.vehicleType && Boolean(formik.errors.vehicleType) && (
                        <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block', textAlign: 'center' }}>
                          {formik.errors.vehicleType}
                        </Typography>
                      )}
                    </Grid>

                    {/* Personal Information Section */}
                    <Grid item xs={12}>
                      <Fade in={true} timeout={1000}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: 500 }}>
                            Personal Information
                          </Typography>
                          <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="name"
                                name="name"
                                label="Full Name"
                                icon={<PersonIcon />}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                variant="outlined"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                icon={<PhoneIcon />}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                variant="outlined"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="location"
                                name="location"
                                label="Location/Area"
                                icon={<LocationOnIcon />}
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                error={formik.touched.location && Boolean(formik.errors.location)}
                                helperText={formik.touched.location && formik.errors.location}
                                variant="outlined"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="vehicleNumber"
                                name="vehicleNumber"
                                label="Vehicle Number"
                                icon={<BadgeIcon />}
                                value={formik.values.vehicleNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.vehicleNumber && Boolean(formik.errors.vehicleNumber)}
                                helperText={formik.touched.vehicleNumber && formik.errors.vehicleNumber}
                                variant="outlined"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Fade>
                    </Grid>

                    {/* Account Information Section */}
                    <Grid item xs={12}>
                      <Fade in={true} timeout={1500}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: 500 }}>
                            Account Information
                          </Typography>
                          <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="email"
                                name="email"
                                label="Email"
                                icon={<EmailIcon />}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                variant="outlined"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                icon={<LockIcon />}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                variant="outlined"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <IconTextField
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                icon={<LockIcon />}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                variant="outlined"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Fade>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                      <Fade in={true} timeout={2000}>
                        <Box sx={{ width: '100%', maxWidth: '400px', mx: 'auto' }}>
                          <Button
                            component={motion.button}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            color="primary"
                            variant="contained"
                            fullWidth
                            type="submit"
                            disabled={isSubmitting}
                            sx={{ 
                              py: 1.5, 
                              borderRadius: '8px',
                              fontWeight: 600,
                              fontSize: '1rem',
                              background: 'linear-gradient(90deg, #4a47a3 0%, #38ada9 100%)',
                              boxShadow: '0 4px 15px rgba(58, 71, 163, 0.3)',
                              '&:hover': {
                                boxShadow: '0 6px 20px rgba(58, 71, 163, 0.4)',
                              }
                            }}
                          >
                            {isSubmitting ? 
                              <CircularProgress size={24} color="inherit" /> : 
                              'Submit Application'}
                          </Button>
                          <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Button 
                              component={motion.button}
                              whileHover={{ scale: 1.05 }}
                              color="primary" 
                              variant="text" 
                              onClick={() => navigate('/login')}
                              sx={{ fontWeight: 500 }}
                            >
                              Already registered? Login
                            </Button>
                          </Box>
                        </Box>
                      </Fade>
                    </Grid>
                  </Grid>
                </form>
              </>
            ) : (
              <Zoom in={true} timeout={1000}>
                <Box 
                  sx={{ 
                    textAlign: 'center', 
                    py: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} 
                  className="success-message"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                  >
                    <CheckCircleIcon 
                      sx={{ 
                        fontSize: 100, 
                        color: 'success.main',
                        mb: 3
                      }} 
                    />
                  </motion.div>
                  
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(90deg, #388e3c 0%, #4caf50 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2
                    }}
                  >
                    Registration Successful!
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ maxWidth: '80%', mx: 'auto' }}>
                    Thank you for registering as a rider. Your application has been submitted successfully. 
                    We'll review your details and get back to you shortly.
                  </Typography>
                  <Button 
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variant="contained" 
                    color="primary" 
                    onClick={() => navigate('/login')}
                    sx={{ 
                      mt: 3,
                      py: 1.5,
                      px: 4,
                      borderRadius: '8px',
                      fontWeight: 600,
                      background: 'linear-gradient(90deg, #4a47a3 0%, #38ada9 100%)',
                      boxShadow: '0 4px 15px rgba(58, 71, 163, 0.3)',
                    }}
                  >
                    Login to Your Account
                  </Button>
                </Box>
              </Zoom>
            )}
          </Paper>
        </Slide>
      </Container>
    </Box>
  );
};

export default BecomeRiderPage;