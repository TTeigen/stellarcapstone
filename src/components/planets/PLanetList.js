import React from 'react'
import { useHttp } from '../../hooks/http';
import constants from '../constants';
import Planet from './Planet'
import {v4} from 'uuid' 

const PlanetList = props => {

    const listFilter = [
        "Sun",
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Pluto"
    ]

    const [isLoading, fetchedData] = useHttp(constants.ssodUrl, {})
    const solarSystem = fetchedData ? fetchedData.bodies.filter(x => listFilter.includes(x.englishName)) : []
    console.log('solarSystem', solarSystem)

    let content = "Creating solar system..."

    

    if (!isLoading && solarSystem && solarSystem.length > 0) {
        content = (
            <div style={{ float: 'left' }}>
                {solarSystem.map(x =>
                    <Planet
                        id={x.id}
                        name={x.englishName}
                        key = {v4()}
                    />
                )}
            </div>
        )
    } else if (!isLoading && (!solarSystem || solarSystem.length === 0)){
        content = 'DID NOT LOAD'
    }
    return content
}

export default PlanetList
