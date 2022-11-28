import React,{useState} from 'react'

export default function CounterFunctionComponent() {
  const initialState={current:0};
  const [count,setCount]=useState(initialState);
  return (
    <div>
        <h1>{count.current}</h1>
        <button onClick={()=>setCount({current:count.current+1})} >+</button>
        <button onClick={()=>setCount({current:count.current-1})} >-</button>
    
    </div>
  )
}
