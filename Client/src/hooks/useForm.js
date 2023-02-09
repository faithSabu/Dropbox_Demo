import { useState } from "react"
import { omit } from 'lodash'

function useForm(formSubmit) {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [formError, setFormError] = useState(false)
    let fieldEmpty = true;

    const validate = (name, value) => {
        switch (name) {
            case 'email':
                if (!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)) {
                    setErrors({
                        ...errors,
                        email: 'Email is not valid'
                    })
                } else {
                    let newObj = omit(errors, 'email')
                    setErrors(newObj)
                }
                break;
            case 'name':
                if (!new RegExp(/^[a-zA-Z ]*$/).test(value)) {
                    setErrors({
                        ...errors,
                        name: 'Numbers and special characters not allowed'
                    })
                } else {
                    let newObj = omit(errors, 'name');
                    setErrors(newObj);
                }
                break;
            case 'password':
                if (value.length < 2) {
                    setErrors({
                        ...errors,
                        password: 'Password is not valid'
                    })
                } else {
                    let newObj = omit(errors, 'password');
                    setErrors(newObj);
                }
                break;
            default: break;

        }
    }

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        validate(name, value)

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(!values.email || !values.name || !values.password) fieldEmpty = true;
        else fieldEmpty = false;

        if(Object.keys(errors).length === 0 && Object.keys(values) !== 0 && !fieldEmpty){
            setFormError(false)
            formSubmit()
        }else{
            setFormError(true)
        }
    }
    
    return {
        values,errors,formError,handleChange,handleSubmit
    }
}

export default useForm;