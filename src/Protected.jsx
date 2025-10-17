import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

//hoc components   children vaneko routes ko addBlog editBlog haru ho
const Protected = (children) => {
const {token} = useSelector((state) =>  state.auth)
const isAuthenticated = token || localStorage.getItem('token')

if(!isAuthenticated){
    return <Navigate to= '/login' />
}
else{
    return<>
     {/* j herna khojiracha login cha  */}
        {children}
    </>
}
}

export default Protected
