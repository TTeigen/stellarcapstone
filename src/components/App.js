import React from 'react'
import Home from './Home'
import { usePod } from '../hooks/pod'
import { useSpaceX } from '../hooks/spaceX'
import { useSolarSystem } from '../hooks/solarSystem'
import PlanetDisplay from './planets/PlanetDisplay'
import { Route, Switch } from 'react-router-dom'
import constants from './constants'
import Search from './Search'
import SpaceX from './../components/exploration/spaceX/SpaceX'



const App = props => {

  const [isLoading, fetchedData] = useSolarSystem(constants.ssodUrl, {})
  const [picLoading, fetchedPicture] = usePod(constants.podUrl, {})
  const [spaceXLoad, fetchedSpaceXUpcoming] = useSpaceX(constants.spaceXUpcoming, {})
  const [spaceXLoad2, fetchedSpaceXLatest] = useSpaceX(constants.spaceXLatest, {})
  const [spaceXLoad3, fetchedSpaceXPast] = useSpaceX(constants.spaceXPast, {})

  let spaceX = {
    upcoming: fetchedSpaceXUpcoming,
    latest: fetchedSpaceXLatest,
    past: fetchedSpaceXPast
  }

  return (

    <div>
      <Switch>
        <Route
          exact path="/" render={() => <Home picture={fetchedPicture} news={spaceX} />}
        />
        <Route exact path='/planets' render={() => <PlanetDisplay solarSystem={fetchedData ? fetchedData.bodies.filter(x => constants.listFilter.includes(x.englishName)) : []} />} />
        <Route exact path='/search' render={() => <Search />} />
        <Route exact path= '/spaceX' render = {() => <SpaceX />} />
      </Switch>
    </div>
  )
}

export default App
