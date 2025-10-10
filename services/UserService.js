import {getUserByUsername} from '../models/userModel.js'
export const getUsers=async()=>await UserModel.findAll();
/**
 * 登录
 * @param {string} username - 用户名 
 * @param {string} password - 密码
 * @returns {object} 包含成功与否信息的对象
 */
export const doLogin=async(username,password)=>{
    const users=await getUserByUsername(username)
    if(users.rowCount==0){
        return {succuss:false,message:'用户不存在'}
    }else if(users.rowCount>1){
        return {succuss:false,message:'用户数据异常'}
    }
    if(password==users.rows[0].password){
        return {succuss:true,message:'登录成功'}
    }else{
        return {succuss:false,message:'密码错误，登录失败'}
    }
}