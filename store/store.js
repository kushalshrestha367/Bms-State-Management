import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'

//slice haru lai yaa bolaune
const store = configureStore({
    reducer:{
        auth: authSlice,
        //if another slice connect here
    }
})

export default store;