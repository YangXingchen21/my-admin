import * as UserService from '../services/userService.js'
import { ResponseHandler } from '../utils/resultUtil.js'
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
    const {username,password}=req.body
    const result=await UserService.doRegister(username,password)
    if(result.success){
        
        ResponseHandler.success(res,result.data.rows[0],'注册成功')
    }else{
        ResponseHandler.error(res,undefined,result.message)
        
    }
    
}

export const test = async(req,res)=>{
    const result = await UserService.doTest(req)
    res.status(200).json(result)
}