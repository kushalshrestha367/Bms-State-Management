import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
 < Link to = {`/blog/${item._id}`}>
     <div className="max-w-sm rounded overflow-hidden shadow-lg mb-7">
    <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrJWabKLgdfS-ROpnjGYoWJZr9HTHAJwbnQ&s"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{item.title}</div>
      <p className="text-gray-700 text-base">
        {item.description}
      </p>
      <p className="text-gray-700 text-base">
        {item.subtitle}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#createdAt: {item.category}</span>
    </div>
  </div>
 </Link>
  )
}

export default Card