import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ClassComponentWithProps extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
            <h1>Given Class First Name = {this.props.firstName}</h1>
            <h1>Given Class Last Name = {this.props.lastName}</h1>
        </div>
      )
  }
}

export default ClassComponentWithProps
