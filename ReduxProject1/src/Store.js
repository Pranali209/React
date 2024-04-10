import {configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slice'
export const Store = configureStore({
    reducer :{
        counter : CounterReducer
    }
})