import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import React from 'react'


describe('Pruebas en GifGridItem => componente', () => {

    const title = 'Un título';
    const probando ='https://localhots/jajaja.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={probando} /> )
    
    test('Debe de mostrar el componente correctamente ', () => {
    
        expect(wrapper).toMatchSnapshot();

    });

    test('El title debe de tener un párrafo con un títilo', () => {
        
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(title);

    });
    
    test('Debe devolver una img con la "url" y "alt" de los props', () => {
        
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(probando);
        expect(img.prop('alt')).toBe(title);

    });
    
    test('Debe de tener animate__flipInX en su "className" del <div>', () => {
        
        const div = wrapper.find( 'div' );

        // console.log(div.prop('className')); // me muestra el contenido de className

        const clase = div.prop('className')
        // console.log(clase.indexOf('animate__flipInX')); // esto extrae la ubicacion de donde se encuentra lo que buscamos
        // console.log(clase.trim().slice(27,)); // y esto reconstrulle a partir de (desde donde empieza,hasta donde termina) de extraer

        expect(clase.trim().slice(27,)).toBe('animate__flipInX'); //la que yo hice
        expect(clase.includes('animate__flipInX')).toBe(true); // preguntamos si clase incluye algo de esto

    })
    

})

