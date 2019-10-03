import React, { useState } from 'react'
import Radium from 'radium'
import Planet from './Planet'
import Moon from './Moon'



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
            girdGap: '5vw',
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
            backgroundColor: 'orange',
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
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                    <img src="https://tinyurl.com/yy99zvyx" style={selectorStyles.planetImage} />
                </div>
            </div>
            <div className='info-container' style={infoStyles.container}>
                <div className='planetInfo'>
                    {selectedPlanet != null ? (
                        selectedPlanet.map(x => {
                            <Planet


                            />
                        })
                    )
                        : (<h1>Galaxy Placeholder</h1>)}
                </div>
            </div>
        </div >
    )
}

export default Radium(PlanetDisplay)