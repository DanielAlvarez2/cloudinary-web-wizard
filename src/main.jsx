import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Upload from './components/Upload.jsx'
import SecureUpload from './components/SecureUpload.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='upload' element={<Upload />} />
      <Route path='secure-upload' element={<SecureUpload />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
