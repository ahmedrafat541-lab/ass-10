// // بيخزن التوكين الملغيه الي اتعملها logout يعني


// import mongoose from "mongoose";



// const revokeTokenSchema = new mongoose.Schema({

//     tokenId:{
//         type:String , required:true, trim:true, unique:true
//     },
//     userId:{
//         type:mongoose.Types.ObjectId , required:true, ref:"User"
//     },
//     expiresAt:Date
// } ,{timestamps:true , strict:true , strictQuery:true})


// revokeTokenSchema.index({expiresAt:1} , {expireAfterSeconds:0})

// const revokeTokenModel = mongoose.models.RevokeToken || mongoose.model("RevokeToken" , revokeTokenSchema);

// export default revokeTokenModel;