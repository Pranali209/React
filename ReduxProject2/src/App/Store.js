import { configureStore } from "@reduxjs/toolkit";

import PostReducer from  "./Slice";

export const Store = configureStore({
    reducer:{
        posts : PostReducer
    }
}) 