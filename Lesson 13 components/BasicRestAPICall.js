import React,{useState,useEffect} from 'react'

export default function BasicRestAPICall() {
    const [user,setUser]=useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((data) => { 
                setUser(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    console.log(user.name)
    return (
    <div>BasicRestAPICall</div>
  )
}
