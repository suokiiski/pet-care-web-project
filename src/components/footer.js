import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <h5>Copyright © Pet Nanny {year}</h5>
        </footer>
    )
}

export default Footer;