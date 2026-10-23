













import userModel from "../../DB/models/user.model.js";
import * as dbservice from "../../DB/service/DB.service.js";




// const client = new OAuth2Client();

export const createMessage = async (req , res , next)=>{


    
    const {content , userId } = req.body ; 

    const userExist =await dbservice.findById({
        model:userModel,
        id:userId
    })
    if(!userExist){
        throw new Error("user not exist")

    }

    let urls = []
    if (req?.files?.legth){
        for(const file of req?.files){
            urls.push(filepath)
        }
    }

    const message =await dbservice.create({
        model:messageModel,
        data:{
            content , 
            attachments:urls,
            userId
        }
    })

    // const user = await userModel.create([{fName , lName , email , password , age , gender , phone }])
   

   return res.status(201).json({message:"done" , message })
}

 






















// export const getMessages = async (req , res , next) =>{
//     const messages = await dbservice.find({model:messageModel , filter:{userId:req.params.userId}})
//     return res.status(200).json({message:"done" , messages})}



//     export const getMessageById = async (req , res , next) =>{
//         const message = await dbservice.findOne({model:messageModel , filter:{_id:req.params.messageId , userId:req.params.userId}})
//         return res.status(200).json({message:"done" , message})
//     }


//     export const deleteMessage = async (req , res , next) =>{
//         const message = await dbservice.deleteOne({model:messageModel , filter:{_id:req.params.messageId , userId:req.params.userId}})
//         return res.status(200).json({message:"done" , data:message})
//     }


