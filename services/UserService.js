import {getUserByUsername,createUser, getUserById} from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv/config'
//后续要迁移到配置文件中
const PRIVATE_KEY=process.env.TOKEN_PRIVATE_KEY
/**
 * 登录
 * @param {string} username - 用户名 
 * @param {string} password - 密码
 * @returns {object} 包含成功与否信息的对象
 */
export const doLogin=async(username,password)=>{
    const users=await getUserByUsername(username)
    if(users.rowCount==0){
        return {success:false,message:'用户不存在'}
    }else if(users.rowCount>1){
        return {success:false,message:'用户数据异常'}
    }
    const user=users.rows[0]
    //解密并比较
    const isValid=bcrypt.compareSync(password,user.password)
    if(!isValid){
        return {success:false,message:'密码错误，登录失败'}
    }
    //生成token(第二个参数应该写在环境变量里)
    const token=jwt.sign({id:user.id},PRIVATE_KEY)
    return {success:true,message:'登录成功',token}
   
}

export const doRegister=async(username,password)=>{
    //判断是否存在同名用户
    const user=await getUserByUsername(username)
    if(user.rowCount>0){
        return {success:false,message:'用户已存在'}
    }
    //密码加密
    password=bcrypt.hashSync(password,10)
    const data=await createUser(username,password)
    return {
        success:true,
        message:'注册成功',
        data
    }
}

export const doTest=async(req)=>{
    const user=req.user
    return {
        success:true,
        data:user
    }
}