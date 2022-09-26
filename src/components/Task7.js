import React, { useCallback, useMemo, useState } from "react";

let dark = {
  backgroundColor: "black",
  color: "white",
};
let light = {
  backgroundColor: "white",
  color: "black",
};
const Task7 = () => {
  let [count, setCount] = useState(0);
  let [bool, setBool] = useState(true);

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  const toggleTheme = useCallback(() => {
    console.log("boolToggle=", bool);
    if (bool === true) {
      setBool(false);
    } else {
      setBool(true);
    }
  }, [bool]);

  const checkBool = useMemo(() => {
    console.log("boolCheck=", bool);
    return bool;
  });

  return (
    <div className="lpo" style={checkBool ? light : dark}>
      <h2>Task 7</h2>
      <input value={count} onChange={changeHandler} type="number" />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{count}</p>
      <p>{parseInt(count) + 1}</p>
      <p>{parseInt(count) + 2}</p>
    </div>
  );
};

export default Task7;
