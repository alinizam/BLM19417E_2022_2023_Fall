import React,{useState} from 'react'
export default function CounterMultipleStateHook() {
  const [count,setCount]=useState(0);
  const [isUsed,setUsed]=useState("false");
  return (
    <div>
        <h1>{count}-{isUsed}</h1>

        <button type="button" 
                onClick={()=>{setCount(count+1);
                              setUsed("true");}}>+</button>
        <button type="button" 
                onClick={()=>{setCount(count-1);
                              setUsed("true")}}>-</button>
    </div>
  )
}
