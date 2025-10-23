import {query} from '../config/db.js'

export const getUserByUsername=async(username)=>{
    return await query('SELECT * FROM users WHERE username = $1',[username])
}

export const createUser=async(username,password)=>{
    return await query('INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id,username',[username,password])
}

