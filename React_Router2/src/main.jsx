import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../src/Home/Home.jsx'
import Contact from '../src/Contact/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route><Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} /></Route>
      
   
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
