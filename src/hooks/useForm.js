import { useState } from "react";


export const useForm = (initialState = {}) => {
    //recibe un objeto 
    const [values, setValues] = useState(initialState);

    //reset
    const reset = () => {
        setValues(initialState);
    }
    //leer 
    const handleInputChange = ({target}) => {
    setValues({ 
        ...values,
        [target.name]: target.value
    });
   }
   return [values, handleInputChange, reset];
}
