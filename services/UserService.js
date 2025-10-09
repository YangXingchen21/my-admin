import {UserModel} from '../models/UserModel.js'
export const getUsers=async()=>await UserModel.findAll();