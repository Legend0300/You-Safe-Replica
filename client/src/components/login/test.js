import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import HealthSafety from '../Assets/HealthSafety.svg';
import axios from 'axios';

function Test() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState('contained');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYW5hZ2VyIjp7Im5hbWUiOiJ0b3kiLCJlbWFpbCI6InRveSIsImlkIjoiNjQzODQzM2FjNDc5MmI4NTc1ZmQ0MDBhIn0sInJvbGUiOiJNYW5hZ2VyIiwiaWF0IjoxNjgxNDQ5Njc5fQ.3Z2aBRgsLOBZWJcYhVloaWNs1KkFuSSHbvPQpWMD1Jo`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVariant('outlined');
    setLoading(true);

    axios
      .get('http://localhost:4000/api/site', { headers })
      .then((response) => {
        setPassword('');
        setEmail('');
        setLoading(false);
        setVariant('contained');
        console.log(response.data);
        setToken(response.data);
      })
      .catch((error) => {
        // handle error response
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ minWidth: 300 }}>
        <CardMedia
          sx={{ height: 260, backgroundSize: 'contain' }}
          image={HealthSafety}
          title="U Safe"
        />
        <CardContent sx={{ mt: 2 }}>
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
            <TextField
              id="outlined-basic"
              label="Email"
              variant="standard"
              autoComplete="off"
              error={Boolean(error)}
              helperText={error}
              typeof="email"
              required
              value={email}
              color="warning"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="standard"
              autoComplete="off"
              error={Boolean(error)}
              helperText={error}
              required
              value={password}
              color="warning"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
                flexDirection: 'column',
              }}
            >
              <Button
                type="submit"
                variant={variant}
                size="medium"
                color="warning"
                onClick={handleSubmit}
                sx={{ px: 2, py: 1 }}
              >
                {loading ? (
                  <CircularProgress color="warning" size={15} sx={{ p: 1 }} />
                ) : (
                  'Login'
                )}
              </Button>
              <Button href="#text-buttons">Forgot Password</Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Test;
