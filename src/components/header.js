import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Header.css'

const Header = () => {

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-#428157FF">
            <div className="container-fluid">

                <img className='header' id='header' src="./images/logo.png" alt="logo"/>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hoidettavat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Hoitajat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Vinkit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Rekisteröidy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Header;