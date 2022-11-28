import React, { Component } from 'react'

export default class CounterClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    inc=()=>{
        this.setState({count:this.state.count+1});
    }
    incWithReturnState=()=>{
        this.setState(oldState=>{return {count:oldState.count+1}});
    }
    dec=()=>{
        this.setState({count:this.state.count-1});
    }

    
    render() {
    return (
      <div>
        <input value={this.state.count}></input>
        <button onClick={this.incWithReturnState}>+</button>
        <button onClick={this.dec}>-</button>
     </div>
    )
  }
}
