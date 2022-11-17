import React from 'react'
import Child from './Child'

function Parent() {

let name="Aman";
let obj={name:"Aman"};
let num=10;
let bool=true;
function func(){console.log("Hello")};
let sym=Symbol('m')
function data({ name, marks = 0, total = Math.max(1, marks) }){console.log(total)};

  return (
    <div>
        <Child name={name} obj={obj} num={num} bool={bool} func={func} sym={sym} data={data}/>
    </div>
  )
}

export default Parent