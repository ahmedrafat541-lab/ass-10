import joi from "joi";
import { signUpSchema } from "../../modules/users/user.validation.js";

// param ال schema دي بفحص بيها ال :body , params , headers , files
export const Validation =(schema)=>{ return (req , res , next)=>{

    const errResult = []

    
    for(const key of Object.keys(schema)){
        const {error}=schema[key].validate(req[key] , {abortEarly:false})
      
           if(error){
           
            error.details.forEach((err)=>{errResult.push({message:err.message , path:err.path[0] , key})})}}

    if(errResult.length){return res.status(400).json({message:" validation error" , error:errResult})}
           


        next()}}