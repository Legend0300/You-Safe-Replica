import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import HealthSafety from '../Assets/HealthSafety.svg';
import Typography from '@mui/material/Typography';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState('contained');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username) {
      setError('Please enter a username');
      return;
    }
    if (!username.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setVariant('outlined');
    setLoading(true);
    try {
      await fetch('http://localhost:4000/api/user/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username }),
      });
    } catch (err) {
      // network errors are non-fatal for this demo flow
    } finally {
      setLoading(false);
      setVariant('contained');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Card elevation={6} sx={{ minWidth: 320, maxWidth: 360, borderRadius: 3, overflow: 'hidden' }}>
        <CardMedia sx={{ height: 220, backgroundSize: 'contain' }} image={HealthSafety} title="U Safe" />
        <CardContent sx={{ mt: 1 }}>
          <Box
            component={'form'}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            noValidate
            autoComplete="off"
            gap={2}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" textAlign="center">
              Reset your password
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Enter your email address and we'll send you a link to reset your password.
            </Typography>
            <TextField
              label="Email"
              variant="standard"
              autoComplete="off"
              error={Boolean(error)}
              helperText={error}
              required
              fullWidth
              value={username}
              type="email"
              color="warning"
              onChange={(event) => setUsername(event.target.value)}
            />
            <CardActions sx={{ display: 'flex', justifyContent: 'center', mt: 1, flexDirection: 'column', width: '100%' }}>
              <Button
                type="submit"
                variant={variant}
                size="medium"
                color="warning"
                fullWidth
                sx={{ px: 2, py: 1 }}
              >
                {loading ? <CircularProgress color="warning" size={15} sx={{ p: 1 }} /> : 'Reset Password'}
              </Button>
              <Button href="/login" sx={{ mt: 1 }}>Back to login</Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ForgotPassword;
