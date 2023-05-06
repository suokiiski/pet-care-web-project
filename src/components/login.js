import React from "react";
import {useState} from "react";

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

/**
 * Palauttaa login-lomponentin ja määrittää sen toimintaa
 * @returns login-komponentti joka renderöi kirjautumislomakkeen
 * @constructor
 */
const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    /**
     * Käsittelee muutoksia joita käyttäjä tekee login-tekstikentässä
     * @param event tekstikentän sisältö tietyllä hetkellä
     */
    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    }

    /**
     * Käsittelee muutoksia joita käyttäjä tekee password-tekstikentässä
     * @param event kentän sisältö tietyllä hetkellä
     */
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    /**
     * Metodi lähettää käyttäjän antamat tunnukset serverille, ja saa sieltä vastauksen siitä, pääseekö käyttäjä kirjautumaan vai ei
     * @param event tapahtuma jonka yhteydessä metodia kutsutaan (submit)
     * @returns {Promise<void>}
     */
    async function loginUser(event) {
        event.preventDefault();

        const result = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                password
            })
        }).then((res) => res.json());

        if(result.status === 'ok') {
            localStorage.setItem('status', 'loggedIn');
            localStorage.setItem('login', login);
            alert('Tervetuloa '+ login + '!');
        } else {
            alert(result.error);
        }
    }

    /**
     * Siirtää näkymää sivun alkuun
     */
    function onScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }



    return (

        <form className='sign-in-form' onSubmit={loginUser}>
            <div className='text-center'>
            <h1 className='sign-in-h1'>Kirjaudu sisään</h1>
            <img className='sign-in-img' src='./images/logo_kuva.png'/>
            </div>
            <div className="form-outline mb-4">
                <input id="form2Example1" className="form-control" value={login} onChange={handleLoginChange}/>
                <label className="form-label" htmlFor="form2Example1">Käyttäjätunnus</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" value={password} onChange={handlePasswordChange}/>
                <label className="form-label" htmlFor="form2Example2">Salasana</label>
            </div>

            <div className='text-center'>
                <button type="submit" className="loginBtn btn btn-primary btn-block mb-4">Kirjaudu Sisään</button>
            </div>

            <div className='text-center'>
                <p>Jos sinulla ei ole vielä tiliä <br/> <a href="/registration">Rekisteröidy</a></p>
            </div>
            <span
                className="up-button animate__animated"
                id="myBtn"
                rel="noopener noreferrer"
                onClick={onScrollToTop}
            >
          &#11165;
        </span>
        </form>
    )
}

export default RegistrationForm;