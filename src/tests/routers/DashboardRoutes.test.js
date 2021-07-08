import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../auth/AuthContext"
import DashboardRoutes from "../../routers/DashboardRoutes"

describe('Prueba de DashboardRoutes',() => {
    test('debe mostrarse correctamente', () => {
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

                <DashboardRoutes  />
            </MemoryRouter>
        </AuthContext.Provider>
        
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Jonathan');
    })
    
})