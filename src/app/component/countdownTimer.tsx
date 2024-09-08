
import React, { useEffect, useState } from 'react'

const CountdownTimer : React.FC = ()=>{
    //set countdown time start 0
    const [time, setTime] = useState(0);
    //run time when condition is false
    const [isRunning, setIsRunning] = useState(false);
    //remaining time end 0
    const [remainingTime, setRemainingTime] = useState(0);

// hook
useEffect(()=>{
//timer is utilize in nodejs namespace rahega  assign class timeout 
let timer: NodeJS.Timeout;
//condion when time decrease
if(isRunning && remainingTime > 0){
    timer = setInterval(()=>{
        //when time run then -1 
        setRemainingTime((prev)=> prev - 1)
    },1000)
}
else if(remainingTime === 0 ){
    setIsRunning(false)
}
return()=> clearInterval(timer);
},[isRunning,remainingTime])
    //event handle start
    const handleStart = ()=>{
        if(time > 0 ){
            //when timer start time is runnig cond true
           setRemainingTime(time)
            setIsRunning(true )
        }
    }
    //event handle pause
    const handlePause = ()=>{
        setIsRunning(false)
    }
    //event handle reset
    const handleReset = ()=>{
        setIsRunning(false)
        setRemainingTime(0)
        setTime(0)
    }
    //frontend part
    return(
    <div className='
    flex flex-col min-h-screen items-center justify-center
     bg-gradient-to-br from-black to-slate-400'>

        <h1 className='text-4xl text-white hover:text-gray-950 font-extrabold uppercase mb-6 font-apple-system'>Countdown Timer</h1>
        <input type="number" 
        className='border-2 border-gray-400 bg-transparent p-3 mb-6 text-white text-xl rounded'
        placeholder='Enter Time In Second'
        value={time > 0 ? time : " "}
        onChange={(e)=> setTime(Number(e.target.value))} />
        {/* remaining second text */}
        <div className='text-3xl font-semibold uppercase mb-6 text-white '>
            {remainingTime} seconds remaining
        </div>

        {/* start button  */}
        <div >
            <button onClick={handleStart}
            className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-black to-gray-400 hover:from-black hover:to-gray-700 mr-2'>
                Start
            </button>
        

        {/* pause button  */}
       
            <button onClick={handlePause}
            className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-black to-gray-400 hover:from-black hover:to-gray-700 mr-2'>
               Pause
            </button>
       

        {/* start button  */}
       
            <button onClick={handleReset}
            className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-black to-gray-400 hover:from-black hover:to-gray-700 mr-2'>
                Reset
            </button>
        </div>
        
    </div>
)
}
export default CountdownTimer;
