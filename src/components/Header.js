import React from 'react';
import Logo from '../images/groomsmart-logo.png'

const Header = () => (
    <header>
        <a href="/household"><h1>GroomSmart </h1></a>
        <a href="/household"><img src={Logo} id="logo" alt="Logo for GroomSmart"></img></a>
    </header>

)

export default Header;