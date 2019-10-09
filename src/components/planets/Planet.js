import React from 'react'

const Planet = props => {
  return (
    props.name != 'Sun' ? (
      //if planet (or Pluto)
      <div>
        <h1>{props.name}</h1>
        <ul style={{ listStyle: 'none' }}>
          <li><strong>Gravity(in m/s<sup>2</sup>)</strong>: {props.gravity} </li>

          <li><strong>Mass(10<sup>24</sup>kg)</strong>: {(props.mass.massValue).toFixed(2)}</li>

          <li><strong>Radius(km)</strong>: {props.radius}</li>

          <li><strong>Aphelion (point of orbit farthest from the sun in km)</strong>: {props.aphelion}</li>

          <li><strong>Perihelion (point of orbit closest to the sun in km)</strong>: {props.perihelion}</li>
        </ul>
        <h4>Moons (in french because API)</h4>
        {props.moons.length > 0 ? (
          <div style={{
            display: 'grid',
            grid: 'auto-flow 2vh / repeat(5, 7vw)',
            alignContent: 'space-evenly',
          }}
          >
            {props.moons.map((moon) =>
              moon.moon === 'Euph&eacute;m&eacute;' ?
                <span> Eepheme, </span> :
                moon.moon === 'Eir&eacute;n&eacute;' ?
                  <span>Eirene,</span> :
                  <span>{moon.moon},</span>
            )}
          </div>
        ) : props.name + ' has no moons'}
      </div>
    ) : (
        //if Sun
        <div>
          <h1>{props.name}</h1>

          <ul style={{ listStyle: 'none' }}>
            <li>Mass(10<sup>24</sup>kg): {(props.mass.massValue).toFixed(2)}</li>
            <li>Radius(km):{props.sunRadius}</li>
            <li>How hot is the sun?
            <ul>
                <li>Surface: {props.sunSurface}</li>
                <li>Core: {props.sunCore}</li>
              </ul>
            </li>
            <li>Age:{props.sunAge}</li>
            <li>Type of star: {props.starType}</li>
          </ul>
        </div>
      )
  )
}

export default Planet