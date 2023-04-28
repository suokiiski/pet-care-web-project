import React from "react";
import {useState} from "react";

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

    async function registerUser(event) {
        event.preventDefault();

        const result = await fetch('http://localhost:3001/api/register', {
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
        } else {
            alert(result.error);
        }
    }

    return (
        <section>
            <form className='mx-1 mx-md-4' onSubmit={registerUser}>
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
        </section>
    )
}

export default RegistrationForm;