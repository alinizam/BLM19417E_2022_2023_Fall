import {createStore} from "redux";
import React, { Component } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            state=state+action.payload;
            break;
    }
    return state;
}
const store =createStore(reducer,1);

export default class BasicRedux extends Component {
    
    render() {
        store.subscribe(()=>{console.log(store.getState())})
        store.dispatch(
            {
                type:"ADD",
                payload:10
            }
        )
        store.subscribe(()=>{console.log(store.getState())})

    return (
      <div>BasicRedux</div>
    )
  }
}






