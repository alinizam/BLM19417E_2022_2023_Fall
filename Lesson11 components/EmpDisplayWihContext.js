import React, { useContext } from 'react'
import MyEmpContext from './MyEmpContext'
export default function EmpDisplayWihContext () {
  return ( 
        <DisplayEmployee/>  
  )
}

function DisplayEmployee() {
    const employee=useContext(MyEmpContext);
    return (
    <div><h1>{employee.empId} {employee.name}</h1></div>
  )
}
