import React, { useCallback, useState } from "react";

let dark = {
  backgroundColor: "black",
  color: "white",
};
let light = {
  backgroundColor: "white",
  color: "black",
};
let bool=false;
const Task7usingCallback = () => {
  let [count, setCount] = useState(0);
  let [theme,setTheme]=useState(light);

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  const toggleTheme =useCallback(() => {
    console.log("boolToggle=", bool);
    if (bool === true) {
      setTheme(light)
    } else {
        setTheme(dark)
    }
    bool=!bool;
  },[theme])

  return (
    <div className="lpo" style={theme}>
      <h2>Task 7 using Callback</h2>
      <input value={count} onChange={changeHandler} type="number" />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{count}</p>
      <p>{parseInt(count) + 1}</p>
      <p>{parseInt(count) + 2}</p>
    </div>
  );
};

export default Task7usingCallback;
