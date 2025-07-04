import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:'dosst0owt',
    api_key:'131427865653845',
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure:true
})

export const generateSignature = (req,res,next)=>{
    const {folder} = req.body

    if(!folder){
        res.status(400)
        return next(new Error('folder name is required'))
    }

    try{
        const timestamp = Math.round((new Date).getTime() / 1000)
        const signature = cloudinary.utils.api_sign_request({
            timestamp,folder
        },process.env.CLOUDINARY_API_SECRET)
        res.status(200).json({timestamp,signature})
    }catch(err){
        console.log(err)
        res.status(500)
        next(err)
    }
}