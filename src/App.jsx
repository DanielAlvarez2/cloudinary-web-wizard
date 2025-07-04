import { useState } from 'react'
import './App.css'
import {Link, Outlet} from 'react-router-dom'
export default function App() {
 
  return (
    <>
      <h1>Upload files using Cloudinary Service in MERN stack project</h1>
      <Link to='/'>Home</Link> | <Link to='upload'>Upload</Link> | <Link to='secure-upload'>Secure Upload</Link>
      <br/><br/>
      <Outlet />
    </>
  )
}