// ده مخزن قواعد مشتركه بعرفها مره و بستخدمها في اكتر من schema


import joi from "joi";
import { Types } from "mongoose";




export const generalRules = {


 // بشوف لو ال id بصيغه objectedid ولا لا
        id:joi.string().custom((value , helper)=>{
            return Types.ObjectId.isValid(value) ? value : helper.message("invalid id")
        }),


    email:joi.string().email({minDomainSegments:2 , maxDomainSegments:2 }),
    password:joi.string(),

// object بوصف فيه شكل الملف الي في ال multer
    file:joi.object({
        fieldname:joi.string().required(),
        originalname:joi.string().required(),
        encoding:joi.string().required(),
        mimetype:joi.string().required(),
        destination:joi.string().required(),
        filename:joi.string().required(),
        path:joi.string().required(), 
        size:joi.number().required(),
    }).messages({
        "any.required":"file is required",
    }),


// بيفحص ال headers
    token:joi.object({
        authorization:joi.string().required(),
        connection:joi.string().required(),
        "accept-encoding":joi.string().required(),
        "user-agent":joi.string().required(),
        "content-length":joi.string().required(),
       "cache-control":joi.string(),
       "postman-token":joi.string(),
       host:joi.string(),
       "accept":joi.string(),

    })
    







}