import React from 'react'

export default function ComponentWithProp(props) {
  return (
    <div>
        <h1>Given First Name = {props.firstName}</h1>
        <h1>Given Last Name = {props.lastName}</h1>


    </div>
  )
}
