import React,{useState,useEffect} from 'react'

export default function Timer() {
    const[seconds,setSeconds]=useState(0)
    useEffect(()=>{
        const interval=setInterval(() => {
            setSeconds((perv)=>perv+1)
        }, 1000);
        return ()=> clearInterval(interval)
    },[])
  return (
    <div>
      <h3>Seconds: {seconds}</h3>
    </div>
  )
}
