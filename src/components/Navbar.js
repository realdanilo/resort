import React, { useState, memo } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../images/logo.svg'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className="navbar" >
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/"><img src={logo} alt="logo background" /></Link>
                    <button className="nav-btn" onClick={() => setToggleMenu(!toggleMenu)}>
                        <AiOutlineMenu className="nav-icon" />
                    </button>
                </div>
                <ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/rooms">Rooms</NavLink></li>
                </ul>
            </div>
        </nav >
    )
}
export default memo(Navbar)