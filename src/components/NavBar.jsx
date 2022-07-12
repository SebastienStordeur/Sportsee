import React from 'react'
import logo from "../assets/logo.svg"; 

const NavBar = () => {
  return (
    <header id="header" className="header">
        <nav className="navbar">
            <ul className="nav-list">
                <li><img src={logo} alt="Logo Sportsee" /></li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar