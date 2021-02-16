import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en nuestro customHooks, useFetchGifs', () => {
    
    test('Debe devolver el estado inicial', async() => {
        
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs('Gamer') ); // crea un componente virtual
        const { data , loading } = result.current;

        // const {data,loading} = useFetchGifs('Gamer');

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });
    
    test('Debe retornar un arreglo de imágenes un el loading = false', async() => {
        
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs('Gamer') ); 
        await waitForNextUpdate();

        const { data , loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    });
    
});
