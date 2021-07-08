import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import Login from '../components/login/Login';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    const {user} = useContext(AuthContext)
    return (
        <Router>
        <div>
            <Switch>
                <PublicRoute isAuthenticate={user.logged} exact path="/login" component={Login}></PublicRoute>


                <PrivateRoute isAuthenticate={user.logged} path="/" component={DashboardRoutes}></PrivateRoute>
            </Switch>
        </div>
    </Router>
    )
}

export default AppRouter
