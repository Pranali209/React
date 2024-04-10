import React, { useEffect } from 'react'
import { Service } from '../AppWrite/Upload&Post'
import Container from "../Components/Container"
import PostCard from "../Components/PostCard"
function AllPost() {
    const [post, setPosts] = useState([])
    useEffect(() => {
        Service.GetAllPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        });

    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post) => {
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
