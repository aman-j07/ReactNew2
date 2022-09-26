import React, { useCallback, useMemo, useState } from "react";

const Parent = () => {
  let [count, setCount] = useState(0);

  const increment1 = useCallback(() => {
    count++;
    for (let i = 0; i < 200000; i++) {
      console.log(i);
    }
    setCount(count);
  }, [count]);



  const increment2 = () => {
    count++;
    setCount(count);
  };

  const evOd=useMemo(()=>{
    if(count%2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
  })
  return (
    <div>
      <p>{count}</p><p>{evOd}</p>
      <button onClick={increment1}>Increment 1</button>
      <button onClick={increment2}>Increment 2</button>
    </div>
  );
};

export default Parent;
