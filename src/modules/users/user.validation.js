import joi from "joi";
import { generalRules } from "../../common/utils/generalRules.js";
import { authorization } from "../../common/middleware/authorization.js";


export const signUpSchema = {
// بيفحص الي جواه
    body:joi.object({
        fName:joi.string().required(),
        lName:joi.string().required(),
        email:generalRules.email.required(),
        password:generalRules.password.required(),
         age:joi.number().required(),
          gender:joi.string().valid("male","female").required(),
           phone :joi.string().required(),
           cpassword:joi.string().required().valid(joi.ref("password")).required()
    }).required(),



    

// برضه
    files:joi.object({
        attachment:joi.array().items(generalRules.file.required()).required(),
        attachments:joi.array().items(generalRules.file.required()).required()

    }).required(),
}



    

export const signInSchema = {
    // برضه
    body:joi.object({
        email:generalRules.email.required(),
        password:generalRules.password.required(),
    }).required(),}


    export const confirmEmailSchema ={
        body:joi.object({
            email:joi.string().required(),
            otp:joi.string().pattern(/^[0-9]{6}$/).required()
        }).required()
    }






    export const refreshTokenSchema = {
        headers:generalRules.token.required()
    }





    export const shareProfileSchema = {
        params:joi.object({
            id:generalRules.id.required()
        }).required()
    }




    export const updateProfileSchema = {
        body:joi.object({
            fName:joi.string(),
            lName:joi.string(),
            phone:joi.string(),
            age:joi.number(),
            gender:joi.string().valid("male","female"),
        }).required(),
    }





    export const updatePasswordSchema = {
        body:joi.object({
            oldPassword:joi.string().required(),
            newPassword:joi.string().required(),
            cpassword:joi.string().required().valid(joi.ref("newPassword")).required()
        }).required(),
    }




 