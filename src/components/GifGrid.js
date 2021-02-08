import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => { // no te olvides de desestructurar la propiedad

    const {data:images,loading} = useFetchGifs(category);  //data:images, en la desestructuracion cambiamos el nombre de la variable asi
    
    // useEffect(() =>{
    //     //importamos la promesa getGifs de "helpers"
    //     getGifs(category)
    //         .then(setImages)
    //         // .then( imgs => setImages(imgs)) // una funcion que manda el primer argumento al primer argumento de setImages
    //         // se lo puede resumir como el de arriba
    // },[category]); // que haga lo que hay dentro si cambia category

    return (
        <>
        <h3 className="animate__animated animate__bounceInLeft "> {category} </h3>
        {/* {loading ? 'Cargando...' : 'Fin de la carga del objeto.'} */}
         {loading && <p className="animate__animated animate__bounceIn " >Cargando...</p>}  {/*el && es una condición lógica AND */}
        
        <div className="imagenesGrid" >
            
            {
                images.map( ( img ) =>{
                    return <GifGridItem 
                            key = {img.id}
                            {...img} 
                            />
                }) 
            }
            
        </div>
        </>
    )
}
