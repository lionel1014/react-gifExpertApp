import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en nuestro componente PADRE <GifExpert App />', () => {
    
    test('Debe mostrar correctamente el componente (Snapshot) ', () => {
        
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar una lista de Categorias ', () => {
        
        const categories = ['Pepe','Gamer'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length); //preguntamos si hay las mismas categorias que se invento

    })
    
});
