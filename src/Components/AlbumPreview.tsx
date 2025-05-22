
// import React from "react";
// import { Rnd } from "react-rnd";
// import { ImageData3 } from "../Moldes/ImageData";

// interface AlbumPreviewProps {
//   images: ImageData3[];
//   setSelectedImageId: React.Dispatch<React.SetStateAction<string | null>>;
//   selectedImageId: string | null;
//   selectedImage: ImageData3 | undefined;
//   updateImage: (id: string, prop: string, value: any) => void; // טיפוס הפונקציה
//   albumRef: React.RefObject<HTMLDivElement|null>;
//   backgroundColor: string;
//   deleteImage: (id: string) => void;
// }

// const AlbumPreview: React.FC<AlbumPreviewProps> = ({ 
//   images, 
//   setSelectedImageId, 
//   selectedImageId, 
//   // selectedImage, 
//   updateImage, 
//   albumRef, 
//   backgroundColor, 
//   deleteImage 
// }) => {

//   const onDragStop = ( data: any) => {
//     if (selectedImageId && updateImage) {
//       updateImage(selectedImageId, "x", data.x);
//       updateImage(selectedImageId, "y", data.y);
//     } else {
//       console.error("updateImage is not a function or selectedImageId is null");
//     }
//   };

//   return (
//     <div
//       id="collage"
//       ref={albumRef}
//       style={{ backgroundColor, width: "100%", height: "100%", position: "relative" }}
//       onMouseDown={() => setSelectedImageId(null)} // ביטול בחירה אם לוחצים מחוץ לתמונה
//     >
//       {images.map((image) => (
//         <Rnd
//           key={image.id}
//           default={{ x: image.x, y: image.y, width: image.width, height: image.height }}
//           bounds="parent"
//           onDragStop={( d) => onDragStop( d)}
//           onMouseDown={(e) => {
//             e.stopPropagation(); // מונע ביטול בחירה בזמן לחיצה על תמונה
//             setSelectedImageId(image.id);
//           }}
//           style={{
//             border: selectedImageId === image.id ? "2px solid blue" : "none",
//             position: "absolute",
//           }}
//         >
//           <img
//             src={image.src}
//             alt={`image-${image.id}`}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               borderRadius: image.borderRadius,
//               filter: `blur(${image.blur}px)`,
//             }}
//           />
//           {selectedImageId === image.id && (
//             <button
//               onClick={() => {
//                 // e.stopPropagation(); // מונע ביטול בחירה בלחיצה על הכפתור
//                 deleteImage(image.id);
//               }}
//               style={{ position: "absolute", top: 0, right: 0, background: "red", color: "white" }}
//             >
//               Delete
//             </button>
//           )}
//         </Rnd>
//       ))}
//     </div>
//   );
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
  updateImage: (id: string, prop: string, value: any) => void;
  albumRef: React.RefObject<HTMLDivElement | null>;
  backgroundColor: string;
  deleteImage: (id: string) => void;
}

const AlbumPreview: React.FC<AlbumPreviewProps> = ({
  images,
  setSelectedImageId,
  selectedImageId,
  // selectedImage,
  updateImage,
  albumRef,
  backgroundColor,
  deleteImage,
}) => {
  return (
    <div
      id="collage"
      ref={albumRef}
      style={{ backgroundColor, width: "100%", height: "100%", position: "relative" }}
      onMouseDown={() => setSelectedImageId(null)}
    >
      {images.map((image) => (
        <Rnd
          key={image.id}
          position={{ x: image.x, y: image.y }}
          size={{ width: image.width, height: image.height }}
          bounds="parent"
          onDragStop={(e, d) => {
            updateImage(image.id, "x", d.x);
            updateImage(image.id, "y", d.y);
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            updateImage(image.id, "width", ref.offsetWidth);
            updateImage(image.id, "height", ref.offsetHeight);
            updateImage(image.id, "x", position.x);
            updateImage(image.id, "y", position.y);
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
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
                e.stopPropagation();
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

