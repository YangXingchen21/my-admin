import express from 'express'
import cors from 'cors'
import config from './config/config.js'
import UserRoute from './routes/userRoute.js'
import keyRoute from './routes/keyRoute.js'
import crypto from 'crypto'
const app=express()
//服务启动生成密钥对
const {privateKey,publicKey}=crypto.generateKeyPairSync('rsa',{
    modulusLength: 2048, // 密钥长度，2048位是安全与性能的平衡点
  publicKeyEncoding: {
    type: 'spki', // 推荐的公钥编码格式
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8', // 推荐的私钥编码格式
    format: 'pem'
  }
})

app.set('rsaPublicKey', publicKey);
app.set('rsaPrivateKey', privateKey);

//express内置中间件函数，用于解析JSON格式的请求体数据
app.use(express.json())
//开启跨域支持
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/api/users',UserRoute)
app.use('/api/key',keyRoute)
app.listen(config.port,()=>{
    console.log(`Server running at http://localhost:${config.port}`)
})