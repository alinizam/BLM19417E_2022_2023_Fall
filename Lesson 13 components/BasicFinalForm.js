import React from 'react'
import {Form,Field} from 'react-final-form'
const sleep=waitMS=>new Promise(resolve=> setTimeout(resolve,waitMS));
const onSubmit=async values=>{
    await sleep(300)
    window.alert(JSON.stringify(values))
}
export default function BasicFinalForm() {
  return (
    <div>
        <Form onSubmit={onSubmit} 
            initialValues={{firstName:"Ahmet",lastName:"Ak"}}
            render={({handleSubmit,form,submitting, pristine, values})=>(
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label>First Name</label>
                        <Field name="firstName" component="input" type="text"/>
                        </div>
                        <div>
                        <label>Last Name</label>
                        <Field name="lastName" component="input" type="text"/>
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
