import React , {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['DMC','Resident Evil','Wow'];
    const [categories, setCategories] = useState(['Gamer']);

    // const handleAdd = () =>{
    //     setCategories([...categories,'Lol']);
    //     // setCategories( cate => [...cate,'Lol']);
    // };
    return (
        <>
        <h2>GifExpertApp (buscador de gif's) </h2>
        <AddCategory setCategories= {setCategories} />
        <hr />

        <ol>
            {//las llaves marcan una expresion en javascrip
                categories.map ( (category) =>( 
                    <GifGrid  
                    key = {category}
                    category = {category} 
                    /> 
                ))  
                // lo que encuentra lo guarda en category //la funcion map busca todas las categorias y su indice
                
            }
        </ol>

        </>
    );

}



//rafc