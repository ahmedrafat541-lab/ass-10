// بيربط كل ال url ب ال middlewares في اخرها داله من ال service




import { Router } from "express";
import * as US from "./message.service.js";
import { authentication } from "../../common/middleware/authentication.js";
import { Validation } from "../../common/middleware/validation.js";
// برفع بيه الملفات
import { multerLocal } from "../../common/middleware/multer.js";
import * as MV from "./message.validation.js";
import { createMessageSchema } from "./message.validation.js";



const messageRouter = Router();

 





 
messageRouter.post("/signup"    ,
     multerLocal({customPath:"messages" ,
         customTypes:['image/jpeg']}).array("attachments" , 6) ,
          Validation(createMessageSchema), US.createMessage); 

export default messageRouter
