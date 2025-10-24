import {query} from '../config/db.js'

export const getUserByUsername=async(username)=>{
    return await query('SELECT id,username,password FROM users WHERE username = $1',[username])
}

export const createUser=async(username,password)=>{
    return await query('INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id,username',[username,password])
}

export const getUserById=async(id)=>{
    return await query('SELECT id,username FROM users WHERE id=$1',[id])
}
