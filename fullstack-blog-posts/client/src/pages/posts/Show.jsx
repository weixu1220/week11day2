import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

function Show() {

    const [post, setPost] = useState({})
    const [comments,setComments ] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()
    const textRef = useRef()

    async function getPost() {
        try {
            const response = await axios.get(`/api/posts/${id}`)
            console.log(response.data)
            setPost(response.data)
        } catch(err) {
            console.log(err.message)
        }
    }
    async function handleComment(e){
        e.preventDefault()
        try {
            const newComment = {
                text: textRef.current.value
            }
            console.log(newComment)
            await axios.post(`/api/comments/${id}`, newComment)
            setComments([...comments, newComment])
            getPost()
            textRef.current.value = ""
            navigate(`/posts/${id}`)
        } catch(err) {
            console.log(err.message)
        }
    }

    async function handleDeletePost() {
        await axios.delete(`/api/posts/${id}`)
        navigate('/posts')
    }
    
    async function handleDeleteComment(commentId) {
        console.log(commentId,'~~~~~~~~~~~~~~~~~~~~~~')
        await axios.delete(`/api/comments/${id}/${commentId}`)
        getPost()
        navigate(`/posts/${id}`)
    }
    useEffect(() => {
        getPost()
    }, [])

    if (!post.subject) {
        return <div>Loading...</div>
    }

    return (
            <>
                <div className="a-post">
                    <h2>{post.subject}</h2>
                    <h5 style={{ opacity: '.3'}}>Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                    <p className='p-body'>{post.body}</p><br /><br />

                    {
                        post?.comments?.length ?
                        <>
                            <div>Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.text}</div>
                                    <input onClick={()=>handleDeleteComment(comment._id)} type="submit" value="X" />
                                    <a href={`/comments/${post._id}/${comment._id}/edit`}>+</a>
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    <details>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form onSubmit={handleComment}>
                            <textarea name="text" id="lc" cols="1" rows="1" ref={textRef} />
                            <button>Submit</button>
                        </form>
                    </details>
                    
                    <div className="buttons">

                        <button onClick={()=>handleDeletePost}>Delete</button>
                       
                   
                        <button onClick={() => navigate(`/posts/${id}/edit`)}>Edit</button>
               
                        
                        <button onClick={() => navigate('/posts')}>Back</button>
                     
                    </div>
                </div>
            </>
    )
}

export default Show