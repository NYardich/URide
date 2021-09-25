import React from 'react'
import car from '../images/car.png'

const CarHome = () => {
    return (
        <div style={allStyle}>
            <h1 style={newStyle}>Start reducing emissions and making friends with a college-focused carpool app.</h1>
            <img  src={car} alt="Logo" />
        </div>
    )
}

const newStyle = {
    fontFamily: 'Racing Sans One',
    fontSize: '48px',
}

const allStyle = {
    width: '50%',
    textAlign: 'center',
    margin: '5%'
}



export default CarHome
