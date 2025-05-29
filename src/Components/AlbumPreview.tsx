

// import React from "react";
// import { Rnd } from "react-rnd";
// import { ImageData3 } from "../Moldes/ImageData";

// interface AlbumPreviewProps {
//   images: ImageData3[];
//   setSelectedImageId: React.Dispatch<React.SetStateAction<string | null>>;
//   selectedImageId: string | null;
//   selectedImage: ImageData3 | undefined;
//   updateImage: (id: string, prop: string, value: any) => void;
//   albumRef: React.RefObject<HTMLDivElement | null>;
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
//   deleteImage,
// }) => {
//   return (
//     <div
//       id="collage"
//       ref={albumRef}
//       style={{ backgroundColor, width: "100%", height: "100%", position: "relative" }}
//       onMouseDown={() => setSelectedImageId(null)}
//     >
//       {images.map((image) => (
//         <Rnd
//           key={image.id}
//           position={{ x: image.x, y: image.y }}
//           size={{ width: image.width, height: image.height }}
//           bounds="parent"
//           onDragStop={(_e, d) => {
//             updateImage(image.id, "x", d.x);
//             updateImage(image.id, "y", d.y);
//           }}
//           onResizeStop={(_e, _direction, ref, _delta, position) => {
//             updateImage(image.id, "width", ref.offsetWidth);
//             updateImage(image.id, "height", ref.offsetHeight);
//             updateImage(image.id, "x", position.x);
//             updateImage(image.id, "y", position.y);
//           }}
//           onMouseDown={(e) => {
//             e.stopPropagation();
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
//               onClick={(e) => {
//                 e.stopPropagation();
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





// import React, { useState } from "react";
// import { Rnd } from "react-rnd";
// import { ImageData3 } from "../Moldes/ImageData";
// import ChatBot from "./ChatBot"; // ייבוא הקומפוננטה החדשה

// interface AlbumPreviewProps {
//   images: ImageData3[];
//   setSelectedImageId: React.Dispatch<React.SetStateAction<string | null>>;
//   selectedImageId: string | null;
//   selectedImage: ImageData3 | undefined;
//   updateImage: (id: string, prop: string, value: any) => void;
//   albumRef: React.RefObject<HTMLDivElement | null>;
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
//   deleteImage,
// }) => {
//   const [isChatBotOpen, setIsChatBotOpen] = useState(false);

//   return (
//     <>
//       <div
//         id="collage"
//         ref={albumRef}
//         style={{ 
//           backgroundColor, 
//           width: "100%", 
//           height: "100%", 
//           position: "relative" 
//         }}
//         onMouseDown={() => setSelectedImageId(null)}
//       >
//         {/* כפתור פתיחת הצ'אטבוט */}
//         {/* <button
//           onClick={() => setIsChatBotOpen(true)}
//           style={{
//             position: 'absolute',
//             top: '20px',
//             right: '20px',
//             zIndex: 100,
//             padding: '12px 16px',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '25px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             fontWeight: 'bold',
//             boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = '#0056b3';
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#007bff';
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)';
//           }}
//         >
//           <span>💬</span>
//           עוזר בחירת רקע
//         </button> */}

//         {images.map((image) => (
//           <Rnd
//             key={image.id}
//             position={{ x: image.x, y: image.y }}
//             size={{ width: image.width, height: image.height }}
//             bounds="parent"
//             onDragStop={(_e, d) => {
//               updateImage(image.id, "x", d.x);
//               updateImage(image.id, "y", d.y);
//             }}
//             onResizeStop={(_e, _direction, ref, _delta, position) => {
//               updateImage(image.id, "width", ref.offsetWidth);
//               updateImage(image.id, "height", ref.offsetHeight);
//               updateImage(image.id, "x", position.x);
//               updateImage(image.id, "y", position.y);
//             }}
//             onMouseDown={(e) => {
//               e.stopPropagation();
//               setSelectedImageId(image.id);
//             }}
//             style={{
//               border: selectedImageId === image.id ? "2px solid blue" : "none",
//               position: "absolute",
//             }}
//           >
//             <img
//               src={image.src}
//               alt={`image-${image.id}`}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: image.borderRadius,
//                 filter: `blur(${image.blur}px)`,
//               }}
//             />
//             {selectedImageId === image.id && (
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   deleteImage(image.id);
//                 }}
//                 style={{ 
//                   position: "absolute", 
//                   top: 0, 
//                   right: 0, 
//                   background: "red", 
//                   color: "white",
//                   border: "none",
//                   borderRadius: "4px",
//                   padding: "4px 8px",
//                   cursor: "pointer",
//                   fontSize: "12px"
//                 }}
//               >
//                 Delete
//               </button>
//             )}
//           </Rnd>
//         ))}
//       </div>

//       {/* קומפוננטה של הצ'אטבוט */}
//       <ChatBot 
//         isOpen={isChatBotOpen} 
//         onClose={() => setIsChatBotOpen(false)} 
//       />
//     </>
//   );
// };

// export default AlbumPreview;












import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { ImageData3 } from "../Moldes/ImageData";
import ChatBot from "./ChatBot";

interface AlbumPreviewProps {
  images: ImageData3[];
  setSelectedImageId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedImageId: string | null;
  selectedImage: ImageData3 | undefined;
  updateImage: (id: string, prop: string, value: any) => void;
  albumRef: React.RefObject<HTMLDivElement | null>;
  backgroundColor: string;
  backgroundImage: string | null;
  deleteImage: (id: string) => void;
}

const AlbumPreview: React.FC<AlbumPreviewProps> = ({
  images,
  setSelectedImageId,
  selectedImageId,
  updateImage,
  albumRef,
  backgroundColor,
  backgroundImage,
  deleteImage,
}) => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  return (
    <>
      <div
        id="collage"
        ref={albumRef}
        style={{ 
          backgroundColor: backgroundImage ? "transparent" : backgroundColor,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%", 
          height: "100%", 
          position: "relative" 
        }}
        onMouseDown={() => setSelectedImageId(null)}
      >
        {/* כפתור פתיחת הצ'אטבוט */}
        <button
          onClick={() => setIsChatBotOpen(true)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 100,
            padding: '12px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)';
          }}
        >
          <span>💬</span>
          עוזר בחירת רקע
        </button>

        {/* הצגת אינדיקטור לתמונת רקע כאשר נבחרת */}
        {backgroundImage && (
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              zIndex: 100,
              padding: '8px 12px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
           
          </div>
        )}

        {images.map((image) => (
          <Rnd
            key={image.id}
            position={{ x: image.x, y: image.y }}
            size={{ width: image.width, height: image.height }}
            bounds="parent"
            onDragStop={(_e, d) => {
              updateImage(image.id, "x", d.x);
              updateImage(image.id, "y", d.y);
            }}
            onResizeStop={(_e, _direction, ref, _delta, position) => {
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
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  right: 0, 
                  background: "red", 
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                Delete
              </button>
            )}
          </Rnd>
        ))}
      </div>

      {/* קומפוננטה של הצ'אטבוט */}
      <ChatBot 
        isOpen={isChatBotOpen} 
        onClose={() => setIsChatBotOpen(false)} 
      />
    </>
  );
};

export default AlbumPreview;