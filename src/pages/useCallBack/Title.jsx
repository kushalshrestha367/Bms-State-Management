import React from 'react'

const Title = () => {
  console.log("I am from title")
  return (
    <div>
       <h1>Learning useCallback</h1>
    </div>
  )
}

const MemoizedTitle = React.memo(Title)  

export default MemoizedTitle
