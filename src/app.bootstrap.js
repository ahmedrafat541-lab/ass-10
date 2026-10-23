
import express from "express";
import connectionDB from "./DB/connectionDB.js";
import connectionRedis from "./DB/connection.redis.js";
import userRouter from "./modules/users/user.controller.js";
// بخلي السرفر يستقبل من الفرونت
import cors from "cors" ;
import { setValue } from "./DB/service/redis.service.js";
import messageRouter from "./modules/messages/message.controller.js";

const app = express();
const port =3010;



const bootstrap = async()=>{
    // بيسمح لاي موقع انو يتصل بالسرفر
    app.use(cors({origin:"*"}))
    // بيقرا ال body بتاع الريكوست وبيخليه جيسون ويحط الناتج في req.body
    app.use(express.json());
    app.get("/" , (req , res  )=>{
res.status(200).json({message:"hello nigga"})});


await connectionDB();
await connectionRedis();


app.use("/users",userRouter)
app.use("/messages", messageRouter)



app.use("{/*demo}" , (req , res ,next)=>{
    throw new Error( `url:${req.originalUrl} with method:${req.method} not found` , {cause:404})  });


    app.use(( err , req , res  , next)=>{
        console.log(err);
        res.status(err.cause || 500).json({message:err.message , stack:err.stack })
    });
 


    app.listen(port , ()=>{console.log(`example app.listening on port ${port}!`)})

};


export default bootstrap
