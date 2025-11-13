import React, { useCallback, useState } from 'react'
import MemoizedTitle from './Title';
import MemoizedDisplay from './Display';
import MemoizedButton from './Button';

const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(22);
  const incrementAge = useCallback(() => {
    setAge(age + 5)
  },[age])
   const increaseSalary = useCallback(() => {
    setSalary(salary + 1000)
   },[salary])

   return (
    <div>
      <MemoizedTitle />
      <MemoizedDisplay text='age' displayValue={age} />
      <MemoizedButton content='Increase Age' handleClick={incrementAge}/>
      <MemoizedDisplay text='salary' displayValue={salary} />
      <MemoizedButton content='Increase Salary' handleClick={increaseSalary}/>
    
     </div>
  )
}

export default Parent
