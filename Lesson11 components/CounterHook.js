import React,{useState} from 'react'
export default function CounterHook() {
  const [count,setCount]=useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button type="button" 
                onClick={()=>setCount(count+1)}>+</button>
        <button type="button" 
                onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}
