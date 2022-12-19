import React from 'react'
import { Form, Field } from 'react-final-form'
const sleep = waitMS => new Promise(resolve => setTimeout(resolve, waitMS));
const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values))
}

 
export default function BasicFinalFormRecordValidation() {
    return (
        <div>
            <Form onSubmit={onSubmit}
                initialValues={{ firstName: "Ahmet", lastName: "Ak" }}
                validate={values=>{
                    const errors={};
                    if (!values.firstName && !values.lastName){
                        errors.firstName="Required";
                        errors.lastName="Required";
                    }
                    return errors;
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field name="firstName">
                                    {({ input, meta }) => (
                                        <div>
                                            <label>First Name</label>
                                            <input {...input} type="text" />
                                            {meta.error && meta.touched && <span> {meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div>
                            <Field name="lastName">
                                    {({ input, meta }) => (
                                        <div>
                                            <label>Last Name</label>
                                            <input {...input} type="text" />
                                            {meta.error && meta.touched && <span> {meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <button type="submit" disabled={submitting || pristine}>Submit</button>
                            <button type="reset" onClick={form.reset}> Reset</button>

                            <h3>{JSON.stringify(values)}</h3>
                        </form>
                    </div>
                )}
            />
        </div>
    )
}