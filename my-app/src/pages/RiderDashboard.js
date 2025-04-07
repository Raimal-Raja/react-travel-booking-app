import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Grid, Button, Card, CardContent, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Switch, FormControlLabel, Tabs, Tab, Divider, CircularProgress, 
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  Fade, Grow, Zoom
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import {useNavigate} from "react-router-dom";


function RiderDashboard() {
  const [status, setStatus] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [history, setHistory] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  
  const navigate = useNavigate();
  
  // Mock rider data - in a real app this would come from an API
  const rider = {
    id: 1,
    name: "Ali Ahmed",
    phone: "+92 333 1234567",
    area: "Badin City Center",
    vehicle: "Bike",
    vehicleNumber: "BDN-1234",
    totalRides: 145,
    rating: 4.8,
    isAvailable: true
  };

  // Define fetchOrders function outside of any conditions
  const fetchOrders = async () => {
    setLoading(true);
    try {
      // In a real app, you would get this from an API
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockCurrentOrders = [
        {
          id: 1,
          customerName: "Fahad Khan",
          customerPhone: "+92 300 7654321",
          pickup: "Bus Stand, Badin",
          destination: "Hospital Road, Badin",
          fare: 150,
          date: "2023-09-01",
          status: "pending"
        },
        {
          id: 2,
          customerName: "Sara Bibi",
          customerPhone: "+92 321 1234567",
          pickup: "College Road, Badin",
          destination: "Main Market, Badin",
          fare: 120,
          date: "2023-09-02",
          status: "pending"
        }
      ];
      
      const mockHistory = [
        {
          id: 101,
          customerName: "Ahmed Ali",
          customerPhone: "+92 312 9876543",
          pickup: "Railway Station, Badin",
          destination: "New City, Badin",
          fare: 200,
          date: "2023-08-29",
          status: "completed"
        },
        {
          id: 102,
          customerName: "Zainab Fatima",
          customerPhone: "+92 333 8765432",
          pickup: "School Road, Badin",
          destination: "Park Avenue, Badin",
          fare: 180,
          date: "2023-08-28",
          status: "completed"
        },
        {
          id: 103,
          customerName: "Muhammad Imran",
          customerPhone: "+92 345 7654321",
          pickup: "Housing Society, Badin",
          destination: "Government Offices, Badin",
          fare: 250,
          date: "2023-08-27",
          status: "completed"
        }
      ];
      
      setOrders(mockCurrentOrders);
      setHistory(mockHistory);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // Always call useEffect at the top level
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("currentRider");
    
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    
    fetchOrders();
  }, [navigate]);

  const handleStatusChange = (event) => {
    setStatus(event.target.checked);
    // In a real app, you would update the status on the server
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCompleteOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setOpenDialog(true);
  };

  const confirmCompleteOrder = async () => {
    try {
      // In a real app, you would call an API to update the order status
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update the local state
      const updatedOrders = orders.filter(order => order.id !== selectedOrderId);
      setOrders(updatedOrders);
      
      // Add to history
      const completedOrder = orders.find(order => order.id === selectedOrderId);
      if (completedOrder) {
        const updatedCompletedOrder = { ...completedOrder, status: "completed" };
        setHistory([updatedCompletedOrder, ...history]);
      }
      
      setOpenDialog(false);
    } catch (error) {
      console.error("Error completing order:", error);
    }
  };

  return (
    <Box sx={{ 
      pt: 10, 
      pb: 6, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      <Container maxWidth="lg">
        <Fade in={true} timeout={800}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Zoom in={true} style={{ transitionDelay: '150ms' }}>
                <Card sx={{ 
                  height: '100%', 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  }
                }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom align="center">
                      Rider Profile
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ mb: 2, textAlign: 'center' }}>
                      <Typography variant="body1" gutterBottom>
                        <strong>Name:</strong> {rider.name}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Phone:</strong> {rider.phone}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Area:</strong> {rider.area}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Vehicle:</strong> {rider.vehicle}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Vehicle Number:</strong> {rider.vehicleNumber}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Total Rides:</strong> {rider.totalRides}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <strong>Rating:</strong> {rider.rating}/5
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={status}
                            onChange={handleStatusChange}
                            color="primary"
                          />
                        }
                        label={status ? "Available" : "Unavailable"}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Zoom in={true} style={{ transitionDelay: '300ms' }}>
                <Card sx={{ 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                      value={tabValue} 
                      onChange={handleTabChange} 
                      centered 
                      sx={{
                        '& .MuiTab-root': {
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                          }
                        }
                      }}
                    >
                      <Tab label="Current Orders" />
                      <Tab label="Order History" />
                    </Tabs>
                  </Box>
                  
                  {tabValue === 0 && (
                    <Fade in={true} timeout={500}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom align="center">
                          Current Orders
                        </Typography>
                        
                        {loading ? (
                          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                            <CircularProgress />
                          </Box>
                        ) : orders.length === 0 ? (
                          <Typography variant="body1" sx={{ py: 2, textAlign: 'center' }}>
                            No current orders available.
                          </Typography>
                        ) : (
                          <Grow in={true} timeout={600}>
                            <TableContainer component={Paper} sx={{ mt: 2 }}>
                              <Table>
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
                                    <TableCell align="center">Customer</TableCell>
                                    <TableCell align="center">Pick-up Location</TableCell>
                                    <TableCell align="center">Destination</TableCell>
                                    <TableCell align="center">Fare (Rs)</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {orders.map((order, index) => (
                                    <TableRow 
                                      key={order.id} 
                                      sx={{ 
                                        transition: 'all 0.2s ease',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                                      }}
                                    >
                                      <TableCell align="center">
                                        {order.customerName}
                                        <Typography variant="caption" component="div" align="center">
                                          {order.customerPhone}
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="center">{order.pickup}</TableCell>
                                      <TableCell align="center">{order.destination}</TableCell>
                                      <TableCell align="center">{order.fare}</TableCell>
                                      <TableCell align="center">{order.date}</TableCell>
                                      <TableCell align="center">
                                        <Button 
                                          variant="contained" 
                                          size="small"
                                          onClick={() => handleCompleteOrder(order.id)}
                                          sx={{
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                              transform: 'translateY(-2px)',
                                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                            }
                                          }}
                                        >
                                          Complete
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grow>
                        )}
                      </Box>
                    </Fade>
                  )}
                  
                  {tabValue === 1 && (
                    <Fade in={true} timeout={500}>
                      <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom align="center">
                          Order History
                        </Typography>
                        
                        {loading ? (
                          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                            <CircularProgress />
                          </Box>
                        ) : history.length === 0 ? (
                          <Typography variant="body1" sx={{ py: 2, textAlign: 'center' }}>
                            No order history available.
                          </Typography>
                        ) : (
                          <Grow in={true} timeout={600}>
                            <TableContainer component={Paper} sx={{ mt: 2 }}>
                              <Table>
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
                                    <TableCell align="center">Customer</TableCell>
                                    <TableCell align="center">Pick-up Location</TableCell>
                                    <TableCell align="center">Destination</TableCell>
                                    <TableCell align="center">Fare (Rs)</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {history.map((order, index) => (
                                    <TableRow 
                                      key={order.id}
                                      sx={{ 
                                        transition: 'all 0.2s ease',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                                      }}
                                    >
                                      <TableCell align="center">
                                        {order.customerName}
                                        <Typography variant="caption" component="div" align="center">
                                          {order.customerPhone}
                                        </Typography>
                                      </TableCell>
                                      <TableCell align="center">{order.pickup}</TableCell>
                                      <TableCell align="center">{order.destination}</TableCell>
                                      <TableCell align="center">{order.fare}</TableCell>
                                      <TableCell align="center">{order.date}</TableCell>
                                      <TableCell align="center">
                                        <Box
                                          sx={{
                                            bgcolor: 'success.main',
                                            color: 'white',
                                            py: 0.5,
                                            px: 1,
                                            borderRadius: 1,
                                            display: 'inline-block',
                                            fontSize: '0.75rem',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                              bgcolor: 'success.dark',
                                              transform: 'scale(1.05)'
                                            }
                                          }}
                                        >
                                          Completed
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grow>
                        )}
                      </Box>
                    </Fade>
                  )}
                </Card>
              </Zoom>
            </Grid>
          </Grid>
        </Fade>
      </Container>
      
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        TransitionComponent={Zoom}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
          }
        }}
      >
        <DialogTitle>Complete Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to mark this order as completed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setOpenDialog(false)}
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={confirmCompleteOrder} 
            variant="contained" 
            color="primary"
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }
            }}
          >
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RiderDashboard;