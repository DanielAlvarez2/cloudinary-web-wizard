import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import {errorHandler} from './middleware/error.js'
import videoRoutes from './routes/video.js'
import signUploadRoutes from './routes/sign-upload.js'

const app = express()
const port = process.env.PORT || 5174
app.use(cors())
app.use(express.json()) // parses incoming req.body from JSON to JS Object
app.use('/api/videos', videoRoutes)
app.use('/api/sign-upload',signUploadRoutes)
app.use(errorHandler)
app.listen(port,()=>{
    connectDB()
    console.log(`Server Listening on Port: ${port}`)
}) 