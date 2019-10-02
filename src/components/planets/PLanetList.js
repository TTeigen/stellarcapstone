import React from 'react'
import { useHttp } from '../../hooks/http';
import constants from '../constants';

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

    const [isLoading, fetchedData] = useHttp(constants.ssodUrl, [])

    const solarSystem = fetchedData ? fetchedData.bodies.filter (x => listFilter.includes(x.englishName)) : []
    console.log('solarSystem', solarSystem)
    return "hello"
}

export default PlanetList

