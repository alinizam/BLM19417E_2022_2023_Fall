import React, {useState} from "react"

export default function BasicFormWithGenericOnChange() {
    const initialContact = {firstName:"", lastName:"",email:""};
    const [contact, setContact] = useState(initialContact);
    const handleChange=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <form>
                <input type='text'
                    name='firstName'
                    value={contact.firstName}
                    onChange={handleChange}>
                </input>
                <input type='text'
                    name='lastName'
                    value={contact.lastName}
                    onChange={handleChange}>
                </input>
                <input type='text'
                    name='email'
                    value={contact.email}
                    onChange={handleChange}>
                </input>
                {JSON.stringify(contact)} 
               
            </form>
        </div>
    )
}
