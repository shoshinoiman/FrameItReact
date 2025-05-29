










// import React, { useEffect, useState } from "react";
// import { Slider, Box, IconButton, Tooltip, Snackbar } from "@mui/material";
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
//     // setTitle,
//     backgroundColor,
//     setBackgroundColor,
//     // handleSaveCollage,
//     handleDownloadAlbum,
//     selectedImage,
//     updateImage,
//     deleteImage,
//     handleImageUpload,
//     userId,
//     // setSelectedFrame,
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
//         <Box p={3} sx={{ background: "#333", borderRadius: "10px", color: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
//                         onChange={(_e, val) => updateImage(selectedImage.id, "blur", val)}
//                         min={0} max={10}
//                         sx={{ marginBottom: 2, width: "80%" }}
//                     />
//                     <Slider
//                         value={selectedImage.borderRadius}
//                         onChange={(_e, val) => updateImage(selectedImage.id, "borderRadius", val)}
//                         min={0} max={50}
//                         sx={{ marginBottom: 2, width: "80%" }}
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
//                             background: "linear-gradient(45deg, #ff4081, #ff9100)",
//                             padding: "0.5rem",
//                             borderRadius: "8px",
//                             color: "white",
//                             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//                             transition: "all 0.3s ease",
//                             '&:hover': { background: "linear-gradient(45deg, #ff9100, #ff4081)", transform: "scale(1.05)" },
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
//                             background: "linear-gradient(45deg, #2196f3, #21cbf3)",
//                             padding: "0.5rem",
//                             borderRadius: "8px",
//                             color: "white",
//                             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//                             transition: "all 0.3s ease",
//                             '&:hover': { background: "linear-gradient(45deg, #21cbf3, #2196f3)", transform: "scale(1.05)" },
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
import { ColorLens, Save, Download, AddPhotoAlternate, Image, Clear } from "@mui/icons-material";
import { SaveCollage } from "./Services/CollageService";
import { ImageData3 } from "../Moldes/ImageData";
import { Alert } from "@mui/material";
import BackgroundSelector from "./BackgroundSelector"; // ייבוא הקומפוננטה החדשה

interface AlbumSettingsProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    backgroundColor: string;
    setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
    backgroundImage: string | null;
    setBackgroundImage: (bgImage: string) => void;
    clearBackgroundImage: () => void;
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
    backgroundColor,
    setBackgroundColor,
    backgroundImage,
    setBackgroundImage,
    clearBackgroundImage,
    handleDownloadAlbum,
    selectedImage,
    updateImage,
    deleteImage,
    handleImageUpload,
    userId,
}) => {
    const [loading, setLoading] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
    const [backgroundSelectorOpen, setBackgroundSelectorOpen] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        try {
            await handleDownloadAlbum();
            setSnackMessage("Album downloaded successfully!");
            setSnackOpen(true);
        } catch (error) {
            setSnackMessage("Error downloading album.");
            setSnackOpen(true);
        } finally {
            setLoading(false);
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
            setLoading(false);
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
            
            {/* Background Image Selector */}
            <Tooltip title="Choose Background Image">
                <IconButton 
                    onClick={() => setBackgroundSelectorOpen(true)} 
                    sx={{ 
                        marginBottom: 2,
                        backgroundColor: backgroundImage ? '#4caf50' : 'transparent',
                        '&:hover': {
                            backgroundColor: backgroundImage ? '#45a049' : '#555'
                        }
                    }}
                >
                    <Image sx={{ color: backgroundImage ? "white" : "#9c27b0" }} />
                </IconButton>
            </Tooltip>

            {/* Clear Background Image Button */}
            {backgroundImage && (
                <Tooltip title="Clear Background Image">
                    <IconButton 
                        onClick={clearBackgroundImage} 
                        sx={{ 
                            marginBottom: 2,
                            backgroundColor: '#f44336',
                            '&:hover': {
                                backgroundColor: '#d32f2f'
                            }
                        }}
                    >
                        <Clear sx={{ color: "white" }} />
                    </IconButton>
                </Tooltip>
            )}

            {/* Background Color Selector - disabled when background image is selected */}
            <Tooltip title={backgroundImage ? "Clear background image first" : "Change Background Color"}>
                <span>
                    <IconButton 
                        onClick={() => backgroundImage ? null : document.getElementById("bgColorInput")?.click()} 
                        sx={{ 
                            marginBottom: 2,
                            opacity: backgroundImage ? 0.5 : 1,
                            cursor: backgroundImage ? 'not-allowed' : 'pointer'
                        }}
                        disabled={!!backgroundImage}
                    >
                        <ColorLens sx={{ color: backgroundImage ? "#666" : "#ff4081" }} />
                    </IconButton>
                </span>
            </Tooltip>
            <input
                id="bgColorInput"
                type="color"
                style={{ display: "none" }}
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                disabled={!!backgroundImage}
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
                    <Box sx={{ width: "100%", textAlign: "center", marginBottom: 1, color: "#ccc" }}>
                        Blur: {selectedImage.blur}
                    </Box>
                    <Slider
                        value={selectedImage.blur}
                        onChange={(_e, val) => updateImage(selectedImage.id, "blur", val)}
                        min={0} max={10}
                        sx={{ marginBottom: 2, width: "80%" }}
                    />
                    
                    <Box sx={{ width: "100%", textAlign: "center", marginBottom: 1, color: "#ccc" }}>
                        Border Radius: {selectedImage.borderRadius}
                    </Box>
                    <Slider
                        value={selectedImage.borderRadius}
                        onChange={(_e, val) => updateImage(selectedImage.id, "borderRadius", val)}
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

            {/* Background Selector Dialog */}
            <BackgroundSelector
                isOpen={backgroundSelectorOpen}
                onClose={() => setBackgroundSelectorOpen(false)}
                onSelectBackground={setBackgroundImage}
            />

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