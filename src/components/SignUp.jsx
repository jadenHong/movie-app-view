import React from 'react';
import { useState } from 'react';

export const SignUp = () => {

    const [userInput, setUserInput] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmation } = userInput;
        password === confirmation ? sendDataToServer() : alert('worng password');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });
    }

    const sendDataToServer = () => {
        const URL = 'http://localhost:7777/movie/signup';
        fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userInput),
        })
            .then((response) => response.text())
            .then((data) => console.log(data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>New User</h2>
            <label>User Name</label>
            <input type="text" placeholder="Enter the username" onChange={handleChange} name="username" />
            <label>Password</label>
            <input type="text" placeholder="Enter the password" onChange={handleChange} name="password" />
            <label>Confirmation</label>
            <input type="text" placeholder="Enter the same password" onChange={handleChange} name="confirmation" />
            <input type="submit" value="Submit" />
        </form>
    )
}