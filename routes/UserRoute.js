import express from 'express'
import {doLogin} from '../controllers/userController.js'
const router=express.Router()
//api/users

router.post('/login',doLogin)
export default router