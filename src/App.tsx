import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Register from './Components/Register';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Profile from './Components/Profile';
import CreateCollage from './Components/CreateCollage';
import CollageList from './Components/CollageList';
import AlbumEditor from "./Components/AlbumEditor";
import HomePage from './Components/Home';

interface Template {
  id: number;
  name: string;
  image: string;
}

function App() {
  const template: Template = {
    id: 1,
    name: "תבנית קלאסית",
    image: "/templates/classic.jpg",
  };
  const token = useSelector((state: any) => state.token.token) || localStorage.getItem('token');

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
        <Menu />
        <Box sx={{ flexGrow: 1, width: "100%", mt: 10 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {!token ? (
              <>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </>
            ) : (
              <>
                <Route path="/profile" element={<Profile closeProfile={()=>{}}/>} />
                <Route path="/collages" element={<CreateCollage />} />
                <Route path="/AlbumEditor" element={<AlbumEditor template={template} />} />
                <Route path="/CollageList" element={<CollageList />} />
              </>
            )}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
