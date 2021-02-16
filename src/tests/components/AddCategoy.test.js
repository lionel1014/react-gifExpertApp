import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {AddCategory} from '../../components/AddCategory'

describe('Pruebas en AddCategoy', () => {

const setCategories = jest.fn(); //funcion de prueba
let wrapper = shallow( <AddCategory setCategories={setCategories} /> ); // hay que enviarle algo ya que es requerido
    
    beforeEach(() =>{
        jest.clearAllMocks(); //sirve para limpiar las simulaciones
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('Debe de mostrarse correctamente (Snapshot) ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Probando la caja de texto'

        input.simulate('change', {target: {value} }); // el evento de change se define asi, 

        expect(wrapper.find('p').text().trim()).toBe(value) //aqui esperamos que guarde la capture del evento de la caja de texto
    });
    
    test('NO debe enviar el SUBMIT', () => {
        
        wrapper.find('form').simulate('submit',{
            preventDefault(){

            } });  // simulados el envio del form

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('Debe llamar a setCategories y limpiar la caja de texto del input', () => {
        
        // 1) simular el inputChange        
        const input = wrapper.find('input');
        const value = 'Simulando inputChange';

        input.simulate('change', {target: {value} }); // simulamos el cambio del inputChange

        // 2) simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){} }); // simulamos el envio del form

        // 3) setCategories debe habersellamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); // pregunta si llamo a la funcion X veces
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); //esperamos que al menos llame una función
        
        // 4) el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
        //abajo como yo lo hice
        // input.simulate('change', {target: {} }); //seteo en vacio el input
        // expect(wrapper.find('p').text().trim()).toBe(''); //pregunto si esta vacio

    })
    

})
