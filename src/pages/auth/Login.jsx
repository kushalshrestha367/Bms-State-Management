import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'

const Login = () => {
  //const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    //console.log(data, "outisde the handle change");
    try {
      const response = await axios.post(baseUrl + "/login", data)
      //console.log(response);
      if (response.status === 200) {
        navigate('/');
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
  return (
    //props banako
    <Form type='Login' onSubmit={handleLogin} />
  )
}

export default Login