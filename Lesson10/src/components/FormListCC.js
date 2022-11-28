import React, { Component } from 'react'

export default class FormListCC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         currentEmpName:"",
         empNames:[]
      }
    }
    handleChange=(event)=>{
       this.setState({currentEmpName:event.target.value});
    }
    
    addEmp=()=>{
        this.setState({empNames:[...this.state.empNames,this.state.currentEmpName]})
    }

    render() {
    return (
      <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>{this.state.empName}</h1>
            <input id="empName" onChange={this.handleChange}></input> 
            <button onClick={this.addEmp} >Add Employee To list</button>
        </form>
        <ol>
            {
                this.state.empNames.map((item,i)=> (<li key={i}> {item} </li>))
            }
        </ol>
      </div>
    )
  }
}
