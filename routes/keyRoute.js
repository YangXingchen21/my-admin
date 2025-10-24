import express from 'express'
import { getRSAPublicKey } from '../controllers/keyController.js'
const keyRoute=express.Router()
keyRoute.get('/get-public-key',getRSAPublicKey)
export default keyRoute