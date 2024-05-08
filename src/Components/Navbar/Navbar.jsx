import React from 'react'
import './Navbar.scss'
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import logo from '../../static/Images/logo-white.png'
const Navbar = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' to='/'><img src={logo} alt="Logo" /></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems.map(({ path, page }) => (
                                <li className="nav-item" key={path}>
                                    <NavLink className='nav-link' exact="true" activeclassname='active' to={path}>{page}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

//  website pages
const navItems = [
    { path: '/', page: 'HOME' },
    { path: '/about', page: 'ABOUT' },
    { path: '/services', page: 'SERVICES' },
    { path: '/projects', page: 'PROJECTS' },
    { path: '/client', page: 'CLIENT' },
    { path: '/contact', page: 'CONTACT' }
];

export default Navbar