//连接数据库
import {Pool} from 'pg'
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'myadmindb',
    password:'123456',
    port:5432
})
export const query = (text,params)=>pool.query(text,params)