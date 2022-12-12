import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
const employee={empId:"1",name:"Ahmet Ak"}; //Initial Value
const EmployeeContext=React.createContext(employee);

export default EmployeeContext;
