import React from "react";
import {useState} from "react";

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

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
            console.log('Got the token: ', result.data);
        } else {
            alert(result.error);
        }
    }

    return (

        <form className='sign-in-form' onSubmit={loginUser}>
            <h1 className='text-center sign-in-h1'>Kirjaudu sisään</h1>
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" value={login} onChange={handleLoginChange}/>
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
                <p>Jos sinulla ei ole vielä tiliä <br/> <a href="#!">Rekisteröidy</a></p>
            </div>
        </form>
        /*<section>
            <form className='mx-1 mx-md-4' onSubmit={loginUser}>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" value={login} onChange={handleLoginChange}/>
                        <label className="form-label" htmlFor="form3Example1c">Login</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" value={password} onChange={handlePasswordChange}/>
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                </div>
                <button type='submit'>Register</button>
            </form>
        </section>*/
    )
}

export default RegistrationForm;