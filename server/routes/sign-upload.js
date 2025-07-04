import express from 'express'
import {generateSignature} from '../controllers/sign-upload.js'

const router = express.Router()
// /api/sign-upload/
router.post('/',generateSignature)

export default router