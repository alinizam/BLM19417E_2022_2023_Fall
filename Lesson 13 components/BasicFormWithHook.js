import React, {useState} from "react"

export default function BasicFormWithHook() {
    const initialFirstName = "";
    const initialLastName = "";
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    return (
        <div>
            <form>
                <input type='text'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}>
                </input>
                <input type='text'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}>
                </input>
                {firstName} {lastName} 
            </form>
        </div>
    )
}
