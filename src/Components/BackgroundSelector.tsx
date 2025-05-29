// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, Grid, Box, IconButton } from '@mui/material';
// import { Close } from '@mui/icons-material';
// import bg1 from '../images/img1.jpg';
// interface BackgroundSelectorProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelectBackground: (backgroundImage: string) => void;
// }

// const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
//   isOpen,
//   onClose,
//   onSelectBackground,
// }) => {
//   const [backgroundImages, setBackgroundImages] = useState<string[]>([]);

//   useEffect(() => {
//     // טעינת תמונות הרקע מתיקיית assets/backgrounds
//     const loadBackgroundImages = () => {
//       const imageNames = [
//         // 'bg1.jpg',
//         'img2.jpg', 
//         'img3.jpg',
//         'img4.jpg',
//         'img5.jpg',
//         'img6.jpg',
//         'img7.jpg',
//         'img8.jpg'
//       ];
//         // const imageNames = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg'];
//       const imagePaths = imageNames.map(name => `../images/background/${name}`);
//       setBackgroundImages(imagePaths);
//     };

//     if (isOpen) {
//       loadBackgroundImages();
//     }
//   }, [isOpen]);

//   const handleBackgroundSelect = (backgroundImage: string) => {
//     onSelectBackground(backgroundImage);
//     onClose();
//   };

//   return (
//     <Dialog
//       open={isOpen}
//       onClose={onClose}
//       maxWidth="md"
//       fullWidth
//       PaperProps={{
//         sx: {
//           backgroundColor: '#2a2a2a',
//           color: 'white',
//           borderRadius: '15px',
//           minHeight: '500px'
//         }
//       }}
//     >
//       <DialogTitle
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           backgroundColor: '#333',
//           color: 'white',
//           fontWeight: 'bold',
//           fontSize: '1.5rem'
//         }}
//       >
//         בחירת תמונת רקע
//         <IconButton onClick={onClose} sx={{ color: 'white' }}>
//           <Close />
//         </IconButton>
//       </DialogTitle>
      
//       <DialogContent sx={{ padding: '20px', backgroundColor: '#2a2a2a' }}>
//         <Grid container spacing={2}>
//           {backgroundImages.map((bgImage, index) => (
//             <Grid item xs={6} sm={4} md={3} key={index}>
//               <Box
//                 component="div"
//                 sx={{
//                   width: '100%',
//                   height: '120px',
//                   backgroundImage: `url(${bgImage})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   borderRadius: '10px',
//                   cursor: 'pointer',
//                   border: '2px solid transparent',
//                   transition: 'all 0.3s ease',
//                   '&:hover': {
//                     border: '2px solid #007bff',
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
//                   }
//                 }}
//                 onDoubleClick={() => handleBackgroundSelect(bgImage)}
//                 title="לחץ לחיצה כפולה לבחירה"
//               />
//             </Grid>
//           ))}
//         </Grid>
        
//         {backgroundImages.length === 0 && (
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: '200px',
//               color: '#888',
//               fontSize: '1.2rem'
//             }}
//           >
//             לא נמצאו תמונות רקע בתיקיה
//           </Box>
//         )}
        
//         <Box
//           sx={{
//             marginTop: '20px',
//             padding: '15px',
//             backgroundColor: '#333',
//             borderRadius: '8px',
//             textAlign: 'center',
//             color: '#ccc'
//           }}
//         >
//           💡 טיפ: לחץ לחיצה כפולה על תמונת הרקע כדי לבחור אותה
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default BackgroundSelector;










import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
// import bg1 from '../images/img1.jpg';
import bg2 from '../images/background/img2.jpg';
import bg3 from '../images/background/img3.jpg';
import bg4 from '../images/background/img4.jpg';
import bg5 from '../images/background/img5.jpg';
import bg6 from '../images/background/img6.jpg';
import bg7 from '../images/background/img7.jpg';
import bg8 from '../images/background/img8.jpg';
import bg9 from '../images/background/img9.jpg';
import bg10 from '../images/background/img10.jpg';
import bg11 from '../images/background/img11.jpg';
// import bg12 from '../images/background/img12.jpg';
import bg13 from '../images/background/img13.jpg';
import bg14 from '../images/background/img14.jpg';
import bg15 from '../images/background/img15.jpg';
import bg16 from '../images/background/img16.jpg';
import bg17 from '../images/background/img17.jpg';
import bg18 from '../images/background/img18.jpg';
import bg19 from '../images/background/img19.jpg';
import bg20 from '../images/background/img20.jpg';
import bg21 from '../images/background/img21.jpg';
import bg22 from '../images/background/img22.jpg';
import bg23 from '../images/background/img23.jpg';
import bg24 from '../images/background/img24.jpg';
import bg25 from '../images/background/img25.jpg';
import bg26 from '../images/background/img26.jpg';
import bg27 from '../images/background/img27.jpg';
import bg28 from '../images/background/img28.jpg';
import bg29 from '../images/background/img29.jpg';
import bg30 from '../images/background/img30.jpg';
import bg31 from '../images/background/img31.jpg';
import bg32 from '../images/background/img32.jpg';
import bg33 from '../images/background/img33.jpg';
import bg34 from '../images/background/img34.jpg';
import bg35 from '../images/background/img35.jpg';
import bg36 from '../images/background/img36.jpg';
// import bg37 from '../images/background/img37.jpg';
import bg38 from '../images/background/img38.jpg';
import bg39 from '../images/background/img39.jpg';
import bg40 from '../images/background/img40.jpg';
import bg41 from '../images/background/img41.jpg';
import bg42 from '../images/background/img42.jpg';
import bg43 from '../images/background/img43.jpg';
// import bg44 from '../images/background/img44.jpg';




interface BackgroundSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBackground: (backgroundImage: string) => void;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  isOpen,
  onClose,
  onSelectBackground,
}) => {
  const [backgroundImages, setBackgroundImages] = useState<string[]>([]);

  useEffect(() => {
    const loadBackgroundImages = () => {
      // השתמש בתמונות המיובאות - כך הן מובטחות לעבוד
      const images = [ bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg13, bg14, bg15, bg16, bg17, bg18, bg19, bg20,
        bg21, bg22, bg23, bg24, bg25, bg26, bg27, bg28, bg29, bg30,
        bg31, bg32, bg33, bg34, bg35, bg36, bg38, bg39, bg40,
        bg41, bg42, bg43
      ];
      setBackgroundImages(images);
    };

    if (isOpen) {
      loadBackgroundImages();
    }
  }, [isOpen]);

  const handleBackgroundSelect = (backgroundImage: string) => {
    onSelectBackground(backgroundImage);
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#2a2a2a',
          color: 'white',
          borderRadius: '15px',
          minHeight: '500px'
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#333',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        בחירת תמונת רקע
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ padding: '20px', backgroundColor: '#2a2a2a' }}>
        <Grid container spacing={2}>
          {backgroundImages.map((bgImage, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                component="div"
                sx={{
                  width: '100%',
                  height: '120px',
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: '2px solid #007bff',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
                  }
                }}
                onDoubleClick={() => handleBackgroundSelect(bgImage)}
                title="לחץ לחיצה כפולה לבחירה"
              />
            </Grid>
          ))}
        </Grid>
        
        {backgroundImages.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
              color: '#888',
              fontSize: '1.2rem'
            }}
          >
            לא נמצאו תמונות רקע בתיקיה
          </Box>
        )}
        
        <Box
          sx={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#333',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#ccc'
          }}
        >
          💡 טיפ: לחץ לחיצה כפולה על תמונת הרקע כדי לבחור אותה
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BackgroundSelector;