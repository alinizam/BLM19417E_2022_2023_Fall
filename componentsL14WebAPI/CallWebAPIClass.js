import React, { Component } from 'react'
import axios from 'axios';
export default class CallWebAPIClass extends Component {
    constructor(props){
        super(props);
        this.state={whetherData:[]};
    }
    componentDidMount(){
        axios.get("https://localhost:7257/WeatherForecast")
             .then(response=>{
                this.setState({whetherData:response.data});
             });
        console.log(this.state)         
    }
    
    render() {
    return (
        <div>
        <h1>CallWebAPIClass</h1>
        <ul>
            {this.state.whetherData.map(w=>{return <li key={w.date}>{w.date}-{w.temperatureC}</li>})}
        </ul>
    </div>
    )
  }
}
