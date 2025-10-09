import {UserModel} from '../models/userModel.js'
export const getUsers=async()=>await UserModel.findAll();