import React,{useState,useReducer} from 'react'
export default function CounterWithReducerHook() {
  const initialState={count:0,isUsed:"False"};
  const reducer=(state,action)=>{
    switch(action){ 
        case "ADD":
            return {count:state.count+1, isUsed:"true"};
        case "MINUS":
            return {count:state.count+1, isUsed:"true"};
        default:
            return state;
    }
  }
  const [counterState,dispatch]=useReducer(reducer,initialState);
  
  return (
    <div>
        <h1>{counterState.count}-{counterState.isUsed}</h1>

        <button type="button" 
                onClick={()=>dispatch("ADD")}>+</button>
        <button type="button" 
                onClick={()=>dispatch("MINUS")}>-</button>
    </div>
  )
}
