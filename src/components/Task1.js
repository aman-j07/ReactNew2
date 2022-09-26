import React, { useState } from 'react'

const Task1 = () => {
    let [count,setCount]=useState(0)
  return (
    <div><h2>Task 1</h2>
        <button onClick={()=>{setCount(count+1)}}>Clicked {count} times</button>
    </div>
    
  )
}

export default Task1