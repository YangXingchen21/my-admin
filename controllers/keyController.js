import { ResponseHandler } from '../utils/resultUtil.js'
import * as keyService from '../services/keyService.js'
export const getRSAPublicKey=async(req,res)=>{
    try {
        const publicKey=req.app.get('rsaPublicKey')
        if(!publicKey){
            ResponseHandler.error(res,undefined,'获取公钥失败')
        }
        ResponseHandler.success(res,{publicKey},'获取公钥成功')
    } catch (error) {
        ResponseHandler.error(res,error,'获取公钥失败')
    }
    
}