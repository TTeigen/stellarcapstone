import React from 'react'
import * as Constants from './constants'

const Home = props => {

  console.log('Homeprops', props)

  let pictureOfDay = props.picture != null ? props.picture.url : ''
  let explanation = props.picture != null ? props.picture.explanation : ''
  let title = props.picture != null ? props.picture.title : ''
  let upcoming = props.news.upcoming != null ? props.news.upcoming.slice(0,10) : ''
  let past = props.news.past != null ? props.news.past.slice(0,10) : ''
  let latest = props.news.latest != null ? props.news.latest : ''

  console.log('latest', latest)

  const setupStyles = {
    color: 'white',
    fontFamily: 'ocr a std, monospace'
  }

  const imageStyles = {
    container: {
      background: 'black',
      width: '70vw',
      height: '60vh',
      border: '2px inset white',
      marginLeft: '2vw',
      float: 'left'
    },
    image: {
      position: 'absolute',
      width: '70vw',
      height: '60vh',
      float: 'left',
    },
    text: {
      position: 'absolute',
      bottom: '18vh',
      left: '4vw',
      width: '65vw',
      background: 'rgba(0,0,0,.2)',
      padding: '1vh'
    },
    picTitle: {
      position: 'absolute',
      bottom: '74vh',
      left: '20vw',
      zIndex: 4,
      backgroundColor: 'none'
    }
  }

  const newsStyle = {
    width: '20vw',
    height: '60vh',
    marginLeft: '2vw',
    border: '2px outset #4a4e7d',
    float: 'left',
    background: 'rgba(158,150,163, .2)'
  }

  return (
    <div className='home-container' style={setupStyles}>
      <h1 style={{ textAlign: 'center', }}>The Final Frontier</h1>
      <div style={imageStyles.container}>
        <img src={pictureOfDay} style={imageStyles.image} />
        <h2 style = {imageStyles.picTitle}>NASA Picture of the Day - {title}</h2>
        <p style={imageStyles.text}>{explanation}</p>
      </div>
      <div style={newsStyle}>
        <h3 style = {{textAlign: 'center', textDecoration: 'underline'}}>Latest SpaceX Launch</h3>
        <li style = {{listStyle: 'none', marginLeft: '1vw'}}>{latest.mission_name}</li>  
        <br />    
        <h3 style = {{textAlign: 'center', textDecoration: 'underline'}}>Upcoming SpaceX Launches</h3>
        {upcoming ? (upcoming.map((launch) =>
          <li style = {{listStyle: 'none', marginLeft: '1vw'}}>{launch.mission_name}</li>        
        )) :''}
        <br />
        <h3 style = {{textAlign: 'center', textDecoration: 'underline'}}>Past SpaceX Launches</h3>
        {past ? (past.map((launch) =>
          <li style = {{listStyle: 'none', marginLeft: '1vw'}}>{launch.mission_name}</li>        
        )) :''}
      </div>
    </div>
  )
}

export default Home
