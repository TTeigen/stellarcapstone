import React from 'react'

const SpaceX = props => {
  return (
    <div style = {
      {
        color:'white',
        textAlign: 'center'
      }
    }>
      <h1>Thanks for showing interest! We're currently still exploring this sector, but SpaceX exploits can be readily found most anywhere on the internet!</h1>
      <img 
      src= "https://www.extremetech.com/wp-content/uploads/2019/04/falcon-heavy.jpg" 
      style = {{
        width: '80vw'
      }}/>
      <br/>
      <br/>
      <a style= {{
        textAlign: 'center',
        color: 'white',
        border: '1px solid #4a4e7d',
        backgroundColor: '#9e96a3',
        padding: '3px',
      }} 
      href= "https://www.spacex.com/">
      SpaceX Website
      </a>
    </div>
  )
}

export default SpaceX
