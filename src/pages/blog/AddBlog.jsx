import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog } from '../../../store/blogSlice'
import STATUSES from '../../globals/status/statuses'
// import STATUSES from '../../globals/status/statuses'


const AddBlog = () => {
    const {status} = useSelector((state) => state.blog)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCreateBlog = (data) =>{
    dispatch(addBlog(data))
    // if(status === STATUSES.SUCCESS){
    //   return navigate('/')
    // }else{
    //   return navigate('/blog/add')
    // }
  }

  useEffect(() => {
    //check the status value
    //state --> success --> navigate to login page else register page
    if(status === STATUSES.SUCCESS ){
       navigate('/')
    }
  },[status])
  return (
    <Layout>
      <Form type='Create' onSubmit={handleCreateBlog} />
    </Layout>

  )
}

export default AddBlog