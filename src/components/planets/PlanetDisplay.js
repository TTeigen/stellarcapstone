import React, { useState } from 'react'
import Radium from 'radium'
import Planet from './Planet'
import constants from './../constants'



const PlanetDisplay = props => {

    const [selectedPlanet, setPlanet] = useState({})
    console.log('props.solarSystem', props.solarSystem)
    console.log('selectedPlanet', selectedPlanet)
    //styles for planet selector
    var selectorStyles = {
        container: {
            padding: '5vh 5vw 5vh 5vw',
            backgroundColor: 'blue',
            float: 'left',
            width: '40vw',
            height: '50vh',
            marginTop: '10vh'
        },
        planetGrid: {
            paddingLeft: '2vw',
            height: '40vh',
            width: '40vw',
            display: 'grid',
            gridTemplateColumns: '30% 30% 30%',
            alignContent: 'space-evenly',
        },
        planetImage: {
            width: '10vw',
            height: '10vh',
            opacity: .7,
        },
        sunImage: {
            display: 'box',
            margin: 'auto',
            justifyContent: 'center',
            width: '12vw',
            height: '12vh',
        }
    }
    //styles for info display 
    var infoStyles = {
        container: {
            padding: '10px',
            float: 'left',
            width: '40vw',
            height: '50vh',
            margin: '3vw',
            marginTop: '10vh'
        },
        image: {
            float: 'left',
            width: '150px',
            height: '150px',
            margin: '5vh 5vw 5vh 5vw',
        },
        text: {
            marginTop: '5vh'
        }
    }



    return (
        <div className="page-container" >
            <div className='selector-container' style={selectorStyles.container}>
                <div className="sun" style={{ textAlign: 'center' }}><img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.sunImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Sun")) }} /></div>
                <div style={selectorStyles.planetGrid}>
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Mercury")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Venus")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Earth")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Mars")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Jupiter")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Saturn")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Uranus")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Neptune")) }} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} onClick={() => { setPlanet(props.solarSystem.find(x => x.englishName == "Pluto")) }} />
                </div>
            </div>
            <div className='info-container' style={infoStyles.container}>
                <div className='planetInfo'>
                    {selectedPlanet.englishName != undefined ? (
                        <Planet
                            name={selectedPlanet.englishName}
                            aphelion={selectedPlanet.aphelion}
                            perihelion={selectedPlanet.perihelion}
                            gravity={selectedPlanet.gravity}
                            mass={selectedPlanet.mass}
                            radius={(selectedPlanet.equaRadius)*2}
                            moons={selectedPlanet.moons != null ? selectedPlanet.moons.filter(x => !x.moon.startsWith('S/')) : []}
                            sunRadius = {695510}
                            sunSurface = {'5600 Celsius, 10,000 Fahrenheit'}
                            sunCore = {'15 million Celsius, 27 million Fahrenheit'}
                            sunAge = {'4.603 billion years'}
                            starType = {'Yellow Dwarf'}
                        />
                    )
                        : (<h1>Galaxy Placeholder</h1>)}
                </div>
            </div>
        </div >
    )
}

export default Radium(PlanetDisplay)