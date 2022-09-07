import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

export default function ErrorAlert({text,open}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert  severity="error" variant='filled'
          sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
}

