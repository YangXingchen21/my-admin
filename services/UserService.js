import {getUserByUsername,createUser} from '../models/userModel.js'
import bcrypt from 'bcrypt'

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
    if(password==users.rows[0].password){
        return {success:true,message:'登录成功'}
    }else{
        return {success:false,message:'密码错误，登录失败'}
    }
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