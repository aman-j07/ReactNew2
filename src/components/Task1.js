import React, { useState } from 'react'

const Task1 = () => {
    let [count,setCount]=useState(0)
    const updateCount=()=>{
        count++;
        setCount(count)
    }
  return (
    <div><h2>Task 1</h2>
        <button onClick={updateCount}>Clicked {count} times</button>
    </div>
    
  )
}

export default Task1