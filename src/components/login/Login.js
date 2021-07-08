import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const Login = ({history}) => {
    //obtengo mi context y extraigo el dispatch para login
    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        //history.push('/')
        const lastPath = localStorage.getItem('lastPath') || '/'
        //envio el type y payload
        dispatch({
            type:types.login,
            payload:{
                name:'Jonathan'
            }
        })
        history.replace(lastPath)
    }
    return (
        <div className="container my-3">
           <h1>Login</h1> 
           <hr/>
           <button
                className="btn btn-primary"
                onClick={handleLogin}
           >
               Login

           </button>
        </div>
    )
}

export default Login;