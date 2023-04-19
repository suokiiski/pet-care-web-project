import React, { useRef, useLayoutEffect } from 'react';
import './App.css';

function Header() {

    const stickyHeader = useRef()

    useLayoutEffect(() => {
    const header = document.getElementById('header');
    let fixedTop = stickyHeader.current.offsetTop

    const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
            header.classList.add('fixedTop')
        } else {
            header.classList.remove('fixedTop')
        }
    }
    window.addEventListener('scroll', fixedHeader)
}, [])

    return (
        <div className='header' id='header' ref={stickyHeader}>
            <img src="./images/logo.png" alt="logo"/>
            <nav>
                <ul className={"no-bullets"}>
                    <li><a href="index.js">Home</a></li>
                    <li><a href="#">Hoidettavat</a></li>
                    <li><a href="#">Hoitajat</a></li>
                    <li><a href="#">Vinkit</a></li>
                    <li><a href="#">Rekisteröidy</a></li>

                </ul>
            </nav>
        </div>
    );
}

export default Header;