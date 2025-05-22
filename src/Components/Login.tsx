import axios from 'axios';
import { useRef } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from '../Stores/TokenSlice';
const myUrl = import.meta.env.VITE_SERVERURL


type ResponseType = {
  message: string;
  token: string;
};

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const res = await axios.post<ResponseType>(`${myUrl}/api/user/login`, userData, {
        headers: { "Content-Type": "application/json" },
      });

      dispatch(setToken(res.data.token));
      alert("Login successful!");
      navigate("/profile");
    } catch (error: any) {
      alert("An unexpected error occurred.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Paper sx={{ p: 4, width: 400, bgcolor: '#1e1e1e', borderRadius: 3, boxShadow: 3, color: 'white' }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ff9100' }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Email" type="email" inputRef={emailRef} fullWidth required sx={{ backgroundColor: 'white', borderRadius: 1 }} />
          <TextField label="Password" type="password" inputRef={passwordRef} fullWidth required sx={{ backgroundColor: 'white', borderRadius: 1 }} />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ background: 'linear-gradient(45deg, #ff4081, #ff9100)', color: 'white', fontWeight: 'bold' }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
