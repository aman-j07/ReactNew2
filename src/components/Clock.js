import React, { useEffect, useState } from 'react'


const timezones=[
["UTC(Universal Coordinated Time)",0],
["ECT(European Central Time)",1],
["EET(Eastern European Time)",2],
["ART((Arabic) Egypt Standard Time)", 2],
["EAT(Eastern African Time)",3],
["MET(Middle East Time)",3.5],
["NET(Near East Time)",4],
["PLT(Pakistan Lahore Time)",5],
["IST(India Standard Time)",5.5],
["BST(Bangladesh Standard Time)",6],
["VST(Vietnam Standard Time)",7],
["CTT(China Taiwan Time)",8],
["JST(Japan Standard Time)",9],
["ACT(Australia Central Time)",9.5],
["AET(Australia Eastern Time)",10],
["SST(Solomon Standard Time)",11],
["NST(New Zealand Standard Time)",12],
["MIT(Midway Islands Time)",-11],
["HST(Hawaii Standard Time)",-10],
["AST(Alaska Standard Time)",-9],
["PST(Pacific Standard Time)",-8],
["PNT(Phoenix Standard Time)",-7],
["MST(Mountain Standard Time)",-7],
["CST(Central Standard Time)",-6],
["EST(Eastern Standard Time)",-5],
["IET(Indiana Eastern Standard Time)",-5],
["PRT(Puerto Rico and US Virgin Islands Time)",-4],
["CNT(Canada Newfoundland Time)",-3],
["AGT(Argentina Standard Time)",-3],
["BET(Brazil Eastern Time)",-3],
["CAT(Central African Time)",-1],
];
function Clock() {
var intervalTime,intervalTimezone;
let offset;
const [time,setTime]=useState();
const [timezone,setTimezone]=useState();

const getCurrentTime = () => {
  let hour, minute, second;
  setTime(new Date().toLocaleTimeString({
    hour: hour,
    minute: minute,
    second: second,
  }))
};

useEffect(()=>{
  intervalTime=setInterval(getCurrentTime, 1000);
},[])

function calcTime() {
  console.log("update timezone")
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  // var nd = new Date(utc + (3600000*offset));
  let hour, minute, second;
  // console.log("interval = ", intervalTime)
  // clearInterval(intervalTime)
  // console.log("interval = ", intervalTime)
  setTimezone(new Date(utc + (3600000*offset)).toLocaleTimeString({
    hour: hour,
    minute: minute,
    second: second,
  }))
  // console.log(nd.toLocaleString());
  // var time=new Date(nd)
  // console.log("time :",time)
  // let hr=console.log(time.getHours())
  // let min=console.log(time.getMinutes())
  // let sec=console.log(time.getSeconds())
  // console.log(time.getTime().toString)
  
}

const changeTimezone=(e)=>{
  clearInterval(intervalTimezone)
  offset=timezones[e.target.selectedIndex][1]
  intervalTimezone=setInterval(calcTime,1000);
}


  return (
    <div id="parent">
        <div id="time">{time}</div>
        <select onChange={changeTimezone}>
          {timezones.map((item,i)=>{
            return <option key={i}>{item[0]}</option>
          })}
        </select>
        <div id="timezone">{timezone}</div>
    </div>
  )
}

export default Clock
