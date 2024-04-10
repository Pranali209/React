import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './Components/AuthLayout.jsx'
import Home from './Pages/Home.jsx'
import Login   from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import AddPost from "./pages/AddPost";
import EditPost from './Pages/EditPost.jsx'
import AllPost from "./pages/AllPost";
import Post from "./Pages/Post.jsx"
const router = createBrowserRouter(
  [
    {
        path: '/',
        element:<App/>,
        children:[
          {
             path:"/",
             element :<Home />

          },
          {
            path: "/login",
            element: (
              <AuthLayout authentication={false}>
                  <Login />
              </AuthLayout>
          ),
          },
          {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
          },
          {
            path: "/all-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
          {
            path :"add-post",
            element:(
              <AuthLayout authentication>
              {" "}
              <AddPost />
          </AuthLayout>
            )
          },
          {
            path :"/edit-post/:slug",
            element:(
              <AuthLayout authentication>
              {" "}
              <EditPost />
          </AuthLayout>
            )
          },{
            path: "/post/:slug",
            element: <Post />,
          }
      ]
  
    }
    

  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
