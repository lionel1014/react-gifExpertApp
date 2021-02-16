import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componente <GifGrid/>', () => {

    const category = 'Pepe';
    // let wrapper = shallow( <GifGrid category={category} /> )

    // beforeEach( () =>{    
    //     wrapper = shallow( <GifGrid category={category} /> )
    // });

    //SNAPSHOT
    test('Debe mostrarse correctamente (Snapshot)', () => {
        
        //cuando se llame esta funcion, regresar estos valores
        useFetchGifs.mockReturnValue({
            data : [],
            loading : true
        }); 

        const wrapper = shallow( <GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar ítems cuando se cargan imágenes con useFetchGifs(category)', () => {
        
        const gifs =[{
            id : '123',
            url : 'https//localhost/cosa/mavale.jpg',
            title : 'Pepito',
        },
        {
            id : 'abc',
            url : 'https//localhost/cosa/mavale.jpg',
            title : 'Pepapig',
        }];

        useFetchGifs.mockReturnValue({
            data : gifs,
            loading : false
        }); 

        const wrapper = shallow( <GifGrid category={category} /> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false); // pregunto si es parrafo existe, la carga tiene que ser falsa, o sea trajo algun elemento
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length) // pregunto por la cantidad de elementos, si es igual a la cantidad de objetos
    });
        
});
