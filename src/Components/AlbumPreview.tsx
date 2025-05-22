// import { Box } from "@mui/material";
// import { useEffect } from "react";
// import { Rnd } from "react-rnd";

// const AlbumPreview = ({
//     images,
//     setSelectedImageId,
//     selectedImageId,
//     updateImage,
//     albumRef,
//     backgroundColor,
// }: any) => {
//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (event.key === "Backspace" && selectedImageId) {
//                 updateImage(selectedImageId, "delete", true);
//             }
//         };

//         window.addEventListener("keydown", handleKeyDown);

//         return () => {
//             window.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [selectedImageId, updateImage]);

//     return (
//         <Box
//         id="collage"
//             ref={albumRef}
//             sx={{
//                 position: "relative",
//                 width: "100%",
//                 height: 800,
//                 border: "2px dashed #FF1493",
//                 backgroundColor: backgroundColor,
//             }}
//         >
//             {images.map((image: any) => (
//                 <Rnd
                    
//                     key={image.id}
//                     default={{ x: image.x, y: image.y, width: image.width, height: image.height }}
//                     bounds="parent"
//                     onDragStop={(e, d) => updateImage(image.id, "x", d.x)}
//                     onResizeStop={(e, direction, ref, delta, position) =>
//                         updateImage(image.id, "width", ref.offsetWidth)
//                     }
//                     style={{
//                         position: "absolute",
//                         backgroundImage: `url(${image.src})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         filter: `blur(${image.blur}px)`,
//                         borderRadius: `${image.borderRadius}px`,
//                         cursor: "pointer",
//                     }}
//                     onClick={() => setSelectedImageId(image.id)}
//                 />
//             ))}
//         </Box>
//     );
// };

// export default AlbumPreview;
















// import React from "react";
// import { Rnd } from "react-rnd";
// import { ImageData3 } from "../Moldes/ImageData";

// interface AlbumPreviewProps {
//   images: ImageData3[];
//   setSelectedImageId: (id: string) => void;
//   selectedImageId: string | null;
//   selectedImage: ImageData3 | undefined;
//   updateImage: (id: string, prop: string, value: any) => void;
//   albumRef: React.RefObject<HTMLDivElement| null>;
//   backgroundColor: string;
//   deleteImage: (id: string) => void;
// }

// const AlbumPreview: React.FC<AlbumPreviewProps> = ({
//   images,
//   setSelectedImageId,
//   selectedImageId,
//   selectedImage,
//   updateImage,
//   albumRef,
//   backgroundColor,
//   deleteImage,
// }) => {
//   const onDragStop = (e: any, data: any) => {
//     if (updateImage && selectedImageId) { // בודק אם הפונקציה קיימת ואם יש ID לתמונה הנבחרת
//         updateImage(selectedImageId, "x", data.x); // עדכון מיקום ה-X
//         updateImage(selectedImageId, "y", data.y); // עדכון מיקום ה-Y
//     }
//   }
//     return (
//         <div ref={albumRef} style={{ backgroundColor, width: "100%", height: "100%" }}>
//             {images.map((image) => (
//                 <Rnd
//                     key={image.id}
//                     default={{ x: image.x, y: image.y, width: image.width, height: image.height }}
//                     bounds="parent"
//                     onDragStop={(e, d) => updateImage(image.id, "x", d.x)}
//                     onResizeStop={(e, data) => onDragStop(e, data)}
//                     onClick={() => setSelectedImageId(image.id)}
//                     style={{
//                         border: selectedImageId === image.id ? "2px solid blue" : "none",
//                     }}
//                 >
//                     <img
//                         src={image.src}
//                         alt={`image-${image.id}`}
//                         style={{
//                             width: image.width,
//                             height: image.height,
//                             objectFit: "cover",
//                             borderRadius: image.borderRadius,
//                             filter: `blur(${image.blur}px)`,
//                         }}
//                     />
//                     <button onClick={() => deleteImage(image.id)} style={{ position: "absolute", top: 0, right: 0 }}>
//                         Delete
//                     </button>
//                 </Rnd>
//             ))}
//         </div>
//     );
// };

// export default AlbumPreview;






import React from "react";
import { Rnd } from "react-rnd";
import { ImageData3 } from "../Moldes/ImageData";

interface AlbumPreviewProps {
  images: ImageData3[];
  setSelectedImageId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedImageId: string | null;
  selectedImage: ImageData3 | undefined;
  updateImage: (id: string, prop: string, value: any) => void; // טיפוס הפונקציה
  albumRef: React.RefObject<HTMLDivElement|null>;
  backgroundColor: string;
  deleteImage: (id: string) => void;
}

const AlbumPreview: React.FC<AlbumPreviewProps> = ({ 
  images, 
  setSelectedImageId, 
  selectedImageId, 
  selectedImage, 
  updateImage, 
  albumRef, 
  backgroundColor, 
  deleteImage 
}) => {

  const onDragStop = (e: any, data: any) => {
    if (selectedImageId && updateImage) {
      updateImage(selectedImageId, "x", data.x);
      updateImage(selectedImageId, "y", data.y);
    } else {
      console.error("updateImage is not a function or selectedImageId is null");
    }
  };

  return (
    <div
      id="collage"
      ref={albumRef}
      style={{ backgroundColor, width: "100%", height: "100%", position: "relative" }}
      onMouseDown={() => setSelectedImageId(null)} // ביטול בחירה אם לוחצים מחוץ לתמונה
    >
      {images.map((image) => (
        <Rnd
          key={image.id}
          default={{ x: image.x, y: image.y, width: image.width, height: image.height }}
          bounds="parent"
          onDragStop={(e, d) => onDragStop(e, d)}
          onMouseDown={(e) => {
            e.stopPropagation(); // מונע ביטול בחירה בזמן לחיצה על תמונה
            setSelectedImageId(image.id);
          }}
          style={{
            border: selectedImageId === image.id ? "2px solid blue" : "none",
            position: "absolute",
          }}
        >
          <img
            src={image.src}
            alt={`image-${image.id}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: image.borderRadius,
              filter: `blur(${image.blur}px)`,
            }}
          />
          {selectedImageId === image.id && (
            <button
              onClick={(e) => {
                // e.stopPropagation(); // מונע ביטול בחירה בלחיצה על הכפתור
                deleteImage(image.id);
              }}
              style={{ position: "absolute", top: 0, right: 0, background: "red", color: "white" }}
            >
              Delete
            </button>
          )}
        </Rnd>
      ))}
    </div>
  );
};

export default AlbumPreview;
