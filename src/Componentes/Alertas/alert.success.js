import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { Snackbar } from '@mui/material';

export default function AlertSuccess() {
  const [open, setOpen] = React.useState(true);
  
  
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>

        <Snackbar open={open} autoHideDuration={1000}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          El ingrediente se creó correctamente.
        </Alert>
        </Snackbar>
      </Collapse>
    </Box>
  );
}