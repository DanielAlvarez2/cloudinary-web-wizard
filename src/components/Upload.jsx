import React,{useState} from 'react'
import axios from 'axios'
import {Bars} from 'react-loader-spinner'
export default function Upload(){
    const [video,setVideo] = useState('')
    const [img,setImg] = useState('')
    const [loading,setLoading] = useState(false)
    const uploadFile= async(type)=>{
        const data = new FormData()
        data.append('file',type=='image'?img:video)
        data.append('upload_preset',type=='image'?'images_preset':'videos_preset')
        try{
            let cloudName = 'dosst0owt'
            let resourceType = type == 'image' ? 'image' : 'video'
            let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`
            const res = await axios.post(api,data)
            const {secure_url} = res.data
            console.log(secure_url)
            return secure_url
        }catch(err){
            console.log(err)
        }
    }
    async function handleSubmit(e){
        e.preventDefault()
        try{
            setLoading(true)
            const imgUrl = await uploadFile('image')
            const videoUrl = await uploadFile('video')
            await axios.post(`/api/videos`,{imgUrl,videoUrl})
            setImg('')
            setVideo('')
            console.log('File Upload Success!')
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    return(
    <>
        <h2>Upload</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='video'>Video:</label><br/>
                <input  type='file'
                        accept='video/*'
                        id='video'
                        onChange={e=>setVideo(e.target.files[0])} />
            </div>
            <br/>
            <div>
                <label htmlFor='img'>Image:</label><br/>
                <input type='file'
                        accept='image/*'
                        id='img'
                        onChange={e=>setImg(e.target.files[0])} />
            </div>
            <br/>
            <button type='submit'>Upload</button>
        </form>
        {loading && <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />}
    </>
    )
}