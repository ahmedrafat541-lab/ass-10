// برفع بيه الملفات



import multer from "multer";
import { randomUUID } from 'node:crypto';
import {resolve} from "node:path";
import fs from "node:fs";

export const multerLocal = ({customPath = "General"  , customTypes = []}) => {

    // لو الفولدر مش موجود بيعمله
    const fullPath = `uploads/${customPath }`
    if(!fs.existsSync(fullPath)){
        fs.mkdirSync(fullPath , {recursive:true})
    }
    const storage = multer.diskStorage({
        // بتقول الملف يتحفظ فين
        destination: (req , file , cb)=>{
            console.log(file);
            cb(null ,fullPath)},
 
            
// بتقول اسمه ايه
     filename:(req , file , cb)=>{
                console.log({file});
                // ال UUID بتمنع ان الملفين بنفس الاسم يتكتبوا فوق بعض
                 cb(null , randomUUID() + "__" + file.originalname)}
                
    })

// بتشوف تقبل الملف ولا لا 
    const fileFilter = (req , file, cb)=>{
                    if(customTypes.includes(file.mimetype)){
                        cb(new Error("Invalid file type"))}
                        else{cb(null , true)}}





const upload = multer({storage , fileFilter})
return upload
}
