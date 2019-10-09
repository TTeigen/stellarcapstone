import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
//overall sytle
  var headerStyles = {
    padding: '5px',
    backgroundImage: 'url(https://tinyurl.com/yxexsmjz)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: '4px ridge #4a4e7d'
  }
//style for lefthand nav-buttons
  var leftStyledHeader = {
    background: '#9e96a3',
    border: '1px ridge black',
    padding: '5px',
    listStyleType: 'none',
    display: 'inline',
    fontFamily: 'sans-serif',
    float: 'left',
    marginRight: '10px'
  }
//style for righthand search input
  var rightStyledHeader = {
    background: '#9e96a3',
    listStyleType: 'none',
    padding: '5px',
    display: 'inline',
    fontFamily: 'sans-serif',
    float: 'right',
    marginRight: '10px'
  }

  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'ocr a std, monospace'
      }}>
        Stellar Capstone
      </h1>
      <div className='Header' style={headerStyles}>
        <ul className="nav-buttons" style={{ paddingLeft: 0 }}>
          <li style={leftStyledHeader}><Link to="/">Home</Link></li>
          <li style={leftStyledHeader}><Link to="/planets">Our Solar System</Link></li>
          <li style={leftStyledHeader}><Link to="/spacex">SpaceX,Etc.</Link></li>
        </ul>
        <ul className="nav-search">
          <li style={rightStyledHeader}><Link to="/search">Search</Link></li>
          <li style={rightStyledHeader}>
            <input type="text" placeholder="Just for looks, sorry" />
          </li>
        </ul>
        <br /><br />
      </div>
    </div>
  )
}

export default Header