import React from 'react';
import { useState, useEffect } from "react";

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
        if (name === "confirmation") setConfirmation(value);
    }

    useEffect(() => {
        if (password.length > 0 && confirmation.length > 0 && password === confirmation) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }, [password, confirmation])

    const sendDataToServer = () => {
        const URL = 'http://localhost:7777/movie/signup';
        fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.text())
            .then((data) => console.log(data))
    }

    const submitDisabled = () => {
        if (!username.length || !password.length || !confirmation.length) return true;
        return false;
    }

    const inputErrorStyle = {
        // ...(!passwordMatch && { border: '1px solid red' }) 조건부 객체에 프로퍼티 추가 할때 spread 사용. spread의 특성상 객체를 벗겨서 key, value 를 넣어준다. 를 이용한 코드
        border: !passwordMatch ? '1px solid red' : undefined
    }

    return (
        <>
            <div>
                <h2>New User</h2>
                <label>User Name</label>
                <input
                    type="text"
                    placeholder="Enter the username"
                    onChange={handleChange}
                    name="username"
                />
                <label>Password</label>
                <input
                    style={inputErrorStyle}
                    type="text"
                    placeholder="Enter the password"
                    onChange={handleChange}
                    name="password"
                />
                <label>Confirmation</label>
                <input
                    style={inputErrorStyle}
                    type="text"
                    placeholder="Enter the same password"
                    onChange={handleChange}
                    name="confirmation"
                />
            </div>
            <button
                type="button"
                onClick={sendDataToServer}
                disabled={submitDisabled() || !passwordMatch}
            >
                Submit
        </button>
        </>
    );
}