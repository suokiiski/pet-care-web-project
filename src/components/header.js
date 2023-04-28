import React, { useRef, useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {

    const handleLogOut = () => {
        localStorage.removeItem('status');
        localStorage.setItem('login', null);
        window.location.reload(false);
    }

    if(localStorage.getItem('status') !== null){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
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
                                <a className="nav-link" href="/">Home</a>
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
                                <NavDropdown className='nav-link' title={localStorage.getItem('login')}>
                                    <NavDropdown.Item >Uusi ilmoitus</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogOut}>Kirjaudu ulos</NavDropdown.Item>
                                </NavDropdown>
                                {/*<a className="nav-link"><img
                                    style={
                                        {height: 30,
                                        width: 30}
                                    }
                                    src="./images/avatar.png" alt='Image by <a href="https://pixabay.com/users/wingtilldie-3058071/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1577909">WingTillDie</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1577909">Pixabay</a>'/>

                                </a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
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
                            <a className="nav-link" href="/">Home</a>
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
                            <a className="nav-link" href="/sign-in">Rekisteröidy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Header;