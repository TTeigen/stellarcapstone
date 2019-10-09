import React from 'react'
import Home from './Home'
import Search from './Search'
import constants from './constants'
import { useHttp } from '../hooks/http';
import { Route, Switch } from 'react-router-dom'
import PlanetDisplay from './planets/PlanetDisplay'
import SpaceX from './exploration/SpaceX'



const App = props => {
//API calls initiate once page is visited, loading values are stored but currently unused
  const [isLoading, fetchedData] = useHttp(constants.ssodUrl, {})
  const [picLoading, fetchedPicture] = useHttp(constants.podUrl, {})
  const [spaceXLoad, fetchedSpaceXUpcoming] = useHttp(constants.spaceXUpcoming, {})
  const [spaceXLoad2, fetchedSpaceXLatest] = useHttp(constants.spaceXLatest, {})
  const [spaceXLoad3, fetchedSpaceXPast] = useHttp(constants.spaceXPast, {})
  
//'bundle' spaceX responses into one object to pass on
  let spaceX = {
    upcoming: fetchedSpaceXUpcoming,
    latest: fetchedSpaceXLatest,
    past: fetchedSpaceXPast
  }

  return (

    <div>
      <Switch>
        <Route exact path="/" render={() => <Home picture={fetchedPicture} news={spaceX} />}/>
        <Route exact path='/planets' render={() => <PlanetDisplay solarSystem = {fetchedData} />} />
        <Route exact path='/search' render={() => <Search />} />
        <Route exact path= '/spaceX' render = {() => <SpaceX launches = {fetchedSpaceXPast}/>} />
      </Switch>
    </div>
  )
}

export default App
