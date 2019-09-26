import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  var leftStyledHeader = {
    background : 'lightblue',
    border : '1px solid black',
    padding : '5px',
    listStyleType : "none",
    display: 'inline',
    fontFamily: 'sans-serif',
    float : 'left',
    marginRight : '10px'
  };
  var rightStyledHeader = {
    background : 'lightblue',
    listStyleType : "none",
    padding : '5px',
    display: 'inline',
    fontFamily: 'sans-serif',
    float : 'right',
    marginRight : '10px'
  };
  <style jsx global>{`
        .Header {
          background-color: grey
      `}</style>
  return (
    <div className = 'Header'>
      <ul className = "nav-buttons">
        <li style = {leftStyledHeader}><Link to = "/">Home</Link></li>
      </ul>
      <ul className = "nav-search">
        <li style = {rightStyledHeader}><Link to="/">CHANGE THIS ROUTE</Link></li>
        <li style = {rightStyledHeader}></li>
      </ul>
    </div>
  );
}

export default Header;