import React from 'react'
import { Link } from 'react-router-dom'


function Header() {

  var headerStyles = {
    padding: '5px',
    background: 'silver'
  }
  var leftStyledHeader = {
    background : 'lightblue',
    border : '1px solid black',
    padding : '5px',
    listStyleType : 'none',
    display: 'inline',
    fontFamily: 'sans-serif',
    float : 'left',
    marginRight : '10px'
  }
  var rightStyledHeader = {
    background : 'lightblue',
    listStyleType : 'none',
    padding : '5px',
    display: 'inline',
    fontFamily: 'sans-serif',
    float : 'right',
    marginRight : '10px'
  }

  return (
    <div className = 'Header' style = {headerStyles}>
      <ul className = "nav-buttons" style = {{paddingLeft: 0}}>
        <li style = {leftStyledHeader}><Link to = "/">Home</Link></li>
        <li style = {leftStyledHeader}><Link to = "/planets">Planets</Link></li>
        <li style = {leftStyledHeader}><Link to = "/constellations">Constellations</Link></li>
        <li style = {leftStyledHeader}><Link to = "/spacex">SpaceX,Etc.</Link></li>
      </ul>
      <ul className = "nav-search">
        <li style = {rightStyledHeader}><Link to="/results">Search</Link></li>
        <li style = {rightStyledHeader}>
          <input type = "text" placeholder = "Search..."/>
        </li>
      </ul>
      <br/><br/>
    </div>
  )
}

export default Header