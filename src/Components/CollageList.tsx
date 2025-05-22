// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../Stores/Store";
// import { DeleteCollage, GetAllCollagesByUserId } from "./Services/CollageService";
// import { Collage } from "../Moldes/Collage";
// import { Container, Card, CardMedia, CardContent, Typography, Button, Grid, Dialog, DialogContent, DialogActions, IconButton } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const CollageList: React.FC = () => {
//   const userId1 = useSelector((state: RootState) => state.token.user?.id); 
//   const userId = userId1 ? parseInt(userId1, 10) : 0; 

//   const [collages, setCollages] = useState<Collage[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [open, setOpen] = useState<boolean>(false);
//   const [selectedIndex, setSelectedIndex] = useState<number>(0);

//   useEffect(() => {
//     const fetchCollages = async () => {
//       if (userId <= 0) { 
//         setLoading(false);
//         return;
//       }
//       setLoading(true);
//       try {
//         const data = await GetAllCollagesByUserId(userId);
//         console.log("data: ",data);
        
//         setCollages(data);
//       } catch (error) {
//         console.error("Error fetching collages:", error);
//       }
//       setLoading(false);
//     };

//     fetchCollages();
//   }, [userId]);

//   const handleDelete = async (collageId: number, fileName: string) => {
//     const success = await DeleteCollage(collageId, fileName);
//     if (success) {
//       setCollages((prev) => prev.filter((collage) => collage.id !== collageId));
//     } else {
//       alert("שגיאה במחיקת הקובץ.");
//     }
//   };

//   const handleOpen = (index: number) => {
//     setSelectedIndex(index);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleNext = () => {
//     setSelectedIndex((prevIndex) => (prevIndex + 1) % collages.length);
//   };

//   const handlePrev = () => {
//     setSelectedIndex((prevIndex) => (prevIndex - 1 + collages.length) % collages.length);
//   };

//   if (userId === 0) return <p>עליך להתחבר כדי לראות את הקולאז'ים שלך.</p>; 
//   if (loading) return <p>טוען קולאז'ים...</p>;
//   if (collages.length === 0) return <p>לא נמצאו קולאז'ים.</p>;

//   return (
//     <Container maxWidth="xl" style={{ padding: "3rem", textAlign: "center", backgroundColor: "#121212", color: "white" }}>
//       <Typography variant="h2" gutterBottom style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>
//         Your Collages
//       </Typography>
//       <Typography variant="h5" paragraph style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(45deg, #ff4081, #ff9100)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>
//         Manage your stunning collage creations easily. Edit or delete them as you like.
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {collages.map((collage, index) => (
//           <Grid item xs={12} sm={6} md={4} key={collage.id}>
//             <Card style={{
//               backgroundColor: "#1e1e1e", 
//               borderRadius: "15px", 
//               boxShadow: "0px 6px 15px rgba(255, 255, 255, 0.3)", 
//               overflow: "hidden",
//               position: "relative",
//               maxWidth: "100%",
//             }}>
//               <CardMedia 
//                 component="img" 
//                 image={collage.collageUrl} 
//                 alt={collage.title} 
//                 style={{ height: "350px", objectFit: "cover", width: "100%" }}
//                 onClick={() => handleOpen(index)}
//               />
//               <CardContent>
//                 <Typography variant="h5" style={{ fontWeight: "bold", color: "#ffffff" }}>
//                   {collage.title}
//                 </Typography>
//               </CardContent>
//               <Button 
//                 variant="contained" 
//                 fullWidth
//                 style={{ background: "linear-gradient(45deg, #ff4081, #ff9100)", color: "white", fontWeight: "bold", padding: "1rem", fontSize: "1rem", borderRadius: "0px" }}
//                 onClick={() => handleDelete(collage.id, collage.title)}
//               >
//                 Delete Collage
//               </Button>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* פופאפ (Dialog) עם ניווט בין קולאז'ים */}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//   {/* אייקון סגירה - ממוקם נכון */}
//   <IconButton 
//     onClick={handleClose} 
//     style={{ 
//       position: "absolute", 
//       top: "10px", 
//       right: "10px", 
//       color: "#ffffff", 
//       backgroundColor: "rgba(0, 0, 0, 0.6)", 
//       zIndex: 1000 
//     }}
//   >
//     <CloseIcon />
//   </IconButton>

//   <DialogContent style={{ padding: 0, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
//     {/* חץ אחורה */}
//     <IconButton onClick={handlePrev} style={{ position: "absolute", left: "10px", color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}>
//       <ArrowBackIosNewIcon />
//     </IconButton>

//     <img 
//       src={collages[selectedIndex]?.collageUrl} 
//       alt={collages[selectedIndex]?.title} 
//       style={{ width: "100%", height: "auto", borderRadius: "15px", maxHeight: "80vh", objectFit: "contain" }}
//     />

//     {/* חץ קדימה */}
//     <IconButton onClick={handleNext} style={{ position: "absolute", right: "10px", color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}>
//       <ArrowForwardIosIcon />
//     </IconButton>
//   </DialogContent>
// </Dialog>
//     </Container>
//   );
// };

// export default CollageList;


















import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Stores/Store";
import { DeleteCollage, GetAllCollagesByUserId } from "./Services/CollageService";
import { Collage } from "../Moldes/Collage";
import { Container, Card, CardMedia, CardContent, Typography, Button, Grid, Dialog, DialogContent, DialogActions, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CollageList: React.FC = () => {
  const userId1 = useSelector((state: RootState) => state.token.user?.id); 
  const userId = userId1 ? parseInt(userId1, 10) : 0; 

  const [collages, setCollages] = useState<Collage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const fetchCollages = async () => {
      if (userId <= 0) { 
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const data = await GetAllCollagesByUserId(userId);
        setCollages(data);
      } catch (error) {
        console.error("Error fetching collages:", error);
      }
      setLoading(false);
    };

    fetchCollages();
  }, [userId]);

  const handleDelete = async (collageId: number, fileName: string) => {
    const success = await DeleteCollage(collageId, fileName);
    if (success) {
      setCollages((prev) => prev.filter((collage) => collage.id !== collageId));
    } else {
      alert("שגיאה במחיקת הקובץ.");
    }
  };

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % collages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + collages.length) % collages.length);
  };

  if (userId === 0) return <p>עליך להתחבר כדי לראות את הקולאז'ים שלך.</p>; 
  if (loading) return <p>טוען קולאז'ים...</p>;
  if (collages.length === 0) return <p>לא נמצאו קולאז'ים.</p>;

  return (
    <Container maxWidth="xl" style={{ padding: "3rem", textAlign: "center", backgroundColor: "#121212", color: "white", overflowX: "hidden" }}>
      <Typography variant="h2" gutterBottom style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>
        Your Collages
      </Typography>
      <Typography variant="h5" paragraph style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(45deg, #ff4081, #ff9100)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>
        Manage your stunning collage creations easily. Edit or delete them as you like.
      </Typography>

      <Grid container spacing={4} justifyContent="center" style={{ overflowX: "hidden" }}>
        {collages.map((collage, index) => (
          <Grid item xs={12} sm={6} md={4} key={collage.id}>
            <Card style={{
              backgroundColor: "#1e1e1e", 
              borderRadius: "15px", 
              boxShadow: "0px 6px 15px rgba(255, 255, 255, 0.3)", 
              overflow: "hidden",
              position: "relative",
              width: "100%",
              height: "500px",  // גובה קבוע לכל הכרטיסים
              display: "flex",
              flexDirection: "column",  // גמישות להדבקת הכפתור לתחתית
            }}>
              <CardMedia 
                component="img" 
                image={collage.collageUrl} 
                alt={collage.title} 
                style={{ height: "70%", objectFit: "cover", width: "100%" }}
                onClick={() => handleOpen(index)}
              />
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h5" style={{ fontWeight: "bold", color: "#ffffff" }}>
                  {collage.title}
                </Typography>
              </CardContent>
              <Button 
                variant="contained" 
                fullWidth
                style={{ 
                  background: "linear-gradient(45deg, #ff4081, #ff9100)", 
                  color: "white", 
                  fontWeight: "bold", 
                  padding: "1rem", 
                  fontSize: "1rem", 
                  borderRadius: "0px",
                  marginTop: "auto",  // הכפתור מוצמד לתחתית
                }}
                onClick={() => handleDelete(collage.id, collage.title)}
              >
                Delete Collage
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* פופאפ (Dialog) עם ניווט בין קולאז'ים */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {/* אייקון סגירה */}
        <IconButton 
          onClick={handleClose} 
          style={{ 
            position: "absolute", 
            top: "10px", 
            right: "10px", 
            color: "#ffffff", 
            backgroundColor: "rgba(0, 0, 0, 0.6)", 
            zIndex: 1000 
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent style={{ padding: 0, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          {/* חץ אחורה */}
          <IconButton onClick={handlePrev} style={{ position: "absolute", left: "10px", color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <img 
            src={collages[selectedIndex]?.collageUrl} 
            alt={collages[selectedIndex]?.title} 
            style={{ width: "100%", height: "auto", borderRadius: "15px", maxHeight: "80vh", objectFit: "contain" }}
          />

          {/* חץ קדימה */}
          <IconButton onClick={handleNext} style={{ position: "absolute", right: "10px", color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default CollageList;
