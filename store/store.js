import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import blogSlice from './blogSlice'


//slice haru lai yaa bolaune
const store = configureStore({
    reducer:{
    auth: authSlice,
    blog: blogSlice
        //if another slice connect here
    }
})

export default store;