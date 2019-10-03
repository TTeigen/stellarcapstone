import React from 'react'

const Planet = props => {
    console.log('Planetprops', props)
    return (
        <h3>{props.current.englishName}</h3>
    )
}

export default Planet