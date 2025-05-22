// // // // import React, { useEffect, useState } from "react";
// // // // import { Slider, Typography, Box, IconButton, Tooltip, Button } from "@mui/material";
// // // // import { ColorLens, Save, Download, AddPhotoAlternate } from "@mui/icons-material";
// // // // import { SaveCollage } from "./Services/CollageService";
// // // // import { ImageData3 } from "../Moldes/ImageData";
// // // // interface AlbumSettingsProps {
// // // //     title: string;
// // // //     setTitle: React.Dispatch<React.SetStateAction<string>>;
// // // //     backgroundColor: string;
// // // //     setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
// // // //     selectedFrame: string | null; // Added selectedFrame property
// // // //     setSelectedFrame: React.Dispatch<React.SetStateAction<string | null>>;
// // // //     handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
// // // //     handleDownloadAlbum: () => Promise<void>;
// // // //     handleSaveCollage: () => void;
// // // //     deleteImage: (id: string) => void;
// // // //     selectedImage: ImageData3 | undefined;
// // // //     updateImage: (id: string, prop: string, value: any) => void;
// // // //     userId: string | null;
// // // // }

// // // // const AlbumSettings: React.FC<AlbumSettingsProps> = ({
// // // //     title,
// // // //     setTitle,
// // // //     backgroundColor,
// // // //     setBackgroundColor,
// // // //     handleSaveCollage,
// // // //     handleDownloadAlbum,
// // // //     selectedImage,
// // // //     updateImage,
// // // //     deleteImage,
// // // //     handleImageUpload,
// // // //     userId,
// // // //     setSelectedFrame,
// // // // }) => {
// // // //     // const handleDownloadAlbums = async () => {
// // // //     //     console.log("Downloading album..."); // הדפסת הודעה לקונסול

// // // //     //     setLoading(true);
// // // //     //     await handleDownloadAlbum();
// // // //     //     // const dataUrl = await DomToImage.toPng(albumRef.current, { quality: 1, bgcolor: "white" });
// // // //     //     // setLoading(false);
// // // //     //     // downloadAlbum(dataUrl);
// // // //     // };

// // // //     // const downloadAlbum = async (dataUrl: any) => {
// // // //     //     try {
// // // //     //         console.log("Download initiated:", dataUrl);  // הדפסת dataUrl
// // // //     //         if (!dataUrl) {
// // // //     //             throw new Error("No dataUrl available to download.");
// // // //     //         }
// // // //     //         const link = document.createElement("a");
// // // //     //         link.href = dataUrl;
// // // //     //         link.download = "album.png";
// // // //     //         document.body.appendChild(link);
// // // //     //         link.click();
// // // //     //         document.body.removeChild(link);
// // // //     //     } catch (error) {
// // // //     //         console.error("❌ Error downloading:", error);
// // // //     //     }
// // // //     // };

// // // //     const handleDownload = async () => {
// // // //         try {
// // // //           await handleDownloadAlbum();
// // // //         } catch (error) {
// // // //           console.error("Error downloading album:", error);
// // // //         }
// // // //       };

// // // //     const [loading, setLoading] = useState(false);

// // // //     // Function to handle saving the collage
// // // //     const handleSave = async () => {
// // // //         if (userId) {
// // // //             await SaveCollage(userId, title);
// // // //         }
// // // //     };

// // // //     // Handle keyboard events
// // // //     useEffect(() => {
// // // //         // אם יש תמונה נבחרת, נאזין למקש backspace
// // // //         const handleKeyDown = (event: KeyboardEvent) => {
// // // //             if (event.key === "Backspace" && selectedImage) {
// // // //                 deleteImage(selectedImage.id);
// // // //             }
// // // //         };

// // // //         // הוספת מאזין לאירוע keydown
// // // //         window.addEventListener("keydown", handleKeyDown);

// // // //         // ניקוי המאזין כאשר הקומפוננטה מתפרקת
// // // //         return () => {
// // // //             window.removeEventListener("keydown", handleKeyDown);
// // // //         };
// // // //     }, [selectedImage, deleteImage]); // מאזינים לשינויים בתמונה שנבחרה

// // // //     return (
// // // //         <Box p={3} sx={{ background: "#333", borderRadius: "10px", color: "white", width: "100%" }}>
// // // //             <Typography variant="h6" gutterBottom>Album Settings</Typography>

// // // //             {/* שינוי צבע רקע */}
// // // //             <Tooltip title="Change Background Color">
// // // //                 <IconButton onClick={() => document.getElementById("bgColorInput")?.click()}>
// // // //                     <ColorLens sx={{ color: "#ff4081" }} />
// // // //                 </IconButton>
// // // //             </Tooltip>
// // // //             <input
// // // //                 id="bgColorInput"
// // // //                 type="color"
// // // //                 style={{ display: "none" }}
// // // //                 value={backgroundColor}
// // // //                 onChange={(e) => setBackgroundColor(e.target.value)}
// // // //             />

// // // //             {/* העלאת תמונה */}
// // // //             <Tooltip title="Upload Image">
// // // //                 <IconButton component="label">
// // // //                     <AddPhotoAlternate sx={{ color: "#4caf50" }} />
// // // //                     <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
// // // //                 </IconButton>
// // // //             </Tooltip>

// // // //             {/* טשטוש ועיגול פינות רק לתמונה שנבחרה */}
// // // //             {selectedImage && (
// // // //                 <>
// // // //                     <Typography>Blur</Typography>
// // // //                     <Slider
// // // //                         value={selectedImage.blur}
// // // //                         onChange={(e, val) => updateImage(selectedImage.id, "blur", val)}
// // // //                         min={0} max={10}
// // // //                     />
// // // //                     <Typography>Border Radius</Typography>
// // // //                     <Slider
// // // //                         value={selectedImage.borderRadius}
// // // //                         onChange={(e, val) => updateImage(selectedImage.id, "borderRadius", val)}
// // // //                         min={0} max={50}
// // // //                     />
// // // //                 </>
// // // //             )}

// // // //             {/* כפתורי שמירה והורדה */}
// // // //             <Box mt={2} display="flex" justifyContent="space-between">
// // // //                 <Button variant="contained" color="primary" startIcon={<Save />} onClick={handleSaveCollage}>
// // // //                     Save
// // // //                 </Button>
// // // //                 <Button variant="contained" color="secondary" startIcon={<Download />} onClick={handleDownload}>
// // // //                     Download
// // // //                 </Button>
// // // //             </Box>
// // // //         </Box>
// // // //     );
// // // // };

// // // // export default AlbumSettings;





// // // import React, { useEffect, useState } from "react";
// // // import { Slider, Box, IconButton, Tooltip, Button } from "@mui/material";
// // // import { ColorLens, Save, Download, AddPhotoAlternate } from "@mui/icons-material";
// // // import { SaveCollage } from "./Services/CollageService";
// // // import { ImageData3 } from "../Moldes/ImageData";

// // // interface AlbumSettingsProps {
// // //     title: string;
// // //     setTitle: React.Dispatch<React.SetStateAction<string>>;
// // //     backgroundColor: string;
// // //     setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
// // //     selectedFrame: string | null;
// // //     setSelectedFrame: React.Dispatch<React.SetStateAction<string | null>>;
// // //     handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
// // //     handleDownloadAlbum: () => Promise<void>;
// // //     handleSaveCollage: () => void;
// // //     deleteImage: (id: string) => void;
// // //     selectedImage: ImageData3 | undefined;
// // //     updateImage: (id: string, prop: string, value: any) => void;
// // //     userId: string | null;
// // // }

// // // const AlbumSettings: React.FC<AlbumSettingsProps> = ({
// // //     title,
// // //     setTitle,
// // //     backgroundColor,
// // //     setBackgroundColor,
// // //     handleSaveCollage,
// // //     handleDownloadAlbum,
// // //     selectedImage,
// // //     updateImage,
// // //     deleteImage,
// // //     handleImageUpload,
// // //     userId,
// // //     setSelectedFrame,
// // // }) => {
// // //     const [loading, setLoading] = useState(false);

// // //     const handleDownload = async () => {
// // //         try {
// // //             await handleDownloadAlbum();
// // //         } catch (error) {
// // //             console.error("Error downloading album:", error);
// // //         }
// // //     };

// // //     const handleSave = async () => {
// // //         if (userId) {
// // //             await SaveCollage(userId, title);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         const handleKeyDown = (event: KeyboardEvent) => {
// // //             if (event.key === "Backspace" && selectedImage) {
// // //                 deleteImage(selectedImage.id);
// // //             }
// // //         };

// // //         window.addEventListener("keydown", handleKeyDown);

// // //         return () => {
// // //             window.removeEventListener("keydown", handleKeyDown);
// // //         };
// // //     }, [selectedImage, deleteImage]);

// // //     return (
// // //         <Box p={3} sx={{ background: "#333", borderRadius: "10px", color: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
// // //             {/* Background Color Selector */}
// // //             <Tooltip title="Change Background Color">
// // //                 <IconButton onClick={() => document.getElementById("bgColorInput")?.click()} sx={{ marginBottom: 2 }}>
// // //                     <ColorLens sx={{ color: "#ff4081" }} />
// // //                 </IconButton>
// // //             </Tooltip>
// // //             <input
// // //                 id="bgColorInput"
// // //                 type="color"
// // //                 style={{ display: "none" }}
// // //                 value={backgroundColor}
// // //                 onChange={(e) => setBackgroundColor(e.target.value)}
// // //             />

// // //             {/* Image Upload */}
// // //             <Tooltip title="Upload Image">
// // //                 <IconButton component="label" sx={{ marginBottom: 2 }}>
// // //                     <AddPhotoAlternate sx={{ color: "#4caf50" }} />
// // //                     <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
// // //                 </IconButton>
// // //             </Tooltip>

// // //             {/* Image Manipulation Controls for Selected Image */}
// // //             {selectedImage && (
// // //                 <>
// // //                     {/* Blur Control */}
// // //                     <Slider
// // //                         value={selectedImage.blur}
// // //                         onChange={(e, val) => updateImage(selectedImage.id, "blur", val)}
// // //                         min={0} max={10}
// // //                         sx={{ marginBottom: 2 }}
// // //                     />

// // //                     {/* Border Radius Control */}
// // //                     <Slider
// // //                         value={selectedImage.borderRadius}
// // //                         onChange={(e, val) => updateImage(selectedImage.id, "borderRadius", val)}
// // //                         min={0} max={50}
// // //                         sx={{ marginBottom: 2 }}
// // //                     />
// // //                 </>
// // //             )}

// // //             {/* Action Buttons */}
// // //             <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 2 }}>
// // //                 <Button
// // //                     variant="contained"
// // //                     color="primary"
// // //                     startIcon={<Save />}
// // //                     onClick={handleSave}
// // //                     sx={{ marginBottom: 2 }}
// // //                 />
// // //                 <Button
// // //                     variant="contained"
// // //                     color="secondary"
// // //                     startIcon={<Download />}
// // //                     onClick={handleDownload}
// // //                     sx={{ marginBottom: 2 }}
// // //                 />
// // //             </Box>
// // //         </Box>
// // //     );
// // // };

// // // export default AlbumSettings;









// // import React, { useEffect, useState } from "react";
// // import { Slider, Box, IconButton, Tooltip, Button, CircularProgress, Snackbar } from "@mui/material";
// // import { ColorLens, Save, Download, AddPhotoAlternate } from "@mui/icons-material";
// // import { SaveCollage } from "./Services/CollageService";
// // import { ImageData3 } from "../Moldes/ImageData";
// // import { Alert } from "@mui/material";

// // interface AlbumSettingsProps {
// //     title: string;
// //     setTitle: React.Dispatch<React.SetStateAction<string>>;
// //     backgroundColor: string;
// //     setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
// //     selectedFrame: string | null;
// //     setSelectedFrame: React.Dispatch<React.SetStateAction<string | null>>;
// //     handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
// //     handleDownloadAlbum: () => Promise<void>;
// //     handleSaveCollage: () => void;
// //     deleteImage: (id: string) => void;
// //     selectedImage: ImageData3 | undefined;
// //     updateImage: (id: string, prop: string, value: any) => void;
// //     userId: string | null;
// // }

// // const AlbumSettings: React.FC<AlbumSettingsProps> = ({
// //     title,
// //     setTitle,
// //     backgroundColor,
// //     setBackgroundColor,
// //     handleSaveCollage,
// //     handleDownloadAlbum,
// //     selectedImage,
// //     updateImage,
// //     deleteImage,
// //     handleImageUpload,
// //     userId,
// //     setSelectedFrame,
// // }) => {
// //     const [loading, setLoading] = useState(false);
// //     const [snackOpen, setSnackOpen] = useState(false);
// //     const [snackMessage, setSnackMessage] = useState("");

// //     const handleDownload = async () => {
// //         setLoading(true); // התחלת טעינה
// //         try {
// //             await handleDownloadAlbum();
// //             setSnackMessage("Album downloaded successfully!");
// //             setSnackOpen(true);
// //         } catch (error) {
// //             setSnackMessage("Error downloading album.");
// //             setSnackOpen(true);
// //         } finally {
// //             setLoading(false); // סיום טעינה
// //         }
// //     };

// //     const handleSave = async () => {
// //         if (!userId) {
// //             setSnackMessage("Please log in to save the collage.");
// //             setSnackOpen(true);
// //             return;
// //         }

// //         setLoading(true);
// //         try {
// //             await SaveCollage(userId, title);
// //             setSnackMessage("Collage saved successfully!");
// //             setSnackOpen(true);
// //         } catch (error) {
// //             setSnackMessage("Error saving collage.");
// //             setSnackOpen(true);
// //         } finally {
// //             setLoading(false); // סיום טעינה
// //         }
// //     };

// //     useEffect(() => {
// //         const handleKeyDown = (event: KeyboardEvent) => {
// //             if (event.key === "Backspace" && selectedImage) {
// //                 deleteImage(selectedImage.id);
// //             }
// //         };

// //         window.addEventListener("keydown", handleKeyDown);

// //         return () => {
// //             window.removeEventListener("keydown", handleKeyDown);
// //         };
// //     }, [selectedImage, deleteImage]);

// //     return (
// //         <Box p={3} sx={{ background: "#333", borderRadius: "10px", color: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
// //             {/* Background Color Selector */}
// //             <Tooltip title="Change Background Color">
// //                 <IconButton onClick={() => document.getElementById("bgColorInput")?.click()} sx={{ marginBottom: 2 }}>
// //                     <ColorLens sx={{ color: "#ff4081" }} />
// //                 </IconButton>
// //             </Tooltip>
// //             <input
// //                 id="bgColorInput"
// //                 type="color"
// //                 style={{ display: "none" }}
// //                 value={backgroundColor}
// //                 onChange={(e) => setBackgroundColor(e.target.value)}
// //             />

// //             {/* Image Upload */}
// //             <Tooltip title="Upload Image">
// //                 <IconButton component="label" sx={{ marginBottom: 2 }}>
// //                     <AddPhotoAlternate sx={{ color: "#4caf50" }} />
// //                     <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
// //                 </IconButton>
// //             </Tooltip>

// //             {/* Image Manipulation Controls for Selected Image */}
// //             {selectedImage && (
// //                 <>
// //                     <Slider
// //                         value={selectedImage.blur}
// //                         onChange={(e, val) => updateImage(selectedImage.id, "blur", val)}
// //                         min={0} max={10}
// //                         sx={{ marginBottom: 2 }}
// //                     />
// //                     <Slider
// //                         value={selectedImage.borderRadius}
// //                         onChange={(e, val) => updateImage(selectedImage.id, "borderRadius", val)}
// //                         min={0} max={50}
// //                         sx={{ marginBottom: 2 }}
// //                     />
// //                 </>
// //             )}

// //             {/* Action Buttons */}
// //             <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 2 }}>
// //                 <Button
// //                 title="Save"
// //                     variant="contained"
// //                     color="primary"
// //                     startIcon={<Save />}
// //                     onClick={handleSave}
// //                     sx={{ marginBottom: 2 }}
// //                     disabled={loading}
// //                 >
// //                     {/* {loading ? <CircularProgress size={24} color="inherit" /> : "Save"} */}
// //                 </Button>
// //                 <Button
// //                 title="Download"
// //                     variant="contained"
// //                     color="secondary"
// //                     startIcon={<Download />}
// //                     onClick={handleDownload}
// //                     sx={{ marginBottom: 2 }}
// //                     disabled={loading}
// //                 >
// //                     {/* {loading ? <CircularProgress size={24} color="inherit" /> : "Download"} */}
// //                 </Button>
// //             </Box>

// //             {/* Snackbar for Notifications */}
// //             <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
// //                 <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
// //                     {snackMessage}
// //                 </Alert>
// //             </Snackbar>
// //         </Box>
// //     );
// // };

// // export default AlbumSettings;











// import React, { useEffect, useState } from "react";
// import { Slider, Box, IconButton, Tooltip, Button, CircularProgress, Snackbar } from "@mui/material";
// import { ColorLens, Save, Download, AddPhotoAlternate } from "@mui/icons-material";
// import { SaveCollage } from "./Services/CollageService";
// import { ImageData3 } from "../Moldes/ImageData";
// import { Alert } from "@mui/material";

// interface AlbumSettingsProps {
//     title: string;
//     setTitle: React.Dispatch<React.SetStateAction<string>>;
//     backgroundColor: string;
//     setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
//     selectedFrame: string | null;
//     setSelectedFrame: React.Dispatch<React.SetStateAction<string | null>>;
//     handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     handleDownloadAlbum: () => Promise<void>;
//     handleSaveCollage: () => void;
//     deleteImage: (id: string) => void;
//     selectedImage: ImageData3 | undefined;
//     updateImage: (id: string, prop: string, value: any) => void;
//     userId: string | null;
// }

// const AlbumSettings: React.FC<AlbumSettingsProps> = ({
//     title,
//     setTitle,
//     backgroundColor,
//     setBackgroundColor,
//     handleSaveCollage,
//     handleDownloadAlbum,
//     selectedImage,
//     updateImage,
//     deleteImage,
//     handleImageUpload,
//     userId,
//     setSelectedFrame,
// }) => {
//     const [loading, setLoading] = useState(false);
//     const [snackOpen, setSnackOpen] = useState(false);
//     const [snackMessage, setSnackMessage] = useState("");

//     const handleDownload = async () => {
//         setLoading(true); // התחלת טעינה
//         try {
//             await handleDownloadAlbum();
//             setSnackMessage("Album downloaded successfully!");
//             setSnackOpen(true);
//         } catch (error) {
//             setSnackMessage("Error downloading album.");
//             setSnackOpen(true);
//         } finally {
//             setLoading(false); // סיום טעינה
//         }
//     };

//     const handleSave = async () => {
//         if (!userId) {
//             setSnackMessage("Please log in to save the collage.");
//             setSnackOpen(true);
//             return;
//         }

//         setLoading(true);
//         try {
//             await SaveCollage(userId, title);
//             setSnackMessage("Collage saved successfully!");
//             setSnackOpen(true);
//         } catch (error) {
//             setSnackMessage("Error saving collage.");
//             setSnackOpen(true);
//         } finally {
//             setLoading(false); // סיום טעינה
//         }
//     };

//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (event.key === "Backspace" && selectedImage) {
//                 deleteImage(selectedImage.id);
//             }
//         };

//         window.addEventListener("keydown", handleKeyDown);

//         return () => {
//             window.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [selectedImage, deleteImage]);

//     return (
//         <Box p={2} sx={{ background: "#333", borderRadius: "10px", color: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
//             {/* Background Color Selector */}
//             <Tooltip title="Change Background Color">
//                 <IconButton onClick={() => document.getElementById("bgColorInput")?.click()} sx={{ marginBottom: 2 }}>
//                     <ColorLens sx={{ color: "#ff4081" }} />
//                 </IconButton>
//             </Tooltip>
//             <input
//                 id="bgColorInput"
//                 type="color"
//                 style={{ display: "none" }}
//                 value={backgroundColor}
//                 onChange={(e) => setBackgroundColor(e.target.value)}
//             />

//             {/* Image Upload */}
//             <Tooltip title="Upload Image">
//                 <IconButton component="label" sx={{ marginBottom: 2 }}>
//                     <AddPhotoAlternate sx={{ color: "#4caf50" }} />
//                     <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
//                 </IconButton>
//             </Tooltip>

//             {/* Image Manipulation Controls for Selected Image */}
//             {selectedImage && (
//                 <>
//                     <Slider
//                         value={selectedImage.blur}
//                         onChange={(e, val) => updateImage(selectedImage.id, "blur", val)}
//                         min={0} max={10}
//                         sx={{ marginBottom: 2 }}
//                     />
//                     <Slider
//                         value={selectedImage.borderRadius}
//                         onChange={(e, val) => updateImage(selectedImage.id, "borderRadius", val)}
//                         min={0} max={50}
//                         sx={{ marginBottom: 2 }}
//                     />
//                 </>
//             )}

//             {/* Action Buttons */}
//             <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 2 }}>
//                 <Tooltip title="Save Collage">
//                     <IconButton
//                         color="primary"
//                         onClick={handleSave}
//                         sx={{
//                             marginBottom: 2,
//                             background: "linear-gradient(45deg, #ff4081, #ff9100)", // סגנון דמוי כפתור צבע
//                             padding: "0.5rem",
//                             borderRadius: "8px",
//                             color: "white",
//                             transition: "all 0.3s ease",
//                             '&:hover': { background: "linear-gradient(45deg, #ff9100, #ff4081)" },
//                         }}
//                         disabled={loading}
//                     >
//                         <Save />
//                     </IconButton>
//                 </Tooltip>
//                 <Tooltip title="Download Album">
//                     <IconButton
//                         color="secondary"
//                         onClick={handleDownload}
//                         sx={{
//                             marginBottom: 2,
//                             background: "linear-gradient(45deg, #2196f3, #21cbf3)", // סגנון דמוי כפתור צבע
//                             padding: "0.5rem",
//                             borderRadius: "8px",
//                             color: "white",
//                             transition: "all 0.3s ease",
//                             '&:hover': { background: "linear-gradient(45deg, #21cbf3, #2196f3)" },
//                         }}
//                         disabled={loading}
//                     >
//                         <Download />
//                     </IconButton>
//                 </Tooltip>
//             </Box>

//             {/* Snackbar for Notifications */}
//             <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
//                 <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
//                     {snackMessage}
//                 </Alert>
//             </Snackbar>
//         </Box>
//     );
// };

// export default AlbumSettings;




















import React, { useEffect, useState } from "react";
import { Slider, Box, IconButton, Tooltip, Snackbar } from "@mui/material";
import { ColorLens, Save, Download, AddPhotoAlternate } from "@mui/icons-material";
import { SaveCollage } from "./Services/CollageService";
import { ImageData3 } from "../Moldes/ImageData";
import { Alert } from "@mui/material";

interface AlbumSettingsProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    backgroundColor: string;
    setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
    selectedFrame: string | null;
    setSelectedFrame: React.Dispatch<React.SetStateAction<string | null>>;
    handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDownloadAlbum: () => Promise<void>;
    handleSaveCollage: () => void;
    deleteImage: (id: string) => void;
    selectedImage: ImageData3 | undefined;
    updateImage: (id: string, prop: string, value: any) => void;
    userId: string | null;
}

const AlbumSettings: React.FC<AlbumSettingsProps> = ({
    title,
    setTitle,
    backgroundColor,
    setBackgroundColor,
    handleSaveCollage,
    handleDownloadAlbum,
    selectedImage,
    updateImage,
    deleteImage,
    handleImageUpload,
    userId,
    setSelectedFrame,
}) => {
    const [loading, setLoading] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const handleDownload = async () => {
        setLoading(true); // התחלת טעינה
        try {
            await handleDownloadAlbum();
            setSnackMessage("Album downloaded successfully!");
            setSnackOpen(true);
        } catch (error) {
            setSnackMessage("Error downloading album.");
            setSnackOpen(true);
        } finally {
            setLoading(false); // סיום טעינה
        }
    };

    const handleSave = async () => {
        if (!userId) {
            setSnackMessage("Please log in to save the collage.");
            setSnackOpen(true);
            return;
        }

        setLoading(true);
        try {
            await SaveCollage(userId, title);
            setSnackMessage("Collage saved successfully!");
            setSnackOpen(true);
        } catch (error) {
            setSnackMessage("Error saving collage.");
            setSnackOpen(true);
        } finally {
            setLoading(false); // סיום טעינה
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Backspace" && selectedImage) {
                deleteImage(selectedImage.id);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage, deleteImage]);

    return (
        <Box p={3} sx={{ background: "#333", borderRadius: "10px", color: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Background Color Selector */}
            <Tooltip title="Change Background Color">
                <IconButton onClick={() => document.getElementById("bgColorInput")?.click()} sx={{ marginBottom: 2 }}>
                    <ColorLens sx={{ color: "#ff4081" }} />
                </IconButton>
            </Tooltip>
            <input
                id="bgColorInput"
                type="color"
                style={{ display: "none" }}
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
            />

            {/* Image Upload */}
            <Tooltip title="Upload Image">
                <IconButton component="label" sx={{ marginBottom: 2 }}>
                    <AddPhotoAlternate sx={{ color: "#4caf50" }} />
                    <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                </IconButton>
            </Tooltip>

            {/* Image Manipulation Controls for Selected Image */}
            {selectedImage && (
                <>
                    <Slider
                        value={selectedImage.blur}
                        onChange={(e, val) => updateImage(selectedImage.id, "blur", val)}
                        min={0} max={10}
                        sx={{ marginBottom: 2, width: "80%" }}
                    />
                    <Slider
                        value={selectedImage.borderRadius}
                        onChange={(e, val) => updateImage(selectedImage.id, "borderRadius", val)}
                        min={0} max={50}
                        sx={{ marginBottom: 2, width: "80%" }}
                    />
                </>
            )}

            {/* Action Buttons */}
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 2 }}>
                <Tooltip title="Save Collage">
                    <IconButton
                        color="primary"
                        onClick={handleSave}
                        sx={{
                            marginBottom: 2,
                            background: "linear-gradient(45deg, #ff4081, #ff9100)",
                            padding: "0.5rem",
                            borderRadius: "8px",
                            color: "white",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            transition: "all 0.3s ease",
                            '&:hover': { background: "linear-gradient(45deg, #ff9100, #ff4081)", transform: "scale(1.05)" },
                        }}
                        disabled={loading}
                    >
                        <Save />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Download Album">
                    <IconButton
                        color="secondary"
                        onClick={handleDownload}
                        sx={{
                            marginBottom: 2,
                            background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                            padding: "0.5rem",
                            borderRadius: "8px",
                            color: "white",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            transition: "all 0.3s ease",
                            '&:hover': { background: "linear-gradient(45deg, #21cbf3, #2196f3)", transform: "scale(1.05)" },
                        }}
                        disabled={loading}
                    >
                        <Download />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Snackbar for Notifications */}
            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
                <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AlbumSettings;
