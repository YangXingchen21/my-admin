export class ResponseHandler{
    static success(res,data,message='OK',statusCode=200){
        return res.status(statusCode).json({
            success:true,
            message,
            data,
            code:statusCode,
            timestamp:new Date().toISOString()
        })
    }
    static error(res,data,message="ERROR",statusCode=500){
        
        return res.status(statusCode).json({
            success:false,
            message,
            data,
            code:statusCode,
            timestamp:new Date().toISOString()
        })
    }
}