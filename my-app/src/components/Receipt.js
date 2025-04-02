import React, { useRef } from 'react';
import { Box, Paper, Typography, Grid, Divider, Button } from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

const Receipt = ({ booking }) => {
  const receiptRef = useRef();

  const getVehicleIcon = (type) => {
    switch (type) {
      case 'bike':
        return <DirectionsBikeIcon fontSize="large" />;
      case 'car':
        return <LocalTaxiIcon fontSize="large" />;
      case 'rickshaw':
        return <AirportShuttleIcon fontSize="large" />;
      default:
        return <DirectionsBikeIcon fontSize="large" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const printReceipt = () => {
    const printContent = receiptRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Paper 
        elevation={3}
        sx={{ p: 3, maxWidth: 500, mx: 'auto' }}
        ref={receiptRef}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Typography variant="h5" component="h3" fontWeight="bold">
            Badin Rides
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Booking Receipt
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {booking.id}
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {formatDate(booking.timestamp)}
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              Customer:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {booking.customerName}
            </Typography>
            <Typography variant="body2">
              {booking.customerPhone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              Rider:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {booking.riderName}
            </Typography>
            <Typography variant="body2">
              {booking.riderPhone}
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ mb: 2 }} />
        
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={2}>
            {getVehicleIcon(booking.vehicleType)}
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2" color="text.secondary">
              Vehicle:
            </Typography>
            <Typography variant="body1">
              {booking.vehicleType.charAt(0).toUpperCase() + booking.vehicleType.slice(1)} ({booking.vehicleNumber})
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ mb: 2 }} />
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Pickup Location:
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {booking.pickup}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Destination:
            </Typography>
            <Typography variant="body1">
              {booking.destination}
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body2" textAlign="center" color="text.secondary">
          Thank you for choosing Badin Rides!
        </Typography>
      </Paper>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          variant="outlined" 
          onClick={printReceipt}
        >
          Print Receipt
        </Button>
      </Box>
    </Box>
  );
};

export default Receipt;