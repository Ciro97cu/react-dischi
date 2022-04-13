import React from 'react'
import logo from "./img/spotify.png"

const Header = () => {
    return (
        <header className="container-fluid py-2">
            <div className="wrapper_logo">
                <img src={logo} alt="spotify-logo" />
            </div>
        </header>
    )
}

export default Header