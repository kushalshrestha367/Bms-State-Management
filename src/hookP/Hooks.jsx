import React from 'react'
import useCounter from '../hooks/useCounter'
import useInput from '../hooks/useInput'

const Hooks = () => {

    const { count,increment,decrement} = useCounter(0)
   const {value, onChange} = useInput('')

  return (
    <div>
         <p>Count : {count}</p>
         <button onClick={increment}>Addition</button>
         <button onClick={decrement}>Substraction</button>



         <input type="text" onChange={onChange} value={value} style={{border: '2px solid black', borderRadius: '5px'}}/>
         <p>{value}</p>
    </div>
  )
}

export default Hooks
