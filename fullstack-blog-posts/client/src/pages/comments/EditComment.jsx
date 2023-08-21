import { useEffect, useState, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

function EditComment() {
    const [comment, setComment]=useState({})
    const {postId, commentId} = useParams()
    const textRef = useRef()
    const navigate = useNavigate()
    async function getComment() {
        try {
            const response = await axios.get(`/api/comments/${postId}/${commentId}`)
            console.log(response.data)
            setComment(response.data)
        } catch(err) {
            console.log(err.message)
        }
    }   

    useEffect(()=>{
        getComment()
    },[])

    async function handleSubmit(e){ 
        e.preventDefault()
        try {
            const newComment = {
                text: textRef.current.value
            }
            await axios.put(`/api/comments/${postId}/${commentId}`, newComment)
            navigate(`/posts/${postId}`)
        } catch(err) {
            console.log(err.message)
        }
    }
        
        
    return ( 
        <div>
            <h1>Edit Comment</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="clr">Body:</label><br />
                    <textarea name="text" id="clr" cols="30" rows="10" defaultValue={comment.text} ref= {textRef} /><br /><br />
                    <button>Submit</button>
                </form>
                <form action={`/posts/${postId}`}>
                    <button>Back</button>
                </form>
            </div>
        </div>
    );
}

export default EditComment;