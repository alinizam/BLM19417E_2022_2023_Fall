import React, { Component } from 'react'

class BasicEvenClassComponent extends Component {
  constructor(props){
    super(props);
    //this.displayHello.bind(this);
  }

  /*displayHello=function (){
    alert("Hello");
  }*/

  displayHello=()=>{
    alert("Hello");
  }

  render() {
 
    return (
      <div>

      <button onClick={this.displayHello}>Button</button>
      </div>
      
    )
  }
}

export default BasicEvenClassComponent;
