import { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";
import "../styles/Stopwatch.css";

function Stopwatch() {

  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(()=>{

    let interval;

    if(running){

      interval = setInterval(()=>{

        setTime(prev=>prev+1);

      },1000);

    }

    return ()=>clearInterval(interval);

  },[running]);

  const reset = ()=>{

    setRunning(false);
    setTime(0);

  }

  return(

    <div className="card">

      <h2>Stopwatch</h2>

      <TimeDisplay time={time}/>

      <div className="buttons">

        <button
        onClick={()=>setRunning(true)}
        >
          Start
        </button>

        <button
        onClick={()=>setRunning(false)}
        >
          Pause
        </button>

        <button
        onClick={reset}
        >
          Reset
        </button>

      </div>

    </div>

  )

}

export default Stopwatch;