// // // import React, { useState, useRef } from "react";
// // // import { useSelector } from "react-redux";
// // // import { RootState } from "../Stores/Store";
// // // import { SaveCollage, downloadAlbum } from "./Services/CollageService";
// // // import AlbumSettings from "./AlbumSettings";
// // // import AlbumPreview from "./AlbumPreview";
// // // import { Container, Typography, Grid } from "@mui/material";
// // // import { Template } from "../Moldes/Tamplate";
// // // import { ImageData3 } from "../Moldes/ImageData";
// // // import DomToImage from "dom-to-image";

// // // const AlbumEditor: React.FC<{ template: Template }> = () => {
// // //     const user = useSelector((state: RootState) => state.token.user);
// // //     const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
// // //     const [title, setTitle] = useState<string>("Album Title");
// // //     const [images, setImages] = useState<ImageData3[]>([]);
// // //     const [selectedFrame, setSelectedFrame] = useState<string>("rectangle");
// // //     const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
// // //     const albumRef = useRef<HTMLDivElement>(null);

// // //     // פונקציה להעלאת תמונה
// // //     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// // //         const files = event.target.files;
// // //         if (!files) return;

// // //         const newImages = Array.from(files).map((file, index) => ({
// // //             id: `${Date.now()}-${index}`,
// // //             src: URL.createObjectURL(file),
// // //             x: 100,
// // //             y: 100,
// // //             width: 200,
// // //             height: 200,
// // //             frame: selectedFrame,
// // //             blur: 0,
// // //             borderRadius: 0,
// // //             opacity: 1,
// // //             rotate: 0,
// // //             contrast: 1,
// // //             saturation: 1,
// // //             grayscale: 0,
// // //             brightness: 1,
// // //             hue: 0,
// // //         }));

// // //         setImages((prevImages: any) => [...prevImages, ...newImages]);
// // //     };

// // //     // פונקציה לשמירת הקולאז'
// // //     const handleSaveCollage = async () => {
// // //         if (!user?.id) {
// // //             alert("User is not logged in, please log in before saving the collage!");
// // //             return;
// // //         }

// // //         if (!albumRef.current) {
// // //             alert("Error: Album reference is missing!");
// // //             return;
// // //         }

// // //         try {
// // //             await SaveCollage(user.id, "f");
// // //             alert("Collage saved successfully!");
// // //         } catch (error) {
// // //             console.error("❌ Error saving collage:", error);
// // //             alert("Failed to save the collage!");
// // //         }
// // //     };

// // //     // פונקציה להורדת האלבום
// // //     const handleDownloadAlbum = async () => {
// // //         if (!albumRef.current) {
// // //             alert("error");
// // //             return;
// // //         }
// // //         try {
// // //             const dataUrl = await DomToImage.toPng(albumRef.current, { quality: 1, bgcolor: "white" });
// // //             downloadAlbum(dataUrl);
// // //         } catch (error) {
// // //             console.error("❌ Error downloading:", error);
// // //         }
// // //     };

// // //     // פונקציה למחיקת תמונה
// // //     const deleteImage = (id: string) => {
// // //         setImages((prevImages) => prevImages.filter((img) => img.id !== id));
// // //     };

// // //     return (
// // //         <Container maxWidth={false} sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#121212", color: "white", padding: "2rem" }}>
// // //             <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
// // //                 Album Editor
// // //             </Typography>
// // //             <Grid container spacing={2} sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
// // //                 {/* צד שמאל - הגדרות */}
// // //                 <Grid item xs={2} sx={{ display: "flex", flexDirection: "column", minWidth: "250px" }}>
// // //                     <AlbumSettings
// // //                         title={title}
// // //                         setTitle={setTitle}
// // //                         backgroundColor={backgroundColor}
// // //                         setBackgroundColor={setBackgroundColor}
// // //                         selectedFrame={selectedFrame}
// // //                         setSelectedFrame={setSelectedFrame}
// // //                         handleImageUpload={handleImageUpload}
// // //                         handleDownloadAlbum={handleDownloadAlbum}
// // //                         handleSaveCollage={handleSaveCollage}
// // //                         deleteImage={deleteImage}
// // //                         selectedImage={images.find(img => img.id === selectedImageId)}
// // //                         updateImage={(id: string, prop: any, value: any) => {
// // //                             setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, [prop]: value } : img));
// // //                         }}
// // //                     />
// // //                 </Grid>

// // //                 {/* צד ימין - תצוגת האלבום */}
// // //                 <Grid item xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
// // //                     <AlbumPreview
// // //                         images={images}
// // //                         setSelectedImageId={setSelectedImageId}
// // //                         selectedImageId={selectedImageId}
// // //                         selectedImage={images.find(img => img.id === selectedImageId)}
// // //                         updateImage={(id: string, prop: any, value: any) => {
// // //                             setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, [prop]: value } : img));
// // //                         }}
// // //                         albumRef={albumRef}
// // //                         backgroundColor={backgroundColor}
// // //                         deleteImage={deleteImage}
// // //                     />
// // //                 </Grid>
// // //             </Grid>
// // //         </Container>
// // //     );
// // // };

// // // export default AlbumEditor;


























// // // // import { useState, useRef, useEffect } from "react";
// // // // import useDropzone from "react-dropzone";
// // // // import { Trash2 } from "lucide-react";

// // // // export default function AlbumEditor() {
// // // //   const [image, setImage] = useState(null);
// // // //   const imgRef = useRef(null);

// // // //   const { getRootProps, getInputProps } = new useDropzone({
// // // //       accept: "image/*",
// // // //       onDrop: (acceptedFiles) => {
// // // //           const file = acceptedFiles[0];
// // // //           if (file) {
// // // //               const reader = new FileReader();
// // // //               reader.onload = () => setImage(reader.result);
// // // //               reader.readAsDataURL(file);
// // // //           }
// // // //       },
// // // //   });

// // // //   const handleKeyDown = (event) => {
// // // //     if (event.key === "Backspace" && image) {
// // // //       setImage(null);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     document.addEventListener("keydown", handleKeyDown);
// // // //     return () => document.removeEventListener("keydown", handleKeyDown);
// // // //   }, [image]);

// // // //   return (
// // // //     <div className="flex flex-col items-center p-4 border rounded-lg">
// // // //       <div
// // // //         {...getRootProps()}
// // // //         className="w-64 h-64 flex items-center justify-center border-dashed border-2 rounded-lg cursor-pointer bg-gray-100"
// // // //       >
// // // //         <input {...getInputProps()} />
// // // //         {!image ? (
// // // //           <p className="text-gray-500">גרור או העלה תמונה כאן</p>
// // // //         ) : (
// // // //           <img
// // // //             ref={imgRef}
// // // //             src={image}
// // // //             alt="Uploaded"
// // // //             className="w-full h-full object-cover rounded-lg"
// // // //           />
// // // //         )}
// // // //       </div>
// // // //       {image && (
// // // //         <button
// // // //           onClick={() => setImage(null)}
// // // //           className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
// // // //         >
// // // //           <Trash2 size={18} /> מחק תמונה
// // // //         </button>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // // // 









// // import React, { useState, useRef, useEffect } from "react";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../Stores/Store";
// // import { SaveCollage, downloadAlbum } from "./Services/CollageService";
// // import AlbumSettings from "./AlbumSettings";
// // import AlbumPreview from "./AlbumPreview";
// // import { Container, Typography, Grid } from "@mui/material";
// // import { Template } from "../Moldes/Tamplate";
// // import { ImageData3 } from "../Moldes/ImageData";
// // import DomToImage from "dom-to-image";

// // const AlbumEditor: React.FC<{ template: Template }> = () => {
// //     const user = useSelector((state: RootState) => state.token.user);
// //     const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
// //     const [title, setTitle] = useState<string>("Album Title");
// //     const [images, setImages] = useState<ImageData3[]>([]);
// //     const [selectedFrame, setSelectedFrame] = useState<string>("rectangle");
// //     const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
// //     const albumRef = useRef<HTMLDivElement>(null);

// //     useEffect(() => {
// //         const handleKeyDown = (event: KeyboardEvent) => {
// //             if (event.key === "Backspace" && selectedImageId) {
// //                 deleteImage(selectedImageId);
// //                 setSelectedImageId(null);
// //             }
// //         };

// //         document.addEventListener("keydown", handleKeyDown);
// //         return () => {
// //             document.removeEventListener("keydown", handleKeyDown);
// //         };
// //     }, [selectedImageId]);

// //     // פונקציה להעלאת תמונה
// //     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         const files = event.target.files;
// //         if (!files) return;

// //         const newImages = Array.from(files).map((file, index) => {
// //             const src = URL.createObjectURL(file);
// //             return {
// //                 id: `${Date.now()}-${index}`,
// //                 src,
// //                 x: 100,
// //                 y: 100,
// //                 width: 200,
// //                 height: 200,
// //                 frame: selectedFrame,
// //                 blur: 0,
// //                 borderRadius: 0,
// //                 opacity: 1,
// //                 rotate: 0,
// //                 contrast: 1,
// //                 saturation: 1,
// //                 grayscale: 0,
// //                 brightness: 1,
// //                 hue: 0,
// //             };
// //         });

// //         setImages((prevImages) => [...prevImages, ...newImages]);
// //     };

// //     // פונקציה למחיקת תמונה
// //     const deleteImage = (id: string) => {
// //         setImages((prevImages) => {
// //             const imageToDelete = prevImages.find(img => img.id === id);
// //             if (imageToDelete) URL.revokeObjectURL(imageToDelete.src);
// //             return prevImages.filter((img) => img.id !== id);
// //         });
// //     };

// //     return (
// //         <Container maxWidth={false} sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#121212", color: "white", padding: "2rem" }}>
// //             <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
// //                 Album Editor
// //             </Typography>
// //             <Grid container spacing={2} sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
// //                 {/* צד שמאל - הגדרות */}
// //                 <Grid item xs={2} sx={{ display: "flex", flexDirection: "column", minWidth: "250px" }}>
// //                     <AlbumSettings
// //                         title={title}
// //                         setTitle={setTitle}
// //                         backgroundColor={backgroundColor}
// //                         setBackgroundColor={setBackgroundColor}
// //                         selectedFrame={selectedFrame}
// //                         setSelectedFrame={setSelectedFrame}
// //                         handleImageUpload={handleImageUpload}
// //                         // handleDownloadAlbum={handleDownloadAlbum}
// //                         // handleSaveCollage={handleSaveCollage}
// //                         deleteImage={deleteImage}
// //                         selectedImage={images.find(img => img.id === selectedImageId)}
// //                         updateImage={(id: string, prop: any, value: any) => {
// //                             setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, [prop]: value } : img));
// //                         }}
// //                     />
// //                 </Grid>

// //                 {/* צד ימין - תצוגת האלבום */}
// //                 <Grid item xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
// //                     <AlbumPreview
// //                         images={images}
// //                         setSelectedImageId={setSelectedImageId}
// //                         selectedImageId={selectedImageId}
// //                         selectedImage={images.find(img => img.id === selectedImageId)}
// //                         updateImage={(id: string, prop: any, value: any) => {
// //                             setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, [prop]: value } : img));
// //                         }}
// //                         albumRef={albumRef}
// //                         backgroundColor={backgroundColor}
// //                         deleteImage={deleteImage}
// //                     />
// //                 </Grid>
// //             </Grid>
// //         </Container>
// //     );
// // };

// // export default AlbumEditor;

























// // import React, { useState, useRef, useEffect } from "react";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../Stores/Store";
// // import { SaveCollage, downloadAlbum } from "./Services/CollageService";
// // import AlbumSettings from "./AlbumSettings";
// // import AlbumPreview from "./AlbumPreview";
// // import { Container, Typography, Grid } from "@mui/material";
// // import { Template } from "../Moldes/Tamplate";
// // import { ImageData3 } from "../Moldes/ImageData";
// // import DomToImage from "dom-to-image";

// // const AlbumEditor: React.FC<{ template: Template }> = () => {
// //     const user = useSelector((state: RootState) => state.token.user);
// //     const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
// //     const [title, setTitle] = useState("Album Title");
// //     const [images, setImages] = useState<ImageData3[]>([]);
// //     const [selectedFrame, setSelectedFrame] = useState("rectangle");
// //     const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
// //     const albumRef = useRef<HTMLDivElement>(null);

// //     useEffect(() => {
// //         const handleKeyDown = (event: KeyboardEvent) => {
// //             if (event.key === "Backspace" && selectedImageId) {
// //                 deleteImage(selectedImageId);
// //             }
// //         };
// //         document.addEventListener("keydown", handleKeyDown);
// //         return () => document.removeEventListener("keydown", handleKeyDown);
// //     }, [selectedImageId]);

// //     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         const files = event.target.files;
// //         if (!files) return;

// //         const newImages = Array.from(files).map((file, index) => ({
// //             id: `${Date.now()}-${index}`,
// //             src: URL.createObjectURL(file),
// //             x: 100,
// //             y: 100,
// //             width: 200,
// //             height: 200,
// //             frame: selectedFrame,
// //             blur: 0,
// //             borderRadius: 0,
// //             opacity: 1,
// //             rotate: 0,
// //             contrast: 1,
// //             saturation: 1,
// //             grayscale: 0,
// //             brightness: 1,
// //             hue: 0,
// //         }));

// //         setImages((prevImages) => [...prevImages, ...newImages]);
// //     };

// //     const handleSaveCollage = async () => {
// //         if (!user?.id) {
// //             alert("Please log in before saving the collage!");
// //             return;
// //         }
// //         try {
// //             await SaveCollage(user.id, "f");
// //             alert("Collage saved successfully!");
// //         } catch (error) {
// //             console.error("Error saving collage:", error);
// //             alert("Failed to save the collage!");
// //         }
// //     };

// //     const handleDownloadAlbum = async () => {
// //         if (!albumRef.current) {
// //             alert("Error: Album reference is missing!");
// //             return;
// //         }
// //         try {
// //             const dataUrl = await DomToImage.toPng(albumRef.current, { quality: 1, bgcolor: "white" });
// //             downloadAlbum(dataUrl);
// //         } catch (error) {
// //             console.error("Error downloading album:", error);
// //         }
// //     };

// //     const deleteImage = (id: string) => {
// //         setImages((prevImages) => prevImages.filter((img) => img.id !== id));
// //     };

// //     return (
// //         <Container maxWidth={false} sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#121212", color: "white", padding: "2rem" }}>
// //             <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
// //                 Album Editor
// //             </Typography>
// //             <Grid container spacing={2} sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
// //                 <Grid item xs={2} sx={{ display: "flex", flexDirection: "column", minWidth: "250px" }}>
// //                     <AlbumSettings
// //                         title={title}
// //                         setTitle={setTitle}
// //                         backgroundColor={backgroundColor}
// //                         setBackgroundColor={setBackgroundColor}
// //                         selectedFrame={selectedFrame}
// //                         setSelectedFrame={setSelectedFrame}
// //                         handleImageUpload={handleImageUpload}
// //                         handleDownloadAlbum={handleDownloadAlbum}
// //                         handleSaveCollage={handleSaveCollage}
// //                         deleteImage={deleteImage}
// //                         selectedImage={images.find(img => img.id === selectedImageId)}
// //                         updateImage={(id, prop, value) => {
// //                             setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, [prop]: value } : img));
// //                         }}
// //                     />
// //                 </Grid>
// //                 <Grid item xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
// //                     <AlbumPreview
// //                         images={images}
// //                         setSelectedImageId={setSelectedImageId}
// //                         selectedImageId={selectedImageId}
// //                         selectedImage={images.find(img => img.id === selectedImageId)}
// //                         updateImage={(id, prop, value) => {
// //                             setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, [prop]: value } : img));
// //                         }}
// //                         albumRef={albumRef}
// //                         backgroundColor={backgroundColor}
// //                         deleteImage={deleteImage}
// //                     />
// //                 </Grid>
// //             </Grid>
// //         </Container>
// //     );
// // };

// // export default AlbumEditor;











// import React, { useState, useRef, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../Stores/Store";
// import { SaveCollage, downloadAlbum } from "./Services/CollageService";
// import AlbumPreview from "./AlbumPreview";
// import { Container, Typography, Grid } from "@mui/material";
// import { Template } from "../Moldes/Tamplate";
// import { ImageData3 } from "../Moldes/ImageData";
// import DomToImage from "dom-to-image";
// import AlbumSettings from "./AlbumSettings";

// const AlbumEditor: React.FC<{ template: Template }> = () => {
//     const user = useSelector((state: RootState) => state.token.user);
//     const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
//     const [title, setTitle] = useState<string>("Album Title");
//     const [images, setImages] = useState<ImageData3[]>([]);
//     const [selectedFrame, setSelectedFrame] = useState<string|null>("rectangle");
//     const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
//     const albumRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (event.key === "Backspace" && selectedImageId) {
//                 deleteImage(selectedImageId);
//             }
//         };
//         document.addEventListener("keydown", handleKeyDown);
//         return () => document.removeEventListener("keydown", handleKeyDown);
//     }, [selectedImageId]);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (!event.target.files) return;

//         const newImages = Array.from(event.target.files).map((file, index) => ({
//             id: `${Date.now()}-${index}`,
//             src: URL.createObjectURL(file),
//             x: 100,
//             y: 100,
//             width: 200,
//             height: 200,
//             frame: selectedFrame,
//             blur: 0,
//             borderRadius: 0,
//             opacity: 1,
//             rotate: 0,
//             contrast: 1,
//             saturation: 1,
//             grayscale: 0,
//             brightness: 1,
//             hue: 0,
//         }));

//         setImages((prev:any) => [...prev, ...newImages]);
//     };

//     const updateImage = (id: string, prop: string, value: any) => {
//         setImages((prevImages) =>
//             prevImages.map((img) =>
//                 img.id === id ? { ...img, [prop]: value } : img
//             )
//         );
//     };

//     const handleSaveCollage = async () => {
//         if (!user?.id) {
//             alert("Please log in before saving the collage!");
//             return;
//         }
//         try {
//             await SaveCollage(user.id, "f");
//             alert("Collage saved successfully!");
//         } catch (error) {
//             console.error("Error saving collage:", error);
//             alert("Failed to save the collage!");
//         }
//     };

//     const handleDownloadAlbum =  async () => {
//         console.log("Downloading album..."); // הדפסת הודעה לקונסול
        
//         if (!albumRef.current) {
//             alert("Error: Album reference is missing!");
//             return;
//         }
//         try {
//             const dataUrl = await DomToImage.toPng(albumRef.current, { quality: 1, bgcolor: "white" });
//             console.log("Generated Data URL: ", dataUrl); // הדפסה לצורך דיבוג
//             downloadAlbum(dataUrl);  // קריאה לפונקציה שהוספנו ב־CollageService
//         } catch (error) {
//             console.error("Error downloading album:", error);
//         }
//     };
    

//     const deleteImage = (id: string) => {
//         setImages((prev) => prev.filter((img) => img.id !== id));
//     };

//     return (
//         <Container
        
//             maxWidth={false}
//             sx={{
//                 width: "100vw",
//                 height: "100vh",
//                 display: "flex",
//                 flexDirection: "column",
//                 backgroundColor: "#121212",
//                 color: "white",
//                 padding: "2rem",
//             }}
//         >
//             <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
//                 Album Editor
//             </Typography>
//             <Grid container spacing={2} sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
//                 <Grid item xs={2} sx={{ display: "flex", flexDirection: "column", minWidth: "250px" }}>
//                     <AlbumSettings
                    
//                         title={title}
//                         setTitle={setTitle}
//                         backgroundColor={backgroundColor}
//                         setBackgroundColor={setBackgroundColor}
//                         selectedFrame={selectedFrame}
//                         setSelectedFrame={setSelectedFrame}
//                         handleImageUpload={handleImageUpload}
//                         handleDownloadAlbum={handleDownloadAlbum} 
//                         handleSaveCollage={handleSaveCollage}
//                         deleteImage={deleteImage}
//                         selectedImage={images.find((img) => img.id === selectedImageId)}
//                         updateImage={updateImage}
//                         userId={user?.id ?? null}
//                     />
//                 </Grid>
//                 <Grid  item xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
//                     <AlbumPreview 
//                         images={images}
//                         setSelectedImageId={setSelectedImageId}
//                         selectedImageId={selectedImageId}
//                         selectedImage={images.find((img) => img.id === selectedImageId)}
//                         updateImage={updateImage}
//                         albumRef={albumRef}
//                         backgroundColor={backgroundColor}
//                         deleteImage={deleteImage}
//                     />
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default AlbumEditor;









// import React, { useState, useRef, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../Stores/Store";
// import { SaveCollage, downloadAlbum } from "./Services/CollageService";
// import AlbumPreview from "./AlbumPreview";
// import { Container, Typography, Grid } from "@mui/material";
// import { Template } from "../Moldes/Tamplate";
// import { ImageData3 } from "../Moldes/ImageData";
// import DomToImage from "dom-to-image";
// import AlbumSettings from "./AlbumSettings";
// import ChatBot from "./ChatBot";

// const AlbumEditor: React.FC<{ template: Template }> = () => {
//     const user = useSelector((state: RootState) => state.token.user);
//     const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
//     const [title, setTitle] = useState<string>("Album Title");
//     const [images, setImages] = useState<ImageData3[]>([]);
//     const [selectedFrame, setSelectedFrame] = useState<string | null>("rectangle");
//     const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
//     const albumRef = useRef<HTMLDivElement | null>(null);
//   const [isChatBotOpen, setIsChatBotOpen] = useState(false);

//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (event.key === "Backspace" && selectedImageId) {
//                 deleteImage(selectedImageId);
//             }
//         };
//         document.addEventListener("keydown", handleKeyDown);
//         return () => document.removeEventListener("keydown", handleKeyDown);
//     }, [selectedImageId]);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (!event.target.files) return;

//         const newImages = Array.from(event.target.files).map((file, index) => ({
//             id: `${Date.now()}-${index}`,
//             src: URL.createObjectURL(file),
//             x: 100,
//             y: 100,
//             width: 200,
//             height: 200,
//             frame: selectedFrame,
//             blur: 0,
//             borderRadius: 0,
//             opacity: 1,
//             rotate: 0,
//             contrast: 1,
//             saturation: 1,
//             grayscale: 0,
//             brightness: 1,
//             hue: 0,
//         }));

//         setImages((prev: any) => [...prev, ...newImages]);
//     };

//     const updateImage = (id: string, prop: string, value: any) => {
//         setImages((prevImages) =>
//             prevImages.map((img) =>
//                 img.id === id ? { ...img, [prop]: value } : img
//             )
//         );
//     };

//     const handleSaveCollage = async () => {
//         if (!user?.id) {
//             alert("Please log in before saving the collage!");
//             return;
//         }
//         try {
//             await SaveCollage(user.id, "f");
//             alert("Collage saved successfully!");
//         } catch (error) {
//             console.error("Error saving collage:", error);
//             alert("Failed to save the collage!");
//         }
//     };

//     const handleDownloadAlbum = async () => {
//         console.log("Downloading album..."); // הדפסת הודעה לקונסול

//         if (!albumRef.current) {
//             alert("Error: Album reference is missing!");
//             return;
//         }
//         try {
//             const dataUrl = await DomToImage.toPng(albumRef.current, { quality: 1, bgcolor: "white" });
//             console.log("Generated Data URL: ", dataUrl); // הדפסה לצורך דיבוג
//             downloadAlbum(dataUrl);  // קריאה לפונקציה שהוספנו ב־CollageService
//         } catch (error) {
//             console.error("Error downloading album:", error);
//         }
//     };

//     const deleteImage = (id: string) => {
//         setImages((prev) => prev.filter((img) => img.id !== id));
//     };

//     return (
//         <Container
//             maxWidth={false}
//             sx={{
//                 width: "100vw",
//                 height: "100vh",
//                 display: "flex",
//                 flexDirection: "column",
//                 backgroundColor: "#121212",
//                 color: "white",
//                 padding: "2rem",
//             }}
//         >
//              <button
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
//         </button>
//             <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
//                 Album Editor
//             </Typography>
//             <Grid container spacing={2} sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
//                 {/* צד שמאל - הגדרות ועריכה */}
//                 <Grid
//                     item
//                     xs={1} // 3/12 תופס 25% מהחלל
//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         minWidth: "250px",
//                         backgroundColor: "#2a2a2a", // צבע רקע עבור הגדרות
//                         padding: "1rem",
//                         borderRadius: "10px",
//                     }}
//                 >
//                     <AlbumSettings
//                         title={title}
//                         setTitle={setTitle}
//                         backgroundColor={backgroundColor}
//                         setBackgroundColor={setBackgroundColor}
//                         selectedFrame={selectedFrame}
//                         setSelectedFrame={setSelectedFrame}
//                         handleImageUpload={handleImageUpload}
//                         handleDownloadAlbum={handleDownloadAlbum}
//                         handleSaveCollage={handleSaveCollage}
//                         deleteImage={deleteImage}
//                         selectedImage={images.find((img) => img.id === selectedImageId)}
//                         updateImage={updateImage}
//                         userId={user?.id ?? null}
//                     />
//                 </Grid>

//                 {/* צד ימין - תצוגה של האלבום */}
//                 <Grid
//                     item
//                     xs={9} // 9/12 תופס 75% מהחלל
//                     sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         padding: "1rem",
//                         backgroundColor: backgroundColor, // רקע אלבום משתנה לפי הצבע שנבחר
//                         borderRadius: "10px",
//                     }}
//                 >
//                     <AlbumPreview
//                         images={images}
//                         setSelectedImageId={setSelectedImageId}
//                         selectedImageId={selectedImageId}
//                         selectedImage={images.find((img) => img.id === selectedImageId)}
//                         updateImage={updateImage}
//                         albumRef={albumRef}
//                         backgroundColor={backgroundColor}
//                         deleteImage={deleteImage}
//                     />
//                 </Grid>
//                  {/* כפתור פתיחת הצ'אטבוט */}
       
//             </Grid>
//             <ChatBot 
//         isOpen={isChatBotOpen} 
//         onClose={() => setIsChatBotOpen(false)} 
//       />
//         </Container>
//     );
// };

// export default AlbumEditor;










import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Stores/Store";
import { SaveCollage, downloadAlbum } from "./Services/CollageService";
import AlbumPreview from "./AlbumPreview";
import { Container, Typography, Grid } from "@mui/material";
import { Template } from "../Moldes/Tamplate";
import { ImageData3 } from "../Moldes/ImageData";
import DomToImage from "dom-to-image";
import AlbumSettings from "./AlbumSettings";

const AlbumEditor: React.FC<{ template: Template }> = () => {
    const user = useSelector((state: RootState) => state.token.user);
    const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null); // הוספת state לתמונת רקע
    const [title, setTitle] = useState<string>("Album Title");
    const [images, setImages] = useState<ImageData3[]>([]);
    const [selectedFrame, setSelectedFrame] = useState<string | null>("rectangle");
    const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
    const albumRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Backspace" && selectedImageId) {
                deleteImage(selectedImageId);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageId]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const newImages = Array.from(event.target.files).map((file, index) => ({
            id: `${Date.now()}-${index}`,
            src: URL.createObjectURL(file),
            x: 100,
            y: 100,
            width: 200,
            height: 200,
            frame: selectedFrame,
            blur: 0,
            borderRadius: 0,
            opacity: 1,
            rotate: 0,
            contrast: 1,
            saturation: 1,
            grayscale: 0,
            brightness: 1,
            hue: 0,
        }));

        setImages((prev: any) => [...prev, ...newImages]);
    };

    const updateImage = (id: string, prop: string, value: any) => {
        setImages((prevImages) =>
            prevImages.map((img) =>
                img.id === id ? { ...img, [prop]: value } : img
            )
        );
    };

    const handleSaveCollage = async () => {
        if (!user?.id) {
            alert("Please log in before saving the collage!");
            return;
        }
        try {
            await SaveCollage(user.id, "f");
            alert("Collage saved successfully!");
        } catch (error) {
            console.error("Error saving collage:", error);
            alert("Failed to save the collage!");
        }
    };

    const handleDownloadAlbum = async () => {
        console.log("Downloading album...");

        if (!albumRef.current) {
            alert("Error: Album reference is missing!");
            return;
        }
        try {
            const dataUrl = await DomToImage.toPng(albumRef.current, { quality: 1, bgcolor: "white" });
            console.log("Generated Data URL: ", dataUrl);
            downloadAlbum(dataUrl);
        } catch (error) {
            console.error("Error downloading album:", error);
        }
    };

    const deleteImage = (id: string) => {
        setImages((prev) => prev.filter((img) => img.id !== id));
    };

    // פונקציה לבחירת תמונת רקע
    const handleBackgroundImageSelect = (bgImage: string) => {
        setBackgroundImage(bgImage);
        setBackgroundColor("#FFFFFF"); // איפוס צבע הרקע כאשר נבחרת תמונת רקע
    };

    // פונקציה למחיקת תמונת הרקע
    const clearBackgroundImage = () => {
        setBackgroundImage(null);
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#121212",
                color: "white",
                padding: "2rem",
            }}
        >
            <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
                Album Editor
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
                {/* צד שמאל - הגדרות ועריכה */}
                <Grid
                    item
                    xs={1}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "250px",
                        backgroundColor: "#2a2a2a",
                        padding: "1rem",
                        borderRadius: "10px",
                    }}
                >
                    <AlbumSettings
                        title={title}
                        setTitle={setTitle}
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        backgroundImage={backgroundImage}
                        setBackgroundImage={handleBackgroundImageSelect}
                        clearBackgroundImage={clearBackgroundImage}
                        selectedFrame={selectedFrame}
                        setSelectedFrame={setSelectedFrame}
                        handleImageUpload={handleImageUpload}
                        handleDownloadAlbum={handleDownloadAlbum}
                        handleSaveCollage={handleSaveCollage}
                        deleteImage={deleteImage}
                        selectedImage={images.find((img) => img.id === selectedImageId)}
                        updateImage={updateImage}
                        userId={user?.id ?? null}
                    />
                </Grid>

                {/* צד ימין - תצוגה של האלבום */}
                <Grid
                    item
                    xs={9}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1rem",
                        backgroundColor: backgroundImage ? "transparent" : backgroundColor,
                        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "10px",
                    }}
                >
                    <AlbumPreview
                        images={images}
                        setSelectedImageId={setSelectedImageId}
                        selectedImageId={selectedImageId}
                        selectedImage={images.find((img) => img.id === selectedImageId)}
                        updateImage={updateImage}
                        albumRef={albumRef}
                        backgroundColor={backgroundColor}
                        backgroundImage={backgroundImage}
                        deleteImage={deleteImage}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AlbumEditor;