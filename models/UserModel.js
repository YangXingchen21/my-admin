import {query} from '../config/db.js'

export const getUserByUsername=async(username)=>{
    return await query('SELECT id,username,password FROM users WHERE username = $1',[username])
}

export const createUser=async(username,email,password)=>{
    return await query('INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *',[username,email,password])
}