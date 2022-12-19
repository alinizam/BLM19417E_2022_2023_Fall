import React,{useState,useEffect} from 'react'
import {Form,Field} from 'react-final-form'
const sleep=waitMS=>new Promise(resolve=> setTimeout(resolve,waitMS));
const onSubmit=async values=>{
    await sleep(300)
    window.alert(JSON.stringify(values))
}
export default function ServiceToForm() {
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
    
  return (
    <div>
        <Form onSubmit={onSubmit} 
            initialValues={user}
            render={({handleSubmit,form,submitting, pristine, values})=>(
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label>Id</label>
                        <Field name="id" component="input" type="text"/>
                        </div>
                        <div>
                        <label>Name</label>
                        <Field name="name" component="input" type="text"/>
                        </div>
                        <div>
                        <label>User name</label>
                        <Field name="username" component="input" type="text"/>
                        </div>
                        <div>
                        <label>E mail</label>
                        <Field name="email" component="input" type="text"/>
                        </div>
                        <button type="submit" disabled={submitting||pristine}>Submit</button>
                        <button type="reset" onClick={form.reset}> Reset</button>
                        
                        <h3>{JSON.stringify(values)}</h3>
                    </form>
                </div>
            )}
        />    
    </div>
  )
}
