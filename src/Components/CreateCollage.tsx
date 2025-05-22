import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
// import axios from "axios";
import { ImageUpload, SaveCollage } from "./Services/CollageService";
import { useSelector } from "react-redux";
import { RootState } from "../Stores/Store";
// import { image } from "html2canvas/dist/types/css/types/image";
// const myUrl = import.meta.env.VITE_SERVERURL

// import { User } from "../Moldes/User";
// import { ImageSaveAsync } from "./CollageService";


// הגדרת סוג תבנית
interface Template {
    id: string;
    name: string;
    layout: number;
    isDiagonal?: boolean;
    isCircular?: boolean;
    isFreeform?: boolean;
    isGeometric?: boolean;
}

// הגדרת תבניות
const templates: Template[] = [
    { id: "template-1", name: "תבנית ריבועית", layout: 4 },
    { id: "template-2", name: "תבנית אלכסונית", layout: 5, isDiagonal: true },
    { id: "template-3", name: "תבנית מעגלית", layout: 6, isCircular: true },
    { id: "template-4", name: "תבנית חופשית", layout: 8, isFreeform: true },
    { id: "template-5", name: "תבנית גיאומטרית", layout: 6, isGeometric: true },
];

const CreateCollage = () => {
    const user = useSelector((state: RootState) => state.token.user); // שליפת פרטי המשתמש מתוך Redux
console.log(user);

    // const [user,setUser]=useState<User>()
    const [images, setImages] = useState<Record<string, string>>({});
    const [imageOrder, setImageOrder] = useState<string[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        ImageUpload(event, setImages, setImageOrder, imageOrder, setLoading);
    };

    const handleTemplateSelect = (templateId: string) => {
        const template = templates.find((t) => t.id === templateId);
        if (template) {
            setSelectedTemplate(template);
            setImageOrder(imageOrder.slice(0, template.layout));
        }
    };

    const handleDownload = () => {
        const collageElement = document.getElementById("collage");
        if (collageElement) {
            html2canvas(collageElement).then((canvas) => {
                canvas.toBlob((blob) => {
                    if (blob) {
                        saveAs(blob, "collage.png");
                    }
                });
            });
        }
    };

    // const deleteImage = (id: string) => {
    //     setImages((prevImages) => {
    //         const updatedImages = { ...prevImages };
    //         delete updatedImages[id];
    //         const updatedOrder = imageOrder.filter((imgId) => imgId !== id);
    //         setImageOrder(updatedOrder);
    //         return updatedImages;
    //     });
    // };

    const clearAllImages = () => {
        setImages({});
        setImageOrder([]);
    };

    // const getPresignedUrl = async (blob: Blob): Promise<string | null> => {
    //     const fileName = 'collage-' + Date.now() + '.png';
    //     const contentType = blob.type;

    //     try {
    //         const response = await axios.get<{ url: string }>('myUrl/api/upload/presigned-url', {
    //             params: { fileName, contentType }
    //         });
    //         return response.data.url;
    //     } catch (error) {
    //         console.error('Error getting presigned URL', error);
    //         return null;
    //     }
    // };

    // const uploadToS3 = async (collageBlob: Blob) => {
    //     ImageSaveAsync(collageBlob);
    //     const presignedUrl = await getPresignedUrl(collageBlob);
    //     if (!presignedUrl) {
    //         alert('לא הצלחנו לקבל את ה-URL להעלאה.');
    //         return;
    //     }

    //     try {
    //         await axios.put(presignedUrl, collageBlob, {
    //             headers: {
    //                 'Content-Type': collageBlob.type,
    //             }
    //         });
    //         alert('הקולאז\' הועלה בהצלחה!');
    //     } catch (error) {
    //         console.error('Error uploading collage', error);
    //         alert('העלאת הקולאז\' נכשלה.');
    //     }
    // };

    // const handleSaveCollage = async () => {
    //     // const collageElement = document.getElementById("collage");
    //     // if (collageElement) {
    //     //     const canvas = await html2canvas(collageElement);
    //     //     canvas.toBlob((blob) => {
    //     //         if (blob) {
    //     //             ImageSaveAsync(blob);
    //     //         }
    //     //     });
    //     // }
    //     const u=userId?userId:undefined;
    //     SaveCollage(u,"my collage");
    // };
    const handleSaveCollage = async () => {
        // const user = useSelector((state: RootState) => state.token.user); // שליפת פרטי המשתמש מתוך Redux
        const userId = user?.id; // שליפת ה-userId מתוך פרטי המשתמש
    
        // אם ה-userId ריק, הצג הודעה למשתמש או מנע את הפעולה
        if (!userId) {
            alert('המשתמש לא מחובר, אנא התחבר לפני שמירת הקולאז\'!');
            return;
        }
    
        // אם ה-userId קיים, המשך עם שמירת הקולאז'
        SaveCollage(userId, "c");
    };


    const ResponsiveGridLayout = WidthProvider(Responsive);

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "900px", margin: "0 auto" }}>
            <h1>📸 יצירת קולאז'</h1>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
            <div style={{ margin: "10px 0" }}>
                <button onClick={handleDownload}>📥 הורד את הקולאז'</button>
                <button onClick={clearAllImages} style={{ marginLeft: "10px" }}>🗑 נקה הכל</button>
                <button onClick={handleSaveCollage} style={{ marginLeft: "10px" }}>💾 שמור את הקולאז' ב-AWS</button>
            </div>

            {loading && <p>🔄 טוען תמונות...</p>}

            <h3>בחר תבנית:</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                {templates.map((template) => (
                    <div
                        key={template.id}
                        onClick={() => handleTemplateSelect(template.id)}
                        style={{
                            width: "100px",
                            height: "100px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            border: selectedTemplate?.id === template.id ? "3px solid blue" : "1px solid gray",
                            cursor: "pointer",
                            padding: "5px",
                            borderRadius: "8px",
                        }}
                    >
                        <div style={{ width: "80px", height: "80px", background: "#eee", display: "grid", gap: "2px", gridTemplateColumns: `repeat(${template.layout > 2 ? 2 : 1}, 1fr)` }}>
                            {Array(template.layout).fill(null).map((_, idx) => (
                                <div key={idx} style={{ background: "#bbb", width: "100%", height: "100%", borderRadius: "2px" }}></div>
                            ))}
                        </div>
                        <span style={{ fontSize: "12px", marginTop: "5px" }}>{template.name}</span>
                    </div>
                ))}
            </div>
{/* <p>{"user id:"+userId}</p> */}
            <div id="collage" style={{ flex: 1, padding: 10, marginTop: "20px", width: "100%" }}>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={{
                        lg: imageOrder.reduce((acc: any[], imgId, index) => {
                            let x = index % 2;
                            let y = Math.floor(index / 2);
                            if (selectedTemplate?.isDiagonal) {
                                x = index;
                                y = index;
                            } else if (selectedTemplate?.isCircular) {
                                const angle = (index / imageOrder.length) * 360;
                                const radius = 4;
                                x = Math.cos(angle) * radius;
                                y = Math.sin(angle) * radius;
                            } else if (selectedTemplate?.isGeometric) {
                                x = index % 3;
                                y = Math.floor(index / 3);
                            }
                            acc.push({ i: imgId, x, y, w: 1, h: 1 });
                            return acc;
                        }, [])
                    }}
                >
                    {imageOrder.map((id) => (
                        <div key={id} data-grid={{ i: id, x: 0, y: 0, w: 1, h: 1 }}>
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed gray", borderRadius: 10 }}>
                                <img
                                    src={images[id]}
                                    alt="תמונה"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        aspectRatio: "1 / 1",
                                        borderRadius: 10,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};

export default CreateCollage;
