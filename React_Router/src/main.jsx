import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';

import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Contact from './Component/Contact/Contact.jsx';
import User from './Component/User/User.jsx';
import Github, { GithubFollowers } from './Component/GitHub/Github.jsx';


const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='About' element={<About />} />
    <Route path='Contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}></Route>
    <Route  loader={GithubFollowers}
    path='Github' element={<Github/>}></Route>
 </Route>
  ))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
