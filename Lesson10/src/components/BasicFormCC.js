import React, { Component } from 'react'

export default class BasicFormCC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         empName:""
      }
    }
    handleChange=(event)=>{
       this.setState({empName:event.target.value});
    }
    
    render() {
    return (
      <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>{this.state.empName}</h1>
            <input id="empName" onChange={this.handleChange}></input> 
            
        </form>

      </div>
    )
  }
}
