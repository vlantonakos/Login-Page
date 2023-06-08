import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usersData from '../../db.json';


const Login = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(usersData.users);

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');
      
      const user = users.find((user) => user.email === email);
      
      if (user && user.password === password) {
        navigate('/dashboard');
      } else if (user && user.password !== password) {
        toast.warn('Wrong password', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.warn('Wrong email or password', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    <Grid item sx={{backgroundColor:'#00c9ff',background:'-webkit-linear-gradient(to bottom, #00c9ff, #92fe9d)',background:'linear-gradient(to bottom, #00c9ff, #92fe9d)'}} xs={12} sm={8} md={5} lg={3} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          mt: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,"&:hover": {
              backgroundColor:'green',
            }}}
          >
            Sign In
          </Button>
          <ToastContainer />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      lg={9}
      sx={{
        background:'-webkit-linear-gradient(to bottom, #c2e59c, #64b3f4)',
        background:'linear-gradient(to bottom, #c2e59c, #64b3f4)',
        backgroundColor:'#c2e59c',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  </Grid>
  )
}

export default Login