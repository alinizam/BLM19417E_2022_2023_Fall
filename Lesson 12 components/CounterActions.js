import React, { Component } from 'react'
import { connect } from "react-redux";

class CounterActions extends Component {

    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <h1>{this.props.localState.counter}</h1>
                <button onClick={this.props.increase}>ADD</button>
                <button onClick={this.props.decrease}>MINUS</button>
                <ol>
                    {this.props.localState.previousActions.map((item,i)=>
                    {return (<li key={i}>{item} </li>)})}
                </ol>
            </div>
        )
    }
}

const mapStatetoProp = (state) => {
    return { localState: state };
}

const mapDispatchToProp = (dispatch) => {
    return {increase:()=>{dispatch({type:"ADD"})},
            decrease:()=>{dispatch({type:"MINUS"})}}
}

export default connect(mapStatetoProp, mapDispatchToProp)(CounterActions);