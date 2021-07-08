import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import Login from "../../components/login/Login";
import { types } from "../../types/types";

describe('Prueba de login', () => {
    const history = {
        replace:jest.fn()
    }
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false,
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <Login history={history} />
        </AuthContext.Provider>
    );
    test('debe de mostrarse correctamente', () => {
       
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de hacer el dispatch y la navegacion', () => {
       
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.login,
            payload:{name:'Jonathan'}
        });
        expect(history.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });
    
    
    
})