import React from 'react'
import Home from './Home'
import {useHttp}from './../hooks/http'
import PlanetDisplay from './planets/PlanetDisplay'
import { Route, Switch } from 'react-router-dom'
import constants from './constants'
import Search from './Search'


function App() {

const [isLoading, fetchedData] = useHttp(constants.ssodUrl, {})


  return (
    <div>
      <Switch>
        <Route
          exact path="/" render={() => <Home />}
        />
        <Route exact path='/planets' render={() => <PlanetDisplay loading = {isLoading} solarSystem = {fetchedData ? fetchedData.bodies.filter(x => constants.listFilter.includes(x.englishName)) : []}/>} />
        <Route exact path = '/search' render = {() => <Search/>}/>
      </Switch>
    </div>
  )
}

export default App
