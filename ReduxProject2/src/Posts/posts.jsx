import { useSelector } from 'react-redux'

export default function PostLists(params) {
    const Posts = useSelector(state => state.posts)
    console.log("post" ,Posts)
    




    return (
  <>
   <h2>Post List</h2>
   {
     Posts.map((post)=>{
        return(
            <>
            <div style={{ border: '1px solid black', width: '20rem', height: '10rem', padding: '10px', margin: '5px', borderRadius: '5px' }}>
            <h2>{post.title}</h2>
               <p>{post.content}</p>
            </div>
              
            </>
        )
     })
   }
  </>
       
    )




}