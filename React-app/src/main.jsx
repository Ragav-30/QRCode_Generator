import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Courses from './Courses.jsx'
import html from './assets/html.jpg'
import ComponentList from './ComponentList.jsx'
import QRCode from './QRCode.jsx' 
import './QRCode.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
     <QRCode />
    </>
   
  </StrictMode>,
)
