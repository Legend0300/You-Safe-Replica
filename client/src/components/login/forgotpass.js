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
    setVariant('outlined');
    setLoading(true);
    if (!username) {
      setError('Please enter a username');
      setUsername('');
      setLoading(false);
      setVariant('contained');
      return;
    }
    else if (!username.includes('@')) {
        setError('Please enter a valid email address');
        setUsername('');
        setLoading(false);
        setVariant('contained');
        return;
        }
    console.log(username);
    setUsername('');
    setLoading(false);
    setVariant('contained');
    setError('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 260, backgroundSize: 'contain' }} image={HealthSafety} title="U Safe" />
        <CardContent sx={{ mt: 1 }}>
          {' '}
          <Box
            component={'form'}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            noValidate
            autoComplete="off"
            gap={2}
          >
            <Typography variant="body1" textAlign="center" gutterBottom  >
        Enter your email address and we'll send you a link to reset your password.
      </Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="standard"
              autoComplete="off"
              error={Boolean(error)}
              helperText={error}
              required
              value={username}
              type="email"
              color="warning"
              onChange={(event) => setUsername(event.target.value)}
            />
            <CardActions
              sx={{ display: 'flex', justifyContent: 'center', mt: 2, flexDirection: 'column' }}
            >
              <Button
                type="submit"
                variant={variant}
                size="medium"
                color="warning"
                onClick={handleSubmit}
                sx={{px:2 , py:1}}
              >
                {loading ? <CircularProgress color="warning" size={15} sx={{p:1}} /> : 'Reset Password'}
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ForgotPassword;


