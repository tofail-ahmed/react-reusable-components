import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<div className='container mx-auto mt-2'>
<RouterProvider router={router}/>
    <footer className='text-center text-6xl text-orange-600 bg-slate-700  mb-0  mt-8'>This is Footer</footer>
</div>
  </React.StrictMode>,
)
