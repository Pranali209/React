import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '../Components/Container'
import { Service } from '../AppWrite/Upload&Post'
import PostForm from '../Components/PostForm'
function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (slug) {
            Service.GetPost(slug).then((post) => {
                post ? setPosts(post) : null
            })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])


    return  post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost
