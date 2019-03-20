import React from 'react'
import logo from '../../logo.svg'
import Title from './Title'

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title text="¡Formularios!" />
        </header>
    )
}

export default Header