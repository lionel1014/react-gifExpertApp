import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


//un custom hook
export const useFetchGifs = (category) => {
    
    const [objeto, setObjeto] = useState({
        data : [],
        loading : true,    
    });

    useEffect( () => {
        getGifs(category)
            .then(imgs => {

                // console.log(imgs);
                setObjeto({ 
                    data : imgs,
                    loading : false
                });

            })
    }, [category])

    // a los 4  seg setea Objeto con este "objeto" (valga la redundancia)
    // setTimeout(() => {
    //     setObjeto({
    //         data : [1,2,3,4,5,6,10],
    //         loading : false,    
    //     });
    // }, 4000);

    return objeto; // {data = [], loading = true}

};
