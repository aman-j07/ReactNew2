import React from 'react'
import Child from './Child'
import Data from './Data';

function Parent() {

let name="Aman";
let obj={name:"Aman"};
let num=10;
let bool=true;
function func(){console.log("Hello")};
let sym=Symbol('m')
let marks=0;

  return (
    <div>
        <Child name={name} obj={obj} num={num} bool={bool} func={func} sym={sym}/>
        <Data name={name} marks={marks} total={Math.max(1,marks)}/>
    </div>
  )
}

export default Parent