import React, { Component } from 'react'

export default class HelloClass extends Component {
  render() {
    const displayChield=React.Children.map(this.props.children,
                        chield=>{return <div>"-"{chield.props.fname}</div>})

    return (
      <div>
          {React.Children.count(this.props.children)}
          {displayChield}

      </div>
      
      
    )
  }
}
