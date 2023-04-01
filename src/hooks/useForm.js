import { useState } from 'react';


export const useForm = (initialValues, onSubmitHanlder) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHanlder(values)
    };


    return {
        values,
        changeHandler,
        onSubmit,
    }
};