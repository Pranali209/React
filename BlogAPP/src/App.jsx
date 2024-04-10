import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login, Logout } from './Store/slice'
import { useEffect } from 'react'
import authservice from './AppWrite/Auth'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authservice.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(Login({ userdata }))
        }
        else {
          dispatch(Logout())
        }
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false))
  }, [])
  return !loading ? (

    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO:  <Outlet />
        </main>
       <Footer/>
      </div>
    </div>
  ) : null


}

export default App
