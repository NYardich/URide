import React from 'react'

const LoginBox = () => {
    return (
        <div style={allStyle}>
            <h1>Login</h1>
            <input style={inputStyle} placeholder='Email'/>
            <input style={inputStyle} placeholder='Password'/>
            <button>Login</button>
        </div>
    )
}

const allStyle = {
    color: 'white',
    fontFamily: 'Racing Sans One',
    width: '30%',
    height: '500px',
    textAlign: 'center',
    margin: '5%',
    backgroundColor: '#6D597A',
    borderRadius: '25px',
    fontSize: '25px',
    display: 'flex',
    flexDirection: 'column',
}

const inputStyle = {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '10%'
}

export default LoginBox
