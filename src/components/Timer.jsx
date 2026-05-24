import { useEffect,useState } from "react";
import TimeDisplay from "./TimeDisplay";
import "../styles/Timer.css";

function Timer(){

const [seconds,setSeconds] = useState("");
const [time,setTime] = useState(0);
const [running,setRunning] = useState(false);

useEffect(()=>{

let interval;

if(running && time>0){

interval=setInterval(()=>{

setTime(prev=>prev-1)

},1000)

}

if(time===0){

setRunning(false)

}

return ()=>clearInterval(interval)

},[running,time])

const startTimer=()=>{

if(time===0){

setTime(Number(seconds))

}

setRunning(true)

}

const reset=()=>{

setRunning(false)
setTime(0)
setSeconds("")

}

return(

<div className="card">

<h2>Timer</h2>

<input
type="number"
placeholder="Seconds"
value={seconds}
onChange={(e)=>setSeconds(e.target.value)}
/>

<TimeDisplay time={time}/>

<div className="buttons">

<button onClick={startTimer}>
Start
</button>

<button
onClick={()=>setRunning(false)}
>
Pause
</button>

<button onClick={reset}>
Reset
</button>

</div>

</div>

)

}

export default Timer;