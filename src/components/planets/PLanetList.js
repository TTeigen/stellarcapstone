import React from 'react'
import { useHttp } from '../../hooks/http';
import constants from '../constants';
import Planet from './Planet'
import {v4} from 'uuid' 

const PlanetList = props => {



    console.log('solarSystem', solarSystem)
    console.log('listFilter', listFilter)
    let content = "Creating solar system..."

    

    if (!isLoading && solarSystem && solarSystem.length > 0) {
        content = (
            <div style={{
                float: 'left', 
                marginTop: 30,
                columns: '3 25px',
                }}>
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
