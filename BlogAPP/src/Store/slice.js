import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    status:"false",
    userdata:[]
}

const authSlice = createSlice({
    name: 'AuthSlice' ,
    initialState,
    reducers:{
    Login : (state ,action)=>{
           state.status = "true" ,
           state.userdata = action.payload
    },
    Logout:(state,action)=>{
        state.status = "false" ,
        state.userdata = null
    }

    }
})

export default  authSlice.reducer;
export const {Login , Logout} = authSlice.actions