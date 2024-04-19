import React, { useEffect , useState } from 'react'
import service from '../Appwrite/Upload&Post'
import  {Container ,PostCard }from '../Component/index'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
         service.GetAllPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    }, [])
   
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPost
