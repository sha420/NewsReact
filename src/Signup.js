import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Signup(props) {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        {/* Your Signup form content */}
      </DialogContent>
    </Dialog>
  );
}

export default Signup;