import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');  // => ('') > () => ('') != () => ( ) da una error, envia una variale undefined

    const handleInputChange = (e) =>{//los valores que recibimos del input
        const {value} = e.target;
        setInputValue ( value );
    };

    const handleSubmit = (e) =>{//para enviar el input en un form
        e.preventDefault();
        
        if ( inputValue.trim().length >= 3 ){
            setCategories(cate => [inputValue,...cate]); // guardamos el nuevo valor del `inputValue`
            setInputValue (''); // el estado del inputValue ahora es vacío
        }

    }

    return (
        <form onSubmit = {handleSubmit} > 
            {/* <h2> {inputValue} </h2> */}
            <input type="text" value={inputValue} placeholder='Ingresa una categoría'
            onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {

    setCategories : PropTypes.func.isRequired

};
