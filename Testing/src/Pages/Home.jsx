import React from 'react'
import service from '../Appwrite/Upload&Post'
import { useState, useEffect } from 'react'
import { Container, PostCard , Button } from '../Component/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const loggedIn = useSelector((state) => state.auth.status)
    useEffect(() => {
        service.GetAllPosts().then((posts) => {
            if (posts) {

                setPosts(posts.documents)
            }
        })
    }, [])

    if (loggedIn) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <header className=" py-4 text-center">
                                <h1 className="text-7xl font-bold">My Awesome Blog</h1>
                                <p className="text-lg p-2">Thoughts, Stories, and More</p>
                                <Link to={'/login'}>
                                <Button className='bg-blue-950 p-2 duration-200 hover:bg-blue-700 rounded-md'>Get Started</Button>
                                </Link>
                               
                            </header>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
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

export default Home
