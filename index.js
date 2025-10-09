import express from 'express'
import cors from 'cors'
import config from './config/config.js'
import UserRoute from './routes/userRoute.js'
const app=express()

//express内置中间件函数，用于解析JSON格式的请求体数据
app.use(express.json())
//开启跨域支持
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/api/users',UserRoute)
app.listen(config.port,()=>{
    console.log(`Server running at http://localhost:${config.port}`)
})