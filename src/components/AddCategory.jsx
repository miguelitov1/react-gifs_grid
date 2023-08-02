import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {

        setInputValue( event.target.value );

    }

    const onSubmit = ( event ) => {
        
        event.preventDefault();
        const newValue = inputValue.trim();

        if ( newValue !== '' ) {
        
            onNewCategory( newValue );
            setInputValue('');
        
        }

    }


    return (

    <form onSubmit={ onSubmit }>

        <input 
            type="text" 
            id="category" 
            value={inputValue} 
            onChange={ handleChange } 
            placeholder="Escriba nueva categoría..."
        />

    </form>

    )

}
