import React from "react";
import Form from "./components/form/Form";
import { useDispatch } from "react-redux";
import { register } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";



const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = (data) =>{
    dispatch(register(data))
    navigate('/login')
  }
  return (
    <Form type='Register'  onSubmit={handleRegister}/>
  )
}

export default Register;