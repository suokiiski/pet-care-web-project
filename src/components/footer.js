import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Icon } from 'react-icons-kit'
import {phone} from 'react-icons-kit/icomoon/phone'
import {mail} from 'react-icons-kit/icomoon/mail'
import {home} from 'react-icons-kit/icomoon/home'

const Footer = () => {

    return (
        <footer>
            <hr></hr>
            <div className='container footerContainer'>
                <div className='row'>
                    <div className='col-sm-2 icons'>
                        <ul className='ulFooter'>
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
                            <li className='liFooter'>
                                <Icon icon={home} /> Helsinki, Myllypuro
                            </li>
                            <li className='liFooter'><Icon icon={phone}/> 040 666 13 13</li>
                            <li className='liFooter'><Icon icon={mail} /> feedback@petnanny.com</li>
                        </ul>
                    </div>

                    <div className='col-sm-3'>
                        <h6 className='h6Footer'>Company</h6>
                        <ul className='ulFooter'>
                            <li className='liFooter'><a className='link' href=''>History</a></li>
                            <li className='liFooter'><a className='link' href=''>Blog</a></li>
                            <li className='liFooter'><a className='link' href=''>About Us</a></li>
                        </ul>
                    </div>

                    <div className='col-sm-3'>
                        <h6 className='h6Footer'>Terms & Policy</h6>
                        <ul className='ulFooter'>
                            <li className='liFooter'><a className='link' href=''>Policies</a></li>
                            <li className='liFooter'><a className='link' href=''>Terms of use</a></li>
                            <li className='liFooter'><a className='link' href=''>Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className='footerLogoSection'>
                <img className='logoFooter' src="./images/logo-mini.png" alt="logo"/>
            </section>
        </footer>
    )
}

export default Footer;