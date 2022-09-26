import React, { useState } from "react";

const Task2 = () => {
  let [count, setCount] = useState(0);

  const updateCounter = (e) => {
    if (e.target.innerHTML === "+") {
      count++;
    } else if (e.target.innerHTML === "-") {
      count--;
    } else if (e.target.innerHTML === "Reset") {
      count = 0;
    }
    setCount(count);
  };

  return (
    <>
      <h2>Task 2</h2>
      <div id="task2">
        <button onClick={updateCounter}>-</button>
        {count}
        <button onClick={updateCounter}>+</button>
        <button onClick={updateCounter}>Reset</button>
      </div>
    </>
  );
};

export default Task2;
