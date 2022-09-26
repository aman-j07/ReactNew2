import React, { useState } from "react";

const Task2 = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <h2>Task 2</h2>
      <div id="task2">
        <button onClick={()=>{setCount(count-1)}}>-</button>{count}
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
      </div>
    </>
  );
};

export default Task2;
