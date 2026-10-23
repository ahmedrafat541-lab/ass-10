// خد بالك لاوم تيجي بعد ال authentication
// انت مسموحلك تعمل ايه

export const authorization = (roles = []) =>{
    return async(req , res , next)=>{
        if(!roles.includes(req.user.role)){
            throw new Error("unauthorized" , {cause:401})
        }


        next()
    }
}

