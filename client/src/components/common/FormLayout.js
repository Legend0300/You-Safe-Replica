import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import Nav from './Nav';

// Shared page frame for report forms: charcoal nav + centered card on the
// hi-vis background. Keeps every form visually consistent with the app.
export default function FormLayout({ children, maxWidth = 'sm' }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <Container maxWidth={maxWidth} sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, md: 4 },
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
