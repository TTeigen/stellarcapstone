import React from 'react'
import {v4} from 'uuid'

const Home = props => {

  //shuffle for random past launch links
  var shuffle = require('shuffle-array')
  //NASA API 
  let pictureOfDay = props.picture != null ? props.picture.url : ''
  let explanation = props.picture != null ? props.picture.explanation : ''
  let title = props.picture != null ? props.picture.title : ''

  //SpaceX API
  let upcoming = props.news.upcoming != null ? props.news.upcoming.slice(0,9) : ''
  let past = props.news.past != null ? shuffle(props.news.past).slice(0, 9) : ''
  let latest = props.news.latest != null ? props.news.latest : ''
  let latestLink = props.news.latest != null ? props.news.latest.article_link : ''
  
  //page styling
  const containerStyles = {
    color: 'white',
    fontFamily: 'ocr a std, monospace'
  }
  //APOD styling
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
      bottom: '72vh',
      left: '4vw',
      zIndex: 4,
      backgroundColor: 'none',
      width: '70vw'
    }
  }
  //Launch Links Styling
  const newsStyle = {
    width: '20vw',
    height: '60vh',
    marginLeft: '2vw',
    border: '2px outset #4a4e7d',
    float: 'left',
    background: 'rgba(0,0,0, .8)'
  }
  return (
    <div className='home-container' style={containerStyles}>
      <h1 style={{ textAlign: 'center', }}>The Final Frontier</h1>
      {/* Picture of the Day Display */}
      <div style={imageStyles.container}>
        <img src={pictureOfDay} style={imageStyles.image} />
        <h2 style={imageStyles.picTitle}>NASA Picture of the Day - {title}</h2>
        <p style={imageStyles.text}>{explanation}</p>
      </div>
      {/* SpaceX Launch Info */}
      <div style={newsStyle}>
        {/* Most Recent */}
        <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Most Recent SpaceX Launch</h3>
        <li style={{ listStyle: 'none', marginLeft: '1vw' }}><a href={latestLink}>{latest.mission_name}</a></li>
        <br />
        {/*Upcoming  */}
        <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Upcoming SpaceX Launches</h3>
        {upcoming ? (upcoming.map((launch) =>
          <li key = {v4()} style={{ listStyle: 'none', marginLeft: '1vw' }}>{launch.mission_name}</li>
        )) : ''}
        <br />
        {/* Past */}
        <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Past SpaceX Launches</h3>
        {past ? (past.map((launch) =>
          <li key = {v4()} style={{ listStyle: 'none', marginLeft: '1vw' }}><a href={launch.links.article_link}>{launch.mission_name}</a></li>
        )) : ''}
      </div>
    </div>
  )
}

export default Home
