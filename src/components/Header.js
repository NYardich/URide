import React from 'react'

const Header = () => {
    return (
        <header>
            <h1 style={headingStyle}>URide</h1>
        </header>
    )
}

const headingStyle = {
    backgroundColor: '#355070',
    color: '#E56B6F',
    fontFamily: 'Racing Sans One',
    fontSize: '48px',
    textAlign: 'left',
    padding: '15px',
    paddingLeft: '40px',
    margin: '0px',
}

export default Header
