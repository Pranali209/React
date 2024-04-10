import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

export const postslice = createSlice({
    name : 'Posts' ,
    initialState,
    reducers:{
      postAdded(state, action) {
       
        state.push(action.payload)
      }
    }
    
})

export default postslice.reducer ; 
export const {postAdded}  = postslice.actions;