import React, { useEffect, useState } from 'react'

function Clock() {
const [time,setTime]=useState();

useEffect(()=>{
    setInterval(getCurrentTime, 1000);
},[])

const getCurrentTime = () => {
    let hour, minute, second;
    setTime(new Date().toLocaleTimeString({
      hour: hour,
      minute: minute,
      second: second,
    }))
  };

  return (
    <div id="parent">
        <div id="time">{time}</div>
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
