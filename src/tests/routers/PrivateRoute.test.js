import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import PrivateRoute from "../../routers/PrivateRoute";

describe('Prueba de PrivateRoute',() => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    } 

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si esta autenticado y guardar local storage', () => {
        
        const wrapper = mount(
            //soventar el error de la ruta el memory router
        <MemoryRouter>
            <PrivateRoute
                isAuthenticate={true}
                component={() => <span>Listo</span>}
                {...props} />
                
        </MemoryRouter>
        );
        //console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
        
    });
    
})