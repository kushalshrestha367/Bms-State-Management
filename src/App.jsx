import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import Home from './pages/blog/Home'

import { Provider } from 'react-redux';
//store vitro ko store.js lai as props pathako
import store from '../store/store'
import Protected from './Protected'
import { lazy, Suspense } from 'react'
import Parent from './pages/useCallBack/Parent'
import Hooks from './hookP/Hooks'

const SingleBlog = lazy(() => import ('./pages/blog/SingleBlog'))

// function ErrorFallBack(error){
//   return(
//      <div>
//        <h2>Something went wrong...</h2>
//     <p>{error.message}</p>
//      </div>
//   )
// }


function App() {
  return (
   <Provider store={store}>
     <BrowserRouter>
      {/* <ErrorBoundary fallbackComponent={ErrorFallBack}> */}
        <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/blog/add' element={<AddBlog />} />
        <Route path='/blog/edit' element={<EditBlog />} />
        <Route path='/blog/id' element={<SingleBlog />} />
        <Route path='/usecallback' element={<Parent />} />
        <Route path='/hooks' element={<Hooks />} />
      </Routes>
      </Suspense>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
   </Provider>
  )
}

export default App
