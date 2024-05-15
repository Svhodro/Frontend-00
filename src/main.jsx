import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routs from './Route/Routes'
import { 
  RouterProvider,
  Routes,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto '>
    <RouterProvider router={routs} />
    </div>
  </React.StrictMode>,
)
