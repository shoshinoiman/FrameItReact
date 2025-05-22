import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Stores/Store';
import { User } from '../Moldes/User';
import { clearToken } from '../Stores/TokenSlice';
import { TextField, Button, Box, Typography, Paper, IconButton } from '@mui/material';
import { X, LogOut } from 'lucide-react';

interface ProfileProps {
  closeProfile: () => void;
}

const Profile: React.FC<ProfileProps> = ({ closeProfile }) => {
  const user = useSelector((state: RootState) => state.token.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(user);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => prevUser ? { ...prevUser, [name]: value } : prevUser);
  };

  const handleSave = () => {
    console.log('Saved user:', editedUser);
    setIsEditing(false);
  };

  const handleLogout = () => {
    dispatch(clearToken());
    closeProfile(); // סגירת המודל אחרי לוגאאוט
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#121212', color: 'white', borderRadius: 3 }}>
      {/* כפתור סגירה */}
      <IconButton sx={{ position: 'absolute', right: 10, top: 10, color: 'white' }} onClick={closeProfile}>
        <X size={24} />
      </IconButton>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #ff4081, #ff9100)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Hi {user.name}, your details:
      </Typography>

      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, backgroundColor: '#1e1e1e', boxShadow: '0px 6px 15px rgba(255, 255, 255, 0.3)', textAlign: 'center' }}>
        {isEditing ? (
          <Box>
            <TextField label="Name" name="name" value={editedUser?.name || ''} onChange={handleChange} fullWidth margin="normal" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
            <TextField label="Email" name="email" value={editedUser?.email || ''} onChange={handleChange} fullWidth margin="normal" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
            <TextField label="Role" name="role" value={editedUser?.role || ''} onChange={handleChange} fullWidth margin="normal" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
            <Button variant="contained" onClick={handleSave} fullWidth sx={{ mt: 2, background: 'linear-gradient(45deg, #ff4081, #ff9100)', color: 'white', fontWeight: 'bold', p: 1.5 }}>Save</Button>
          </Box>
        ) : (
          <Box>
            <Typography variant="body1" sx={{ fontSize: '2rem', mb: 2, color: '#ffcc00' }}><strong>Name:</strong> {user.name}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1, color: '#ffcc00' }}><strong>Email:</strong> {user.email}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 1, color: '#ffcc00' }}><strong>Role:</strong> {user.role}</Typography>
            <Button variant="outlined" onClick={() => setIsEditing(true)} fullWidth sx={{ color: '#ff9100', borderColor: '#ff9100', fontWeight: 'bold', p: 1.5 }}>Edit</Button>
          </Box>
        )}
        {/* כפתור לוגאאוט עם אייקון */}
        <Button variant="contained" onClick={handleLogout} fullWidth sx={{ mt: 3, background: 'linear-gradient(45deg, #ff4081, #ff9100)', color: 'white', fontWeight: 'bold', p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LogOut size={20} style={{ marginRight: 8 }} /> Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;
