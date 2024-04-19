import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Route , RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'
import AuthLayout from './Component/AuthLayout.jsx'
import Home from './Pages/Home.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import AddPost from './Pages/AddPost.jsx'
import AllPost from './Pages/AllPost.jsx'
import store from './store/store.js'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import { useSelector } from 'react-redux'



const router = createBrowserRouter(
 [{
  path: '/',
        element:<App/>,
        children:[
          {
            path:"/",
             element : <Home /> 
           
          },
          {
            path: "/login",
            element: (
              <AuthLayout authentication={false}>
                  <LoginPage />
              </AuthLayout>
          ),
          },
          {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUpPage />
                </AuthLayout>
            ),
          },
          {
            path : "/add-post",
            element: (
               
                  <AddPost />
       
          ),
          },{
            path : "/all-posts",
            element: (
              <AllPost />
                
             
          ),
          },
          {
            path: "/edit-post/:slug",
            element: (
               
                   
                    <EditPost />
              
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },

        ]
 }]
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router}/>
     </Provider>
  </React.StrictMode>,
)
