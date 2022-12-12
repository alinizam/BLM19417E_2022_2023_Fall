import React from 'react'

export default function ComponentWithProp() {
  return (
    <div><SubComponent1 name="Ahmet"/></div>
  )
}

function SubComponent1(props){
   return(<SubComponent2 name={props.name}/>)
}

function SubComponent2(props){
  return(<div>{props.name}</div>)
}
