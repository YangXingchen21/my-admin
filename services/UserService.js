import {getUserByUsername,createUser} from '../models/userModel.js'

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

export const doRegister=async(username,email,password)=>{
    return await createUser(username,email,password)
}