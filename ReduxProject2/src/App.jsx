

import PostLists from './Posts/posts'
import { Provider } from 'react-redux'
import { Store } from './App/Store'
import AddNewPost from './Posts/AddNewPost'

function App() {
  
  return (
    <>
    
    <h1>Second redux example</h1>
      
      <PostLists/>
      <AddNewPost/>
     
    </>
  )
}

export default App
