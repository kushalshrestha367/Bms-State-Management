import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
   name:'auth',
   initialState:{
    user:null,
    token:null,
    status:null
   },
   //reducer
   reducers:{
    //method or function lida huncha 
    setStatus(state,action){
        state.status = action.payload
    },
    setUser(state,action){
        state.user = action.payload
    },
    setToken(state,action){
        state.token = action.payload
    }
   }
})

//action making
export const {setStatus, setUser, setToken} = authSlice.actions
export default authSlice.reducer