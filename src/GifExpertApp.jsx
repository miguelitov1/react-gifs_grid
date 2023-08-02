import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['Hola mundo']);

  const onAddCategory = ( newCategory ) => {

    if (categories.some((category) => category.toLowerCase() === newCategory.toLowerCase())) return;
    // if (categories.includes( newCategory ) ) return;
    setCategories([ newCategory, ...categories ]);
    
    }


  return (
    <>

        <h1>GiffExpertApp</h1>

        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        {
            categories.map( ( category ) => ( <GifGrid key={ categories.indexOf(category) } category={ category } setCategories={ setCategories } categories={ categories }/> ))
        }

    </>
  )

}
