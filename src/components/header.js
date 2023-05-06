import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Header.css'

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
                                <a className='nav-link' onClick={handleLogOut} href="">Kirjaudu Ulos</a>
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
                            <a className="nav-link" href="/sign-in">Kirjaudu sisään</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Header;