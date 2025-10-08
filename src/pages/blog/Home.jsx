import React from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import Card1 from './components/card/Card1'
import Card2 from './components/card/Card2'
import Card3 from './components/card/Card3'
import Card4 from './components/card/Card4'
import Card5 from './components/card/Card5'
import Footer from './components/footer'

const Home = () => {
  return (
  <Layout>
   <div className='flex flex-wrap justify-center space-x-6 mt-7' >
   <Card />
   <Card1 />
   <Card3 />
   <Card2 />
   <Card4/>
   <Card5 />
   <Footer/>
   </div>
  </Layout>
  )
}

export default Home