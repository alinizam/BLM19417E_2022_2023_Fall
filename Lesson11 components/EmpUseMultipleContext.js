import React,{useContext} from 'react'

const EmpContext=React.createContext();
const JobContext=React.createContext();
const DepContext=React.createContext();

//Merve BALCI implemented the solution
export default function EmpUseMultipleContext() {
    const empToContext={empNo:1, firstName:"Ahmet"};
    const empJobs=[{empNo:1, job:"MGR"},{empNo:2, job:"PROG"}];
    const depContext=[{empNo:1, job:"IT"},{empNo:2, job:"HR"}];

    return (
        <div>
       
       <EmpContext.Provider value={empToContext}>
            <JobContext.Provider value={empJobs}>
                <DepContext.Provider value={depContext}>
                    <Display/>
                </DepContext.Provider>
            </JobContext.Provider>
        </EmpContext.Provider>
        
        </div>
    )
}

function Display(){
    const emp=useContext(EmpContext);
    const jobs=useContext(JobContext);
    const depts=useContext(DepContext);
    const empJobs=jobs.filter(e=>e.empNo==emp.empNo)
    const empDeps=depts.filter(e=>e.empNo==emp.empNo)

    return(
        <div>
            {emp.empNo}  {emp.firstName} 
            <h2>    
                {empJobs.map(function(item,index){
                    return <li key={index}> {item.job} </li>;
                })}
            </h2>  
            <h2>    
                {empDeps.map(function(item,index){
                    return <li key={index}> {item.job} </li>;
                })}
            </h2>  
        </div>
    )

}