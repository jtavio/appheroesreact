import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom";
import HereosScreen from "../../components/heroes/HereosScreen"

describe('Pruebas de HereosScreen', () => {
    const history = {
        length: 10,
        push:jest.fn(),
        goBack:jest.fn()
    }
    

    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/heroe']}>
    
                <HereosScreen history={history} />
            </MemoryRouter>
        )
        //expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Redirect').exists()).toBe(true)
    });
    test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route path="/heroe/:heroeId" component={HereosScreen}/>
            </MemoryRouter>
        )
        expect(wrapper.find('.row').exists()).toBe(true)
    });

    test('debe de regresar a la pantalla anterior con push', () => {
        const history = {
            length: 1,
            push:jest.fn(),
            goBack:jest.fn()
        }
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route
                     path="/heroe/:heroeId" 
                     component={()=> <HereosScreen history={history}/>}
                    
                     />
            </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/')
        expect(history.goBack).not.toHaveBeenCalledWith()
    });
    test('debe de regresar a la pantalla anterior con goback', () => {
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route
                     path="/heroe/:heroeId" 
                     component={()=> <HereosScreen history={history}/>}
                    
                     />
            </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0)
        expect(history.goBack).toHaveBeenCalledWith()
    });

    test('debe de llamar el redirect si el heroe no exite ', () => {
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/heroe/marvel-spider32323']}>
                <Route
                     path="/heroe/:heroeId" 
                     component={()=> <HereosScreen history={history}/>}
                    
                     />
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('')
    })
    
    

    
    
    
})