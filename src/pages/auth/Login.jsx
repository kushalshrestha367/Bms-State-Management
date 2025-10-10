import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'

const Login = () => {
  //const baseUrl = import.meta.env.VITE_BASE_URL;
  const {user, status} = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
     dispatch(login(data))   
  }
  useEffect(() => {
    if(status === STATUSES.SUCCESS){
         navigate('/')
     }
     else{
       navigate('/login')
     }
  },[status])
  return (
    //props banako
    <Form type='Login' user={user} onSubmit={handleLogin} />
  )
}

export default Login