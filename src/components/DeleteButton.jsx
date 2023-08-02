
export const DeleteButton = ({ setCategories, category, categories }) => {

    const handleClick = () => {

        const newCategories = categories.filter( cat => cat!==category );
        setCategories( newCategories );

    }

    return (

        <button className='delete-button' onClick={ handleClick }>Delete</button>

    )
}