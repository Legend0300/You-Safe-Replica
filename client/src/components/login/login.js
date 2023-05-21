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
import { useNavigate } from 'react-router-dom';


//Login for managers

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState('contained');

  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVariant('outlined');
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };
  
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', payload, { headers });
      setPassword('');
      setEmail('');
      setLoading(false);
      setVariant('contained');
      const token = response.data.token;
      localStorage.setItem('usertoken', token); // Store token in localStorage
      setToken(token);
      navigate('/home');
    } catch (error) {
      // Handle error response
      console.error(error);
      setError('Invalid email or password');
      setLoading(false);
      setVariant('contained');
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Perform actions when token is present
      console.log('Token found:', token);
      // ...
    }
  }, []);
  

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
              <Button href="/forgotpassword">Forgot Password</Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
