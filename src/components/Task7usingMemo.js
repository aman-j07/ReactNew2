import React, { useState,useMemo } from "react";

let dark = {
  backgroundColor: "black",
  color: "white",
};
let light = {
  backgroundColor: "white",
  color: "black",
};
const Task7usingMemo = () => {
  let [count, setCount] = useState(0);
  let [bool,setBool]=useState(true);
  

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  const toggleTheme = ()=>{
    setBool(!bool);
  }

  const checkBool=useMemo(()=>{
    return bool;
  },[bool])

  return (
    <div className="lpo" style={checkBool ? light:dark}>
      <h2>Task 7 using useMemo</h2>
      <input value={count} onChange={changeHandler} type="number" />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{count}</p>
      <p>{parseInt(count) + 1}</p>
      <p>{parseInt(count) + 2}</p>
    </div>
  );
};

export default Task7usingMemo;