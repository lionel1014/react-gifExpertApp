import { getGifs } from '../../helpers/getGifs';

describe('Puebas en el helper : getGfis', () => {
    
    test('Debe de trear los 10 elementos(gifs) ', async () => { //como la funcion a probar es async, la misma prueba tambien debera
    
        const gifs = await getGifs('pepe');

        expect( gifs.length ).toBe(10);
    });

    test('No enviamos nada como argumento y esperamos []', async () => {
        
        const gifs = await getGifs(''); // le enviamos un argumento vacio
        // console.log(gifs)
        expect(gifs.length).toBe(0);
    });
    

});
