import {query} from '../config/db.js'
export class UserModel{
    static async findAll(){
        return await query('SELECT * FROM users;')
    }
}