import { mount } from "enzyme";
import { MemoryRouter, Router} from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/NavBar";
import { types } from "../../types/types";
import '@testing-library/jest-dom'

describe('Prueba de Navbar', () => {

    //creando nuestra personalizacion del history
    const historyMock = {
        push:jest.fn(),
        location:{},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }


    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name:'Jonathan'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    
                     <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    //limpiar el history
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        //verifica si tiene el nombre
        expect(wrapper.find('.text-info').text().trim()).toBe('Jonathan');
    });
    test('debe de llamar el logout y usar el history', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login')

    })
    
    
})