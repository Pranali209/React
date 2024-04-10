import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAdded } from '../App/Slice';
import { nanoid } from '@reduxjs/toolkit';
function AddNewPost() {
    const [title, setPosttitle] = useState('');
    const dispatch = useDispatch();
    const [content, setPostBody] = useState('');

    function HandleSavePost() {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                   title,
                   content
                })
            )
            setPosttitle('');
            setPostBody('')
        }

    }
    return (
        <>
            <h2>Add a new post</h2>
            <div style={{ border: '1px solid black', width: '20rem', height: '10rem', padding: '10px', margin: '5px', borderRadius: '5px' }}>
                <input value={title} onChange={(e) => setPosttitle(e.target.value)} placeholder='Post Title' /><br />
                <br />
                <textarea type='text' value={content} onChange={(e) => setPostBody(e.target.value)} placeholder='Post Body' /><br /><br />
                <button onClick={HandleSavePost}>Save Button</button>
            </div>
        </>

    )
}

export default AddNewPost
