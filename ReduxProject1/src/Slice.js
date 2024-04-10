import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const Counterslice = createSlice({
    name:'Counter',
    initialState , 
    reducers:{
        addValue : (state)=>{
            state.value  +=1;
        },
        deleteValue : (state) =>{
            state.value  -=1;
        },
        addbyAmount : (state , action)=>{
            state.value += action.payload 
        },
    },
})

export const { addValue,deleteValue, addbyAmount } = Counterslice.actions ; 

export default Counterslice.reducer; 