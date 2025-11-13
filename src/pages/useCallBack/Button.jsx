import React from 'react'

const Button = ({content, handleClick}) => {
    console.log("i am from button" + content);
    
  return (

      <button onClick={handleClick}>{content}</button>

  )
}
const MemoizedButton = React.memo(Button)

export default MemoizedButton
