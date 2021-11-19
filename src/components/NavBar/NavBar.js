import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/clapperboard.png';
import fav from '../../assets/star.png';
import home from '../../assets/home.png';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <Link to='/'>
                <img id="logoApp" src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                </Link>
            </div>
            <nav>   
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" ><img src={home} width='30' heigth='30' alt='Home' />Home</NavLink>
                        <NavLink to="/favs" ><img src={fav} width='30' height='30' alt='Favs' />Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}