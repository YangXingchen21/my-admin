import { getUserById } from "../models/userModel.js"
import jwt from 'jsonwebtoken'

const PRIVATE_KEY=process.env.JWT_SECRET
export const authMiddleware=async(req,res,next)=>{
    const token=String(req.headers.authorization)
    const id=jwt.verify(token,PRIVATE_KEY).id
    const data=await getUserById(id)
    if(data.rowCount==0){
        res.status(401).json({success:false,message:'用户不存在'})
    }
    req.user=data.rows[0]
    next()
}