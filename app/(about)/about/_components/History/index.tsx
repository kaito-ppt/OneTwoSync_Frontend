'use client';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Box, Container, Typography } from '@material-ui/core';

const History = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Our History
      </Typography>
      <Box component="p" sx={{ mb: 1 }}>Learn about our companys history.</Box>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Read More
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Company History</DialogTitle>
        <DialogContent>
          <Box component="p">Our company was founded in 2024 and has since been dedicated to providing the best services to our customers...</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default History;