import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <img className='logoFooter' src="./images/logo-mini.png" alt="logo"/>
            <div className='container someIconsContainer'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <ul className='ulFooter '>
                            <li className='someIcon'>
                                <SocialIcon url="https://twitter.com" />
                            </li>
                            <li className='someIcon'>
                                <SocialIcon url="https://facebook.com" />
                            </li>
                            <li className='someIcon'>
                                <SocialIcon url="https://instagram.com" />
                            </li>
                            <li className='someIcon'>
                                <SocialIcon url="https://github.com/suokiiski/pet-care-web-project/tree/master" />
                            </li>
                        </ul>
                    </div>

                    <div className='col-sm-3'>
                        <h6 className='h6Footer'>Contact us</h6>
                        <ul className='ulFooter'>
                            <li>
                                Helsinki, Myllypuro
                            </li>
                            <li>+358 666 13 13</li>
                            <li>feedback@petnanny.com</li>
                        </ul>
                    </div>

                    <div className='col-sm-3'>
                        <h6 className='h6Footer'>Company</h6>
                        <ul className='ulFooter'>
                            <li>History</li>
                            <li>Blog</li>
                            <li>About Us</li>
                        </ul>
                    </div>

                    <div className='col-sm-3'>
                        <h6 className='h6Footer'>Terms & Policy</h6>
                        <ul className='ulFooter'>
                            <li>Policies</li>
                            <li>Terms of use</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Copyright © Pet Nanny {year}</p>
        </footer>
    )
}

export default Footer;