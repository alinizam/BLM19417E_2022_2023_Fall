import React, { Component } from 'react'

export default class FormEmployeeListCC extends Component {
    constructor(props) {
      super(props)
       
      this.state = {
        currentEmployee:{firstName:"",
                         lastName:""},
        employees:[/*currentEmployee*/]
      }
    }
    // Name property should be added to html inputs
    handleChange=(event)=>{
        let { name, value } = event.target;
        this.setState({currentEmployee:
                       {...this.state.currentEmployee,[name]:value}});
    }
    
    addEmp=()=>{
        this.setState({employees:[...this.state.employees,this.state.currentEmployee]})
    }

    render() {
    return (
      <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>{this.state.empName}</h1>
            <input id="firstName" name="firstName" onChange={this.handleChange}></input> 
            <input id="lastName" name="lastName" onChange={this.handleChange}></input> 
            <button onClick={this.addEmp} >Add Employee To list</button>
        </form>
        <ol>
            {
                this.state.employees.map((item,i)=> (<li key={i}> {item.firstName+" "+item.lastName} </li>))
            }
        </ol>
      </div>
    )
  }
}
