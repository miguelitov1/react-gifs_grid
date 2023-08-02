import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }

  useEffect( () => {
    getImages();
  }, [ category ] ) //si queda vacio se ejecuta solo la primera vez que se ejecuta el componente.

  return { //si no devuelvo un jsx, entonces es un custom hook! no es mas que una función!
    images,
    isLoading
    }

}
