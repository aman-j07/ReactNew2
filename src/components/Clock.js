import React, { useEffect, useRef, useState } from 'react'


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
  let refTime=useRef();
var intervalTime;
let isRunning=true;
const [time,setTime]=useState(new Date().toLocaleTimeString({
  hour: "00",
  minute: "00",
  second: "00",
}));

const getCurrentTime = (time) => {
  let hour, minute, second;
  setTime(new Date().toLocaleTimeString({
    hour: hour,
    minute: minute,
    second: second,
  }))
};

useEffect(()=>{
  console.log("dasd")
  // if(isRunning){
    intervalTime=setInterval(getCurrentTime, 1000);
    console.log(intervalTime)
  // }
  // else{
  //   clearInterval(intervalTime)
  // }
    
},[])

function calcTime(offset) {
  var d = new Date();
  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  // var nd = new Date(utc + (3600000*offset));
  let hour, minute, second;

  console.log("interval = ", intervalTime)
  isRunning=false;
  clearInterval(intervalTime)
  console.log("interval = ", intervalTime)
  setTime(new Date(utc + (3600000*offset)).toLocaleTimeString({
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


// const setTime=()=>{

//   let Gseconds = parseInt($("#inpSeconds").val());
//   let Gminutes = parseInt($("#inpMinutes").val());
//   let Ghours = parseInt($("#inpHours").val());

//   if(Gdat>countDays){
//     $("#errorDate").html("This month consists of only "+countDays)
//   }
//   else{
//     if(Gmonth>12){
//       $("#errorDate").html("Month cannot exceed 12")
//     }
//     else{
//       console.log(Gdat + " " + Gmonth + " " + Gyear)
//       newDate=new Date(Gmonth+"/"+Gdat+"/"+Gyear)
//       console.log(newDate);
//       Gday=$days[newDate.getDay()];
//       GfullDate =  Gday+ " " + Gdat + " " + Gmonth + " " + Gyear;
//       $("#date").html(GfullDate);
//       console.log("fulldate--",GfullDate)

//   if(Ghours>12 || Gminutes>59 ||Gseconds>59){
//      $("#errorTime").html("Enter a valid time")
//   }
//   else if(isNaN(Ghours) || isNaN(Gminutes) || isNaN(Gseconds)){
//     $("#errorTime").html("Any field cannot be empty")
//   }
//   else{
//     $("#error").html("");
//     clearInterval(intervalUpdate);
//   Gampm = $("#selAMPM :selected").text();
//   $("#minute").html(Gminutes);
//     $("#second").html(Gseconds);
//     $("#hour").html(Ghours);
//     $("#ampm").html(Gampm);
//   $("#inpSeconds").val("");
//   $("#inpMinutes").val("");
//   $("#inpHours").val("");
//   intervalAfterSet = window.setInterval($updateAfterSet, 1000);
//   }

// }
// }

// });

// function $updateAfterSet() {
//   Gseconds++;
//   if (Gseconds < 60) {
//     $("#minute").html(Gminutes);
//     $("#second").html(Gseconds);
//     $("#hour").html(Ghours);
//     $("#ampm").html(Gampm);
//     console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//   } else if (Gseconds == 60) {
//     console.log("seconds exceeded");
//     Gseconds = 0;
//     Gminutes++;

//     if (Gminutes < 60) {
//       $("#minute").html(Gminutes);
//       $("#second").html(Gseconds);
//       $("#hour").html(Ghours);
//       $("#ampm").html(Gampm);
//       console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//     } else if (Gminutes == 60) {
//       console.log("minutes exceeded");
//       Ghours++;
//       Gminutes = 0;

//       if(Gampm=="AM"){
//         if(Ghours<12){
//           console.log("hours<12 and Am")
//           $("#minute").html(Gminutes);
//           $("#second").html(Gseconds);
//           $("#hour").html(Ghours);
//           $("#ampm").html(Gampm);
//           console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//         }
//         else if(Ghours==12){
//           console.log("hours=12 and Am")
//           Gampm="PM"
//           $("#minute").html(Gminutes);
//           $("#second").html(Gseconds);
//           $("#hour").html(Ghours);
//           $("#ampm").html(Gampm);
//           console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//         }
//         else if(Ghours>12){
//           console.log("hours>12 and Am")
//           Ghours=1;
//           Gampm="PM"
//           $("#minute").html(Gminutes);
//           $("#second").html(Gseconds);
//           $("#hour").html(Ghours);
//           $("#ampm").html(Gampm);
//           console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//         }
//       }
//       else if(Gampm=="PM"){
//         if(Ghours<12){
//           console.log("hours<12 and pm")
//           $("#minute").html(Gminutes);
//           $("#second").html(Gseconds);
//           $("#hour").html(Ghours);
//           $("#ampm").html(Gampm);
//           console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//         }
//         else if(Ghours==12){
//           console.log("hours=12 and pm")
//           if(Gdat<$daysInMonth(Gmonth,Gyear)){

//             Gdat++;
//            }
//            else if(Gdat==$daysInMonth(Gmonth,Gyear)){
//             if(Gmonth<12){
//             Gmonth++;
//             Gdat=1;
//              newDate=new Date(Gmonth+"/"+Gdat+"/"+Gyear)
//              console.log(newDate)
//              Gday=$days[newDate.getDay()];
//              GfullDate =  Gday+ " " + Gdat + " " + Gmonth + " " + Gyear;
//              $("#date").html(GfullDate);
//              console.log("fulldate--",GfullDate)
//             }
//             else if(Gmonth==12){
//               Gdat=1;
//               Gmonth=1;
//               Gyear++;
//               newDate=new Date(Gmonth+"/"+Gdat+"/"+Gyear)
//               console.log(newDate)
//               console.log(newDate.getDay())
//               Gday=$days[newDate.getDay()];
//               GfullDate =  Gday+ " " + Gdat + " " + Gmonth + " " + Gyear;
//               $("#date").html(GfullDate);
//               console.log("fulldate--",GfullDate)
//             }
//             }
//           Gampm="AM"
//           $("#minute").html(Gminutes);
//           $("#second").html(Gseconds);
//           $("#hour").html(Ghours);
//           $("#ampm").html(Gampm);
//           console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//         }

//         else if(Ghours>12){
//           console.log("hours>12 and pm")
//           Ghours=1;
//           Gampm="AM"
//           $("#minute").html(Gminutes);
//           $("#second").html(Gseconds);
//           $("#hour").html(Ghours);
//           $("#ampm").html(Gampm);
//           console.log(Ghours + ":" + Gminutes + ":" + Gseconds+" "+Gampm);
//         }

//       }
//     }
//   }
// }

const changeTimezone=(e)=>{
  let offset=timezones[e.target.selectedIndex][1]
  calcTime(offset);
}


  return (
    <div id="parent">
        <div id="time" ref={refTime}>{time}</div>
        <select onChange={changeTimezone}>
          {timezones.map((item,i)=>{
            return <option key={i}>{item[0]}</option>
          })}
        </select>
    </div>
  )
}

export default Clock


// export class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: this.getCurrentTime(),
//     };
//   }
//   getCurrentTime = () => {
//     let hour, minute, second;
//     let time = new Date().toLocaleTimeString({
//       hour: hour,
//       minute: minute,
//       second: second,
//     });
//     return time;
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ time: this.getCurrentTime() });
//     }, 1000);
//   }

//   render() {
//     return (
//       <div id="parent">
//         <div id="time">{this.state.time}</div>
//       </div>
//     );
//   }
// }

// export default Clock;
