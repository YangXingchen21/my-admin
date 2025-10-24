//连接数据库
import {Pool} from 'pg'
import 'dotenv/config'
const pool = new Pool({
    user:process.env.DATABASE_USER,
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE,
    password:process.env.DATABASE_PASSWORD,
    port:process.env.DATABASE_PORT
})
export const query = (text,params)=>pool.query(text,params)
