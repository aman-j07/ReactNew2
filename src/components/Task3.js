import React, { useState } from 'react'

let intervalCountdown;
const Task3 = () => {
    let [time,setTime]=useState({hour:0,minute:0,second:0})

    const setCountdown=()=>{
        clearInterval(intervalCountdown)
        let date=new Date();
        time.hour=date.getHours();    
        time.minute=date.getMinutes();
        time.second=date.getSeconds();
        intervalCountdown=setInterval(startCountDown,1000)
      }
    const startCountDown=()=>{
         if(time.second>=1){
            time.second--;
        }
        else{
            time.second=59;
            if(time.minute>=1){
                time.minute--;
            }
            else{
                time.minute=59;
                if(time.hour>1)
                {
                    time.hour--;
                }
                else{
                    time.hour=0;
                }
            }
        }
        setTime(time)
      }

  return (
    <div>

    </div>
  )
}

export default Task3