import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <img className='logoFooter' src="./images/logo-mini.png" alt="logo"/>
            <div className='container someIconsContainer'>
                <div className='row'>
                    <div className='col-sm-2 someIcon'>
                        <SocialIcon url='https://twitter.com' />
                    </div>
                    <div className='col-sm-3'>
                        <h5 className='footerH5'>Support</h5>
                    </div>
                    <div className='col-sm-3'>
                        <h5 className='footerH5'>Company</h5>
                    </div>
                    <div className='col-sm-3'>
                        <h5 className='footerH5'>Terms & Policies</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2 someIcon'>
                        <SocialIcon url='https://www.instagram.com' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2 someIcon'>
                        <SocialIcon url='https://www.facebook.com' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2 someIcon'>
                        <SocialIcon url='https://github.com/suokiiski/pet-care-web-project/tree/master' />
                    </div>
                </div>
            </div>
            <h5>Copyright © Pet Nanny {year}</h5>
        </footer>
    )
}

export default Footer;