import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status : false,
    userdata: null
}
const authSlice = createSlice({
    name: 'auth' ,
    initialState,
    reducers:{
    Login : (state ,action)=>{
         console.log(action , "action in slice " );
           state.status = "true" ,
           state.userdata = action.payload
    },
    Logout:(state)=>{
        state.status = "false" ,
        state.userdata = null
    }

    }
})

export default  authSlice.reducer;
export const {Login , Logout} = authSlice.actions