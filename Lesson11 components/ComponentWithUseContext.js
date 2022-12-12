import React,{useContext} from 'react'
import MyContext from './MyContext';


export default function ComponentWithUseContext() {

    return (
        <MyContext.Provider value={15}>
            <IncrementComponent/>
            <DecrementComponent/>
        </MyContext.Provider>
    ) 
}

function IncrementComponent(){
    const count=useContext(MyContext);
    return <DisplayIncrementComponent/>
}


function DisplayIncrementComponent(){
    const count=useContext(MyContext);
    return <div><h1>Disp Inc count = {count}</h1></div>
}


function DecrementComponent(){
    const count=useContext(MyContext);
    return <div><h1>Dec count = {count}</h1></div>
}
