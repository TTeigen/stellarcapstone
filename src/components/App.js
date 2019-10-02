import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Planet from './planets/Planet'
import PlanetList from './planets/PlanetList'


class App extends Component {
  //code for styling a header image 
  render() {
    return (
      <div style={{ background: '#ADBCE6' }}>
        <Header />
        <PlanetList />
      </div>
    )
  }
}

export default App
