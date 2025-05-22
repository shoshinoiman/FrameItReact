// import axios from "axios";
// import saveAs from "file-saver";
// import html2canvas from "html2canvas";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../Stores/Store";


// interface Template {
//     id: string;
//     name: string;
//     layout: number;
//     isDiagonal?: boolean;
//     isCircular?: boolean;
//     isFreeform?: boolean;
//     isGeometric?: boolean;
//   }


// // הגדרת תבניות
// const templates: Template[] = [
//     { id: "template-1", name: "תבנית ריבועית", layout: 4 },
//     { id: "template-2", name: "תבנית אלכסונית", layout: 5, isDiagonal: true },
//     { id: "template-3", name: "תבנית מעגלית", layout: 6, isCircular: true },
//     { id: "template-4", name: "תבנית חופשית", layout: 8, isFreeform: true },
//     { id: "template-5", name: "תבנית גיאומטרית", layout: 6, isGeometric: true },
//   ];


// const [loading, setLoading] = useState(false);
// const [images, setImages] = useState<Record<string, string>>({});
// const [imageOrder, setImageOrder] = useState<string[]>([]);
// const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);


// export const ImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files) return;
//     setLoading(true);
//     const files = Array.from(event.target.files);
//     let newImages: Record<string, string> = {};
//     let newOrder: string[] = [];

//     files.forEach((file, index) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             if (reader.result) {
//                 const imageId = `img-${Date.now()}-${index}`;
//                 newImages[imageId] = reader.result.toString();
//                 newOrder.push(imageId);
//             }
//             if (newOrder.length === files.length) {
//                 setImages((prevImages) => {
//                     const updatedImages = { ...prevImages, ...newImages };
//                     const updatedOrder = [...imageOrder, ...newOrder];
//                     setImageOrder(updatedOrder);
//                     setLoading(false);
//                     return updatedImages;
//                 });
//             }
//         };
//         reader.readAsDataURL(file);
//     });
// };

// export const handleTemplateSelect = (templateId: string) => {
//     const template = templates.find((t) => t.id === templateId);
//     if (template) {
//         setSelectedTemplate(template);
//         setImageOrder(imageOrder.slice(0, template.layout));
//     }
// };

// export const handleDownload = () => {
//     const collageElement = document.getElementById("collage");
//     if (collageElement) {
//         html2canvas(collageElement).then((canvas) => {
//             canvas.toBlob((blob) => {
//                 if (blob) {
//                     saveAs(blob, "collage.png");
//                 }
//             });
//         });
//     }
// };

// const userId = useSelector((state: RootState) => state.token.user?.id);

// export const ImageSaveAsync = async (file: Blob) => {
//     // בדוק אם יש לך userId
//     if (!userId) {
//         console.error("User not found");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("file", file, "collage.png"); // הוספת הקובץ כ-"collage.png"

//     try {
//         // עידכון URL בשרת כך שיתמוך בקבלת userId
//         const response = await axios.post(
//             `https://localhost:7071/api/collage/upload/${userId}`, // אם ה-API שלך תומך ב-url הזה
//             formData,
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`, // אם נדרש טוקן
//                 },
//             }
//         );

//         if (response.status === 200) {
//             console.log("Collage uploaded successfully:", response.data);
//             // אפשר להוסיף פעולה לאחר העלאה מוצלחת, כמו עדכון UI או הצגת הודעה
//         } else {
//             console.error("Error uploading collage:", response);
//         }
//     } catch (error) {
//         console.error("Error uploading collage:", error);
//     }
// };






const myUrl = import.meta.env.VITE_SERVERURL
import axios from "axios";
// import saveAs from "file-saver";
import html2canvas from "html2canvas";
import { Collage } from "../../Moldes/Collage";
// import DomToImage from 'dom-to-image';


export const ImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setImages: Function, setImageOrder: Function, imageOrder: string[], setLoading: Function) => {
    if (!event.target.files) return;
    setLoading(true);
    const files = Array.from(event.target.files);
    let newImages: Record<string, string> = {};
    let newOrder: string[] = [];

    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result) {
                const imageId = `img-${Date.now()}-${index}`;
                newImages[imageId] = reader.result.toString();
                newOrder.push(imageId);
            }
            if (newOrder.length === files.length) {
                setImages((prevImages: Record<string, string>) => {
                    const updatedImages = { ...prevImages, ...newImages };
                    const updatedOrder = [...imageOrder, ...newOrder];
                    setImageOrder(updatedOrder);
                    setLoading(false);
                    return updatedImages;
                });
            }
        };
        reader.readAsDataURL(file);
    });
};



//save collage
// export const ImageSaveAsync = async (file: Blob, userId: string | undefined) => {
//     if (!userId) {
//         console.error("User not found");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("file", file, "collage.png");

//     try {
//         const response = await axios.post(
//             `https://localhost:7071/api/collage/upload/${userId}`,
//             formData,
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`,
//                 },
//             }
//         );

//         if (response.status === 200) {
//             console.log("Collage uploaded successfully:", response.data);
//         } else {
//             console.error("Error uploading collage:", response);
//         }
//     } catch (error) {
//         console.error("Error uploading collage:", error);
//     }
// };



// export const handleDownload = () => {
//     const collageElement = document.getElementById("collage");
//     if (collageElement) {
//         html2canvas(collageElement).then((canvas) => {
//             canvas.toBlob((blob) => {
//                 if (blob) {
//                     saveAs(blob, "collage.png");
//                 }
//             });
//         });
//     }
// };
// export const downloadAlbum = async (dataUrl: any) => {
//     try {
//         console.log("Download initiated:", dataUrl);  // הדפסת dataUrl
//         if (!dataUrl) {
//             throw new Error("No dataUrl available to download.");
//         }
//         const link = document.createElement("a");
//         link.href = dataUrl;
//         link.download = "album.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     } catch (error) {
//         console.error("❌ Error downloading:", error);
//     }
// };

// CollageService.ts
export const downloadAlbum = (dataUrl: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "album.png";  // אפשר לשנות את שם הקובץ בהתאם
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};





// export const SaveCollage = async (userId: string | undefined, title: string) => {
//     console.log("IN SACVE COLLAGE");
// console.log("user id: ", userId," ");

//     const collageElement = document.getElementById(title);
//     console.log(collageElement);

//     if (collageElement) {
//         const canvas = await html2canvas(collageElement);
//         canvas.toBlob(async (blob) => {
//             if (blob) {
//                 const fileName = `collage-${Date.now()}.png`; // שם הקובץ
//                 const presignedUrl = await getPresignedUrl(blob, fileName);

//                 if (!presignedUrl) {
//                     alert("לא הצלחנו לקבל את ה-URL להעלאה.");
//                     return;
//                 }

//                 try {
//                     await axios.put(presignedUrl, blob, {
//                         headers: { "Content-Type": blob.type },
//                     });

//                     // שולחים את שם הקובץ בתור title ואת ה-URL המלא
//                     await saveCollageToServer(userId, fileName, presignedUrl.split("?")[0]);

//                     alert("הקולאז' נשמר בהצלחה!");
//                 } catch (error) {
//                     console.error("Error uploading collage", error);
//                     alert("העלאת הקובץ נכשלה.");
//                 }
//             }
//         });
//     }
// };


// export const saveCollageToServer = async (userId: string | undefined, fileName: string, imageUrl: string) => {
//     console.log("in save to server");

//     if (!userId) {
//         console.error("User not found");
//         return;
//     }

//     const collageDto = {
//         userId: parseInt(userId),
//         title: fileName, // כאן נכנס שם הקובץ במקום ה-title שהתקבל
//         collageUrl: imageUrl, // כאן נשמר ה-URL המלא של התמונה
//     };

//     try {
//         const response = await axios.post(
//             "https://localhost:7071/api/collage/create",
//             collageDto,
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`,
//                 },
//             }
//         );

//         if (response.status === 201) {
//             console.log("Collage saved successfully:", response.data);
//         } else {
//             console.error("Error saving collage:", response);
//         }
//     } catch (error) {
//         console.error("Error saving collage:", error);
//     }
// };

// const getPresignedUrl = async (blob: Blob, fileName: string): Promise<string | null> => {
//     const contentType = blob.type;

//     try {
//         const response = await axios.get<{ url: string }>(
//             "https://localhost:7071/api/upload/presigned-url",
//             { params: { fileName, contentType } }
//         );
//         return response.data.url;
//     } catch (error) {
//         console.error("Error getting presigned URL", error);
//         return null;
//     }
// };



export const SaveCollage = async (userId: string | undefined, title: string) => {

    const collageElement = document.getElementById("collage");
    console.log("collageElement:", collageElement);


    if (collageElement) {
        const canvas = await html2canvas(collageElement);
        canvas.toBlob(async (blob) => {
            if (blob) {
                const presignedUrl = await getPresignedUrl(blob);
                if (!presignedUrl) {
                    alert("לא הצלחנו לקבל את ה-URL להעלאה.");
                    return;
                }

                try {
                    await axios.put(presignedUrl, blob, {
                        headers: { "Content-Type": blob.type },
                    });

                    // עכשיו שולחים את הנתונים לשרת
                    await saveCollageToServer(userId, title, presignedUrl.split("?")[0]);

                    alert("הקולאז' נשמר בהצלחה!");
                } catch (error) {
                    console.error("Error uploading collage", error);
                    alert("העלאת הקובץ נכשלה.");
                }
            }
        });
    }
};

export const saveCollageToServer = async (userId: string | undefined, _title: string, imageUrl: string) => {
    console.log("kkkkkkkkkkkkk");

    if (!userId) {
        console.error("User not found");
        return;
    }

    const collageDto = {
        userId: parseInt(userId),
        title: "gallery.png",
        collageUrl: imageUrl ?? "default",
    };

    try {
        const response = await axios.post(
            `${myUrl}/api/collage/create`,
            collageDto,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        if (response.status === 200) {
            console.log("Response:", response);
            console.log("Collage saved successfully:", response.data);
        } else {
            console.error("Error saving collage:", response);
        }
    } catch (error) {
        console.error("Error saving collage:", error);
    }
};

const getPresignedUrl = async (_blob: Blob): Promise<string | null> => {
    const fileName = "gallery.png";
    // const contentType = blob.type;

    try {
        const response = await axios.get<{ url: string }>(
            `${myUrl}/api/upload/presigned-url`,
            { params: { fileName } }
        );
        return response.data.url;
    } catch (error) {
        console.error("Error getting presigned URL", error);
        return null;
    }
};



// export const GetAllCollagesByUserId = async (userId: number): Promise<Collage[]> => {
//     try {
//         const response = await axios.get(`https://localhost:7071/api/collage/user/${userId}`);
//         console.log(response.data.collages.$values);

//         return response.data.collages.$values; // מחלץ את המערך מהאובייקט
//     } catch (error) {
//         console.error("Error fetching collages:", error);
//         return []; // במקרה של שגיאה מחזיר מערך ריק
//     }
// };


export const GetAllCollagesByUserId = async (userId: number,token:string|null): Promise<Collage[]> => {
    try {
        const response = await axios.get(`${myUrl}/api/Collage/user/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

        console.log("response ", response);

        const collages: Collage[] = response.data.collages;
        console.log(collages);

        // מבצע קריאה לשרת כדי לקבל Pre-signed URL לכל קולאז'
        const collagesWithUrls = await Promise.all(
            collages.map(async (collage) => {
                try {
                    console.log("collage|||||");
                    console.log(collage);
                    console.log("לפני");

                    console.log(collage.collageUrl);
                    const urlResponse = await axios.get(`${myUrl}/api/upload/presigned-get-url`, {

                        params: { fileName: collage.title },
                    });
                    console.log("Presigned URL Response:", urlResponse.data);

                    console.log("urlResponse:::::::::::::  ", urlResponse);

                    collage.collageUrl = urlResponse.data.url
                    console.log("אחרי:");
                    console.log("v0  ", collage.collageUrl);


                    // return { ...collage, presignedUrl: urlResponse.data.url };
                    return collage
                } catch (error) {
                    console.error(`Error fetching presigned URL for ${collage.collageUrl}:`, error);
                    return { ...collage, presignedUrl: "" }; // במקרה של שגיאה מחזיר URL ריק
                }
            }
            )
        );

        return collagesWithUrls;
    } catch (error) {
        console.error("Error fetching collages:", error);
        return [];
    }
};
export const DeleteCollageFromData = async (collageId: number) => {
    // console.log("in deleteserver");

    // const x = await axios.get(
    //     `https://localhost:7071/api/collage/get/${collageID}`,
    //     {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`,
    //         },
    //     }
    // );
    // console.log("x::::::::::::::");

    // console.log(x);
    // console.log("משהו מוזר קורה כאן!!!");

    try {


        const response = await axios.delete(
            `${myUrl}/api/collage/${collageId}`,  // אין צורך להוסיף את המילה 'DELETE' ל-URL
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        return response;
    } catch (error: any) {
        console.error('Error deleting collage:', error);
        alert(`Error: ${error.response ? error.response.data : error.message}`);
    }
};


export const DeleteCollage = async (collageId: number, fileName: string): Promise<boolean> => {
    try {
        // בקשת PreSigned URL למחיקה
        const response = await DeleteCollageFromData(collageId);
        console.error("❌ לא נמחק מהשרת!!");

        if (response === null) { return false }
        const urlResponse = await axios.get(`${myUrl}/api/upload/presigned-delete-url`, {
            params: { fileName },
        });

        const presignedUrl = urlResponse.data.url;

        if (!presignedUrl) {
            console.error("❌ לא התקבל URL למחיקה");
            return false;
        }

        // ביצוע בקשת DELETE ל-PreSigned URL
        await axios.delete(presignedUrl);

        console.log(`✅ הקובץ "${fileName}" נמחק בהצלחה`);
        return true;
    } catch (error) {
        console.error(`❌ שגיאה במחיקת הקובץ "${fileName}":`, error);
        return false;
    }
};













