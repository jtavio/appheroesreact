import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import HereosScreen from '../components/heroes/HereosScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import {Navbar} from '../components/ui/NavBar'
import SearchScreen from '../search/SearchScreen'
const DashboardRoutes = () => {
    return (
        <>
          <Navbar />  
          <div className="container mt-4">
              <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/heroe/:heroeId" component={HereosScreen} />
                    <Route exact path="/dc/" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel" />
              </Switch>
          </div>
        </>
    )
}

export default DashboardRoutes
