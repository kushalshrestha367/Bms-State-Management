import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/status/statuses";



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


export function register(data){
     return async function registerThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
           const response =await axios.post("https://react30.onrender.com/api/user/register", data)
        if(response.status === 201){
            dispatch(setUser(data))
            dispatch(setStatus(STATUSES.SUCCESS))
        }
        else{
          dispatch(setStatus(STATUSES.ERROR))
        } 
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR)) 
        }
     }
}

//for login api
export function login(data){
    return async function loginThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
           const response = await axios.post('https://react30.onrender.com/api/user/login',data)
        if(response.status === 201 && response.data.tokens){
            dispatch(setToken(response.data.token))
          dispatch(setStatus(STATUSES.SUCCESS))
        }
        else{
            dispatch(setStatus(STATUSES.ERROR))
        } 
        } catch (error) {
             dispatch(setStatus(STATUSES.ERROR))
        }
    }
}