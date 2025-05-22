// // import React, { useState } from "react";
// // import Draggable from "react-draggable";
// // import { ResizableBox } from "react-resizable";
// // import "react-resizable/css/styles.css";

// // const frameShapes = [
// //   { id: "rect", label: "מלבן", style: "w-40 h-28" },
// //   { id: "circle", label: "עיגול", style: "w-28 h-28 rounded-full" },
// //   { id: "hexagon", label: "משושה", style: "w-32 h-32 clip-hexagon" },
// // ];

// // const templates = [
// //   { id: "template1", label: "תבנית 1" },
// //   { id: "template2", label: "תבנית 2" },
// // ];

// // interface Frame {
// //   id: number;
// //   shapeId: string;
// //   style: string;
// //   width: number;
// //   height: number;
// //   x: number;
// //   y: number;
// // }

// // const Ave = () => {
// //   const [selectedTemplate, setSelectedTemplate] = useState(templates[0].id);
// //   const [frames, setFrames] = useState<Frame[]>([]); // הצהרת טיפוס ל-frames

// //   const addFrame = (shapeId: string) => {
// //     const shape = frameShapes.find((s) => s.id === shapeId);
// //     if (!shape) return;

// //     setFrames([
// //       ...frames,
// //       {
// //         id: Date.now(),
// //         shapeId: shape.id,
// //         style: shape.style,
// //         width: 150,
// //         height: 100,
// //         x: 50,
// //         y: 50,
// //       },
// //     ]);
// //   };

// //   const removeFrame = (id: number) => {
// //     setFrames(frames.filter((frame) => frame.id !== id));
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       {/* תפריט צד לבחירת תבנית */}
// //       <div className="w-48 bg-gray-200 p-4">
// //         <h2 className="text-lg font-bold mb-2">בחר תבנית</h2>
// //         {templates.map((template) => (
// //           <button
// //             key={template.id}
// //             className={`w-full p-2 my-1 rounded ${
// //               selectedTemplate === template.id ? "bg-blue-500 text-white" : "bg-white"
// //             }`}
// //             onClick={() => setSelectedTemplate(template.id)}
// //           >
// //             {template.label}
// //           </button>
// //         ))}
// //         <h2 className="text-lg font-bold mt-4">הוסף מסגרת</h2>
// //         {frameShapes.map((shape) => (
// //           <button
// //             key={shape.id}
// //             className="w-full p-2 my-1 bg-white border rounded"
// //             onClick={() => addFrame(shape.id)}
// //           >
// //             {shape.label}
// //           </button>
// //         ))}
// //       </div>

// //       {/* אזור העבודה עם המסגרות */}
// //       <div className="flex-1 relative bg-gray-100 p-4">
// //         {frames.map((frame) => (
// //           <Draggable key={frame.id} defaultPosition={{ x: frame.x, y: frame.y }}>
// //             <ResizableBox
// //               width={frame.width}
// //               height={frame.height}
// //               axis="both"
// //               minConstraints={[50, 50]}
// //               maxConstraints={[300, 300]}
// //               className={`absolute bg-gray-300 border flex justify-center items-center ${frame.style}`}
// //             >
// //               <button
// //                 className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full text-xs"
// //                 onClick={() => removeFrame(frame.id)}
// //               >
// //                 X
// //               </button>
// //               <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
// //             </ResizableBox>
// //           </Draggable>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Ave;

// import React, { useState } from "react";
// import { Card, CardActionArea, CardContent, CardMedia, Typography, Dialog, DialogContent, Button, IconButton } from "@mui/material";
// import { motion } from "framer-motion";
// import { CloudUpload, Delete, Download } from "@mui/icons-material";
// import html2canvas from "html2canvas";
// import Draggable from "react-draggable";
// import { Resizable } from "re-resizable";

// const templates = [
//   { id: 1, name: "Minimalist", image: "/templates/minimalist.jpg", frames: [] },
//   { id: 2, name: "Vintage", image: "/templates/vintage.jpg", frames: [] },
//   { id: 3, name: "Modern", image: "/templates/modern.jpg", frames: [] },
//   { id: 4, name: "Classic", image: "/templates/classic.jpg", frames: [] },
// ];

// const frameShapes = ["square", "circle", "heart", "star"];

// type Frame = {
//   id: number;
//   shape: string;
//   image?: string;
//   size: number;
//   top: number;
//   left: number;
//   bgColor: string;
// };

// type Template = {
//   id: number;
//   name: string;
//   image: string;
//   frames: Frame[];
// };

// // Error boundary component
// class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error: any, info: any) {
//     console.error("Error caught by ErrorBoundary:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default function AlbumTemplates() {
//   const [selected, setSelected] = useState<Template | null>(null);
//   const [open, setOpen] = useState(false);
//   const [frames, setFrames] = useState<Frame[]>([]);

//   const handleSelect = (template: Template) => {
//     setSelected({ ...template, frames: [] });
//     setFrames([]);
//     setOpen(true);
//   };

//   const addFrame = (shape: string) => {
//     setFrames([...frames, { id: Date.now(), shape, size: 100, top: 50, left: 50, bgColor: "#ccc" }]);
//   };

//   const removeFrame = (id: number) => {
//     setFrames(frames.filter((frame) => frame.id !== id));
//   };

//   const handleImageUpload = (event: any, id: number) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFrames(
//           frames.map((frame) => (frame.id === id ? { ...frame, image: reader.result as string } : frame))
//         );
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const downloadTemplate = async () => {
//     if (!selected) return;
//     const element = document.getElementById("template-preview");
//     if (element) {
//       const canvas = await html2canvas(element);
//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = `${selected.name}-template.png`;
//       link.click();
//     }
//   };

//   return (
//     <ErrorBoundary>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
//         {templates.map((template) => (
//           <motion.div key={template.id} whileHover={{ scale: 1.05 }}>
//             <Card
//               sx={{ border: selected?.id === template.id ? "2px solid #1976d2" : "2px solid transparent", boxShadow: 3 }}
//             >
//               <CardActionArea onClick={() => handleSelect(template)}>
//                 <CardMedia component="img" height="160" image={template.image} alt={template.name} />
//                 <CardContent>
//                   <Typography variant="h6" align="center">{template.name}</Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </motion.div>
//         ))}

//         <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
//           <DialogContent>
//             {selected && (
//               <div className="flex flex-col items-center gap-4 p-4">
//                 <Typography variant="h5">{selected.name} Template</Typography>
//                 <div className="flex gap-2">
//                   {frameShapes.map((shape) => (
//                     <Button key={shape} onClick={() => addFrame(shape)}>{shape}</Button>
//                   ))}
//                 </div>
//                 <div id="template-preview" className="relative w-full h-96 border p-4 flex justify-center items-center bg-gray-100">
//                   {frames.map((frame) => (
//                     <Draggable key={frame.id} bounds="parent">
//                       <div>
//                         <Resizable
//                           defaultSize={{ width: frame.size, height: frame.size }}
//                           minWidth={50}
//                           minHeight={50}
//                           onResizeStop={(e, direction, ref, d) => {
//                             setFrames(frames.map(f =>
//                               f.id === frame.id ? { ...f, size: f.size + d.width } : f
//                             ));
//                           }}
//                         >
//                           <div
//                             className="absolute flex items-center justify-center cursor-pointer border-2 border-gray-400"
//                             style={{
//                               width: `${frame.size}px`,
//                               height: `${frame.size}px`,
//                               backgroundColor: frame.bgColor,
//                               clipPath: frame.shape === "circle" ? "circle(50%)" : frame.shape === "heart" ? "polygon(50% 15%, 80% 0, 100% 25%, 75% 60%, 50% 80%, 25% 60%, 0 25%, 20% 0)" : frame.shape === "star" ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" : "none",
//                               top: `${frame.top}px`,
//                               left: `${frame.left}px`,
//                             }}
//                           >
//                             {frame.image ? (
//                               <img src={frame.image} alt="Frame" className="w-full h-full object-cover" />
//                             ) : (
//                               <>
//                                 <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, frame.id)} hidden id={`upload-${frame.id}`} />
//                                 <label htmlFor={`upload-${frame.id}`} className="cursor-pointer text-gray-500 flex flex-col items-center">
//                                   <CloudUpload />
//                                   <span>Upload</span>
//                                 </label>
//                               </>
//                             )}
//                             <IconButton onClick={() => removeFrame(frame.id)} size="small" className="absolute top-0 right-0">
//                               <Delete fontSize="small" />
//                             </IconButton>
//                           </div>
//                         </Resizable>
//                       </div>
//                     </Draggable>
//                   ))}
//                 </div>
//                 <Button onClick={downloadTemplate} variant="contained" startIcon={<Download />}>Download</Button>
//               </div>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </ErrorBoundary>
//   );
// }
