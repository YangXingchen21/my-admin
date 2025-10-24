import express from 'express'
import {doLogin,register,test} from '../controllers/userController.js'
import {authMiddleware} from '../middlewares/authMiddleware.js'
const router=express.Router()
//api/users

router.post('/login',doLogin)
    .post('/register',register)
    .get('/testinfo',authMiddleware,test)
export default router