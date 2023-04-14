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

function EditPass() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState('contained');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVariant('outlined');
    setLoading(true);

    if (
      newPassword.length < 8 ||
      !/\d/.test(newPassword) ||
      !/[a-zA-Z]/.test(newPassword)
    ) {
      setError(
        'Password must be at least 8 characters long and contain both letters and numbers.'
      );
      setNewPassword('');
      setConfirmPassword('');
      setLoading(false);
      setVariant('contained');
      return;
    } else if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setNewPassword('');
      setConfirmPassword('');
      setLoading(false);
      setVariant('contained');
    } else {
      console.log('Password updated.');
      setNewPassword('');
      setConfirmPassword('');
      setError('');
      setLoading(false);
      setVariant('contained');
    }
    console.log(newPassword);
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
      <Card sx={{ minWidth: 300 }}>
        <CardMedia
          sx={{ height: 260, backgroundSize: 'contain' }}
          image={HealthSafety}
          title="U Safe"
        />
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
            <TextField
              id="outlined-basic"
              label="Password"
              variant="standard"
              autoComplete="off"
              error={Boolean(error)}
              helperText={error}
              required
              value={newPassword}
              type="email"
              color="warning"
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="standard"
              autoComplete="off"
              error={Boolean(error)}
              helperText={error}
              required
              value={confirmPassword}
              type="email"
              color="warning"
              onChange={(event) => setConfirmPassword(event.target.value)}
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
                  'Reset Password'
                )}
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default EditPass;
