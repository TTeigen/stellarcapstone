import React from 'react'
import Home from './Home'
import PlanetDisplay from './planets/PlanetDisplay'
import { Route, Switch } from 'react-router-dom'


function App() {

  return (
    <div>
      <Switch>
        <Route
          exact path="/" render={() => <Home />}
        />
        <Route exact path='/planets' render={() => <PlanetDisplay />} />
      </Switch>
    </div>
  )
}

export default App
