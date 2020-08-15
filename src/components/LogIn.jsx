import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LogIn = () => {
    const [userInput, setUserInput] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = 'http://localhost:7777/movie/login/';
        fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userInput),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });

    }

    const toSignUpPage = () => {

    }

    return (
        <div className="login-section">
            <form className="login" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input type="text" placeholder="Username" onChange={handleChange} name="username" />
                <input type="text" placeholder="Password" onChange={handleChange} name="password" />
                <input type="submit" value="Sign In" />
            </form>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}