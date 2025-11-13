import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import Footer from './components/footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../../../store/blogSlice'

const Home = () => {

   const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useSelector((state) => state.blog);
  console.log(data);
  useEffect(() => {
    dispatch(fetchBlog());
    setIsLoading(false);
  }, []);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
  <Layout>
   <div className='flex flex-wrap justify-center space-x-6 mt-7' >
   {
    data && data.map((item) => {
      
     return <Card key={item.id} blog={item} />

      
    })
   }
   <Footer/>
   </div>
  </Layout>
  )
}

export default Home