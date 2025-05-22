import axios from "axios";
import { useRef, useState } from "react";
import { Box, Button, TextField, Typography, Modal, Backdrop, Fade } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../Stores/TokenSlice";
const myUrl = import.meta.env.VITE_SERVERURL


type ResponseType = {
  message: string;
  token: string;
};

const Register = () => {
  const [open, setOpen] = useState(true);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    console.log(`register url: ${myUrl}/api/User/register`);
    console.log( userData);

    try {
      const res = await axios.post<ResponseType>(`${myUrl}/api/User/register`, userData
      //   , {
      //   // headers: { "Content-Type": "application/json" },
      // }
    );


      dispatch(setToken(res.data.token));
      alert("Registration successful!");
      navigate("/profile");
    } 
    
    catch (error: any) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: '#1e1e1e',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            color: 'white'
          }}>
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ff9100' }}>
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField label="Name" inputRef={nameRef} fullWidth required sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              <TextField label="Email" type="email" inputRef={emailRef} fullWidth required sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              <TextField label="Password" type="password" inputRef={passwordRef} fullWidth required sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth 
                sx={{ background: 'linear-gradient(45deg, #ff4081, #ff9100)', color: 'white', fontWeight: 'bold' }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Register;
