import React from 'react'
import * as Constants from './constants'

function Home() {


  const containerGrid = {
    display: 'flex'
  }

  const parallaxStyle = {
    background: 'grey',
    columnSpan: 2,
    minHeight: 500,
    border: '1px, solid, black',
    marginLeft: 10,
    float: 'left'
  }

  const newsStyle = {
    columnSpan: 3,
    minWidth: '50%',
    minHeight: 500,
    border: '1px, solid, black',
    marginLeft: 10
  }

  return (
    <div style={{ containerGrid }}>
      <h1>This is my Home Component</h1>
      <div style={parallaxStyle}>
        This is the parallax div
      </div>
      <div style={{ newsStyle }}>This is the news div</div>
      <h2>Testing API: </h2>
    </div>
  )
}

export default Home
