import React from 'react'
import Planet from './Planet'
import PlanetList from './PlanetList'


const PlanetDisplay = props => {
//styles for planet selector
    var sContainerStyles = {
        padding: '10px',
        backgroundColor: 'blue',
        float: 'left',
        minWidth: '40vw',
        maxWidth: '60vw',
        minHeight: '50vh',
        margin: '3vw',
        marginTop: '10vh'
    }
    var selectorStyles = 
    {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
//styles for info display 
    var iContainerStyles = {
        padding: '10px',
        backgroundColor: 'orange',
        float: 'left',
        minWidth: '40vw',
        maxWidth: '60vw',
        minHeight: '50vh',
        margin: '3vw',
        marginTop: '10vh'
    }

    return (
        <div className = "page-container" >
            <div className = 'selector-container' style = {sContainerStyles}>
                Select Planets here
            </div>
            <div className = 'info-container' style = {iContainerStyles}>
            This is where the info panel will go
            </div>
        </div>
    )
}

export default PlanetDisplay