import {query} from '../config/db.js'

export const getUserByUsername=async(username)=>{
    return await query('SELECT id,username,password FROM users WHERE username = $1',[username])
}