import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from './../../config';


const AddBlog = () => {
  const handleCreateBlog = async (data) => {
    const response = await axios.post(`${baseUrl}/blog`, data)
    //console.log(response);



  }
  return (
    <Layout>
      <Form type='Create' onSubmit={handleCreateBlog} />
    </Layout>

  )
}

export default AddBlog