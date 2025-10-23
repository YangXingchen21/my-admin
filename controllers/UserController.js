import * as UserService from '../services/userService.js'

export const doLogin=async (req,res)=>{
    try {
        const {username,password}=req.body
        
        const result=await UserService.doLogin(username,password)
        const {success,message}=result
        
        if(success){
            res.status(200).json(result)
        }else{
            res.status(401).json(result)
        }
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
    
}

export const register=async(req,res)=>{
    const {username,email,password}=req.body
    const result=await UserService.doRegister(username,email,password)
    res.status(200).json(result.rows[0])
}