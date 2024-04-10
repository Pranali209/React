import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PostLists from './Posts/posts.jsx'
import  { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from  'react-router-dom';
import { Provider } from 'react-redux'
import { Store } from './App/Store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path = '/' element={<PostLists/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={Store}>
    <App />
    </Provider>
    
   
   
  </React.StrictMode>,
)
