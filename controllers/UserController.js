import * as UserService from '../services/userService.js'
export const getUsers=async (req,res)=>{
    const users= await UserService.getUsers();
    res.json(users.rows);
}