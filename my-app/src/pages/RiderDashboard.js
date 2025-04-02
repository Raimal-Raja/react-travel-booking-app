// import React, { useState, useEffect } from 'react';
// import { 
//   Container, 
//   Grid, 
//   Typography, 
//   Box, 
//   Card, 
//   CardContent, 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableContainer, 
//   TableHead, 
//   TableRow, 
//   Paper, 
//   Button, 
//   Switch, 
//   FormControlLabel,
//   CircularProgress,
//   Tabs,
//   Tab,
//   Chip
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RiderDashboard = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const [isAvailable, setIsAvailable] = useState(true);
//   const [currentOrders, setCurrentOrders] = useState([]);
//   const [orderHistory, setOrderHistory] = useState([]);
  
//   // Simulate fetching rider information from localStorage
//   const rider = JSON.parse(localStorage.getItem('rider')) || {
//     name: 'Abdul Rehman',
//     phone: '03001234567',
//     area: 'Central Badin',
//     vehicleType: 'Auto Rickshaw',
//     vehicleNumber: 'BDN-1234',
//     email: 'abdul@example.com'
//   };

//   // Simulate fetching orders data
//   useEffect(() => {
//     setLoading(true);
//     // Simulate API call with setTimeout
//     setTimeout(() => {
//       // Mock data for current orders
//       const mockCurrentOrders = [
//         {
//           id: 'ORD-001',
//           customerName: 'Nasir Ali',
//           customerPhone: '03451234567',
//           pickupLocation: 'Main Market, Badin',
//           destination: 'Railway Station, Badin',
//           status: 'In Progress',
//           timestamp: new Date().toISOString()
//         },
//         {
//           id: 'ORD-002',
//           customerName: 'Farhan Khan',
//           customerPhone: '03329876543',
//           pickupLocation: 'College Road, Badin',
//           destination: 'Bus Terminal, Badin',
//           status: 'Pending',
//           timestamp: new Date().toISOString()
//         }
//       ];
      
//       // Mock data for order history
//       const mockOrderHistory = [
//         {
//           id: 'ORD-987',
//           customerName: 'Imran Ahmed',
//           customerPhone: '03219876543',
//           pickupLocation: 'Hospital Road, Badin',
//           destination: 'Main Market, Badin',
//           status: 'Completed',
//           timestamp: new Date(Date.now() - 86400000).toISOString() // Yesterday
//         },
//         {
//           id: 'ORD-876',
//           customerName: 'Saima Khan',
//           customerPhone: '03001122334',
//           pickupLocation: 'Residential Area, Badin',
//           destination: 'City Center, Badin',
//           status: 'Completed',
//           timestamp: new Date(Date.now() - 172800000).toISOString() // Day before yesterday
//         },
//         {
//           id: 'ORD-765',
//           customerName: 'Zubair Hassan',
//           customerPhone: '03137654321',
//           pickupLocation: 'Bus Terminal, Badin',
//           destination: 'College Road, Badin',
//           status: 'Cancelled',
//           timestamp: new Date(Date.now() - 259200000).toISOString() // 3 days ago
//         }
//       ];
      
//       setCurrentOrders(mockCurrentOrders);
//       setOrderHistory(mockOrderHistory);
//       setLoading(false);
//     }, 1500);
//   }, []);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleAvailabilityChange = (event) => {
//     setIsAvailable(event.target.checked);
//     // Here you would typically update the rider's availability status on your server
//   };

//   const handleMarkCompleted = (orderId) => {
//     setLoading(true);
//     // Simulate API call to update order status
//     setTimeout(() => {
//       const updatedCurrentOrders = currentOrders.filter(order => order.id !== orderId);
//       const completedOrder = currentOrders.find(order => order.id === orderId);
      
//       if (completedOrder) {
//         completedOrder.status = 'Completed';
//         completedOrder.timestamp = new Date().toISOString();
//         setOrderHistory([completedOrder, ...orderHistory]);
//       }
      
//       setCurrentOrders(updatedCurrentOrders);
//       setLoading(false);
//     }, 1000);
//   };

//   const handleCancelOrder = (orderId) => {
//     setLoading(true);
//     // Simulate API call to cancel order
//     setTimeout(() => {
//       const updatedCurrentOrders = currentOrders.filter(order => order.id !== orderId);
//       const cancelledOrder = currentOrders.find(order => order.id === orderId);
      
//       if (cancelledOrder) {
//         cancelledOrder.status = 'Cancelled';
//         cancelledOrder.timestamp = new Date().toISOString();
//         setOrderHistory([cancelledOrder, ...orderHistory]);
//       }
      
//       setCurrentOrders(updatedCurrentOrders);
//       setLoading(false);
//     }, 1000);
//   };

//   const formatDate = (dateString) => {
//     const options = { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   if (!localStorage.getItem('rider')) {
//     // If no rider is logged in, redirect to login page
//     // In a real app, you would check authentication status
//     useEffect(() => {
//       navigate('/login');
//     }, [navigate]);
//     return null;
//   }

//   return (
//     <Box sx={{ pt: 10, pb: 5 }}>
//       <Container>
//         <Grid container spacing={4}>
//           <Grid item xs={12}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Rider Dashboard
//             </Typography>
//           </Grid>
          
//           {/* Rider Info Card */}
//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" component="h2" gutterBottom>
//                   Rider Information
//                 </Typography>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Name:</Typography>
//                   <Typography variant="body1">{rider.name}</Typography>
//                 </Box>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Phone:</Typography>
//                   <Typography variant="body1">{rider.phone}</Typography>
//                 </Box>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Area:</Typography>
//                   <Typography variant="body1">{rider.area}</Typography>
//                 </Box>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Vehicle Type:</Typography>
//                   <Typography variant="body1">{rider.vehicleType}</Typography>
//                 </Box>
//                 <Box sx={{ mb: 2 }}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Vehicle Number:</Typography>
//                   <Typography variant="body1">{rider.vehicleNumber}</Typography>
//                 </Box>
//                 <Box sx={{ mb: 3 }}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Email:</Typography>
//                   <Typography variant="body1">{rider.email}</Typography>
//                 </Box>
                
//                 <FormControlLabel
//                   control={
//                     <Switch
//                       checked={isAvailable}
//                       onChange={handleAvailabilityChange}
//                       color="primary"
//                     />
//                   }
//                   label={isAvailable ? "Available for Rides" : "Unavailable"}
//                 />
                
//                 <Box sx={{ mt: 2 }}>
//                   <Button 
//                     variant="outlined" 
//                     color="error" 
//                     fullWidth
//                     onClick={() => {
//                       localStorage.removeItem('rider');
//                       navigate('/login');
//                     }}
//                   >
//                     Logout
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
          
//           {/* Orders Section */}
//           <Grid item xs={12} md={8}>
//             <Card>
//               <CardContent>
//                 <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
//                   <Tab label="Current Orders" />
//                   <Tab label="Order History" />
//                 </Tabs>
                
//                 {loading ? (
//                   <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
//                     <CircularProgress />
//                   </Box>
//                 ) : (
//                   <div>
//                     {/* Current Orders Tab */}
//                     {tabValue === 0 && (
//                       <div>
//                         {currentOrders.length === 0 ? (
//                           <Typography variant="body1" sx={{ textAlign: 'center', p: 3 }}>
//                             No current orders. Make sure you are available for rides.
//                           </Typography>
//                         ) : (
//                           <TableContainer component={Paper}>
//                             <Table>
//                               <TableHead>
//                                 <TableRow>
//                                   <TableCell>Order ID</TableCell>
//                                   <TableCell>Customer</TableCell>
//                                   <TableCell>Pickup</TableCell>
//                                   <TableCell>Destination</TableCell>
//                                   <TableCell>Status</TableCell>
//                                   <TableCell>Actions</TableCell>
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {currentOrders.map((order) => (
//                                   <TableRow key={order.id}>
//                                     <TableCell>{order.id}</TableCell>
//                                     <TableCell>
//                                       {order.customerName}<br/>
//                                       <Typography variant="body2" color="text.secondary">
//                                         {order.customerPhone}
//                                       </Typography>
//                                     </TableCell>
//                                     <TableCell>{order.pickupLocation}</TableCell>
//                                     <TableCell>{order.destination}</TableCell>
//                                     <TableCell>
//                                       <Chip 
//                                         label={order.status} 
//                                         color={order.status === 'In Progress' ? 'primary' : 'warning'} 
//                                         size="small" 
//                                       />
//                                     </TableCell>
//                                     <TableCell>
//                                       <Button 
//                                         variant="contained" 
//                                         color="success" 
//                                         size="small" 
//                                         onClick={() => handleMarkCompleted(order.id)}
//                                         sx={{ mr: 1, mb: { xs: 1, sm: 0 } }}
//                                       >
//                                         Complete
//                                       </Button>
//                                       <Button 
//                                         variant="outlined" 
//                                         color="error" 
//                                         size="small" 
//                                         onClick={() => handleCancelOrder(order.id)}
//                                       >
//                                         Cancel
//                                       </Button>
//                                     </TableCell>
//                                   </TableRow>
//                                 ))}
//                               </TableBody>
//                             </Table>
//                           </TableContainer>
//                         )}
//                       </div>
//                     )}
                    
//                     {/* Order History Tab */}
//                     {tabValue === 1 && (
//                       <div>
//                         {orderHistory.length === 0 ? (
//                           <Typography variant="body1" sx={{ textAlign: 'center', p: 3 }}>
//                             No order history available.
//                           </Typography>
//                         ) : (
//                           <TableContainer component={Paper}>
//                             <Table>
//                               <TableHead>
//                                 <TableRow>
//                                   <TableCell>Order ID</TableCell>
//                                   <TableCell>Customer</TableCell>
//                                   <TableCell>Route</TableCell>
//                                   <TableCell>Status</TableCell>
//                                   <TableCell>Date</TableCell>
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {orderHistory.map((order) => (
//                                   <TableRow key={order.id}>
//                                     <TableCell>{order.id}</TableCell>
//                                     <TableCell>
//                                       {order.customerName}<br/>
//                                       <Typography variant="body2" color="text.secondary">
//                                         {order.customerPhone}
//                                       </Typography>
//                                     </TableCell>
//                                     <TableCell>
//                                       <Typography variant="body2">
//                                         From: {order.pickupLocation}
//                                       </Typography>
//                                       <Typography variant="body2">
//                                         To: {order.destination}
//                                       </Typography>
//                                     </TableCell>
//                                     <TableCell>
//                                       <Chip 
//                                         label={order.status} 
//                                         color={
//                                           order.status === 'Completed' ? 'success' : 
//                                           order.status === 'Cancelled' ? 'error' : 'default'
//                                         } 
//                                         size="small" 
//                                       />
//                                     </TableCell>
//                                     <TableCell>{formatDate(order.timestamp)}</TableCell>
//                                   </TableRow>
//                                 ))}
//                               </TableBody>
//                             </Table>
//                           </TableContainer>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default RiderDashboard;


import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Grid, Button, Card, CardContent, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Switch, FormControlLabel, Tabs, Tab, Divider, CircularProgress, 
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle 
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";


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
    const isLoggedIn = localStorage.getItem("riderToken");
    
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
    <Box sx={{ pt: 10, pb: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Rider Profile
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ mb: 2 }}>
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
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Card>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange} centered>
                  <Tab label="Current Orders" />
                  <Tab label="Order History" />
                </Tabs>
              </Box>
              
              {tabValue === 0 && (
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
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
                    <TableContainer component={Paper} sx={{ mt: 2 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Customer</TableCell>
                            <TableCell>Pick-up Location</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Fare (Rs)</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {orders.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell>
                                {order.customerName}
                                <Typography variant="caption" component="div">
                                  {order.customerPhone}
                                </Typography>
                              </TableCell>
                              <TableCell>{order.pickup}</TableCell>
                              <TableCell>{order.destination}</TableCell>
                              <TableCell>{order.fare}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>
                                <Button 
                                  variant="contained" 
                                  size="small"
                                  onClick={() => handleCompleteOrder(order.id)}
                                >
                                  Complete
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </Box>
              )}
              
              {tabValue === 1 && (
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
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
                    <TableContainer component={Paper} sx={{ mt: 2 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Customer</TableCell>
                            <TableCell>Pick-up Location</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Fare (Rs)</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {history.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell>
                                {order.customerName}
                                <Typography variant="caption" component="div">
                                  {order.customerPhone}
                                </Typography>
                              </TableCell>
                              <TableCell>{order.pickup}</TableCell>
                              <TableCell>{order.destination}</TableCell>
                              <TableCell>{order.fare}</TableCell>
                              <TableCell>{order.date}</TableCell>
                              <TableCell>
                                <Box
                                  sx={{
                                    bgcolor: 'success.main',
                                    color: 'white',
                                    py: 0.5,
                                    px: 1,
                                    borderRadius: 1,
                                    display: 'inline-block',
                                    fontSize: '0.75rem',
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
                  )}
                </Box>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>Complete Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to mark this order as completed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={confirmCompleteOrder} variant="contained" color="primary">
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RiderDashboard;