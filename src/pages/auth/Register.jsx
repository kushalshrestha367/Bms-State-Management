import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { useDispatch,useSelector } from "react-redux";
import { register } from "../../../store/authSlice";
import { useNavigate} from "react-router-dom";
import STATUSES from "../../globals/status/statuses";
import { setStatus } from "../../../store/blogSlice";



const Register = () => {
  const {status} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = (data) =>{
    dispatch(register(data))
  }
  useEffect(() => {
    //check the status value
    //state --> success --> navigate to login page else register page
    if(status === STATUSES.SUCCESS){
      
       navigate('/login')
       dispatch(setStatus(null))
    }
    else{
       navigate('/register')
    }
  },[status])
  return (
    <Form type='Register'  onSubmit={handleRegister}/>
  )
}

export default Register;