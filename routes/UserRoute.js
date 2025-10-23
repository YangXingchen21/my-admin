import express from 'express'
import {doLogin,register} from '../controllers/userController.js'
const router=express.Router()
//api/users

router.post('/login',doLogin)
    .post('/register',register)
export default router