import {configureStore } from '@reduxjs/toolkit'

import  TodoReducer  from './Slice'
export const store = configureStore({
    reducer:TodoReducer
   
})