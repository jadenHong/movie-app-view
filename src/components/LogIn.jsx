import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Roll from 'react-reveal/Roll';

export const LogIn = () => {
    const [userInput, setUserInput] = useState();
    const [loginStatus, setLoginStatus] = useState({
        msg: '',
        state: 0,
    });
    const { msg, state } = loginStatus;
    const usernameRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    const handleClick = async (e) => {
        e.preventDefault();
        const URL = 'http://localhost:7777/movie/login/';
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userInput),
        })
        const data = await response.json();
        setLoginStatus(data);

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });

    }


    return (
        <Roll left>
            <div >
                {state !== 200 ?
                    <div className="login-section">
                        <div className="login" >
                            <h2>Log In</h2>
                            <input type="text" placeholder="Username" onChange={handleChange} name="username" ref={usernameRef} />
                            <input type="text" placeholder="Password" onChange={handleChange} name="password" />
                            <div>{msg}</div>
                        </div>
                        <div className="button-section">
                            <button type="submit" onClick={handleClick} className="signIn-button">Sign In</button>
                            <button className="signup"><Link to="/signup" className="signup-link">Sign Up</Link></button>
                        </div>
                    </div>
                    :
                    <div className="success-page">
                        <h2>{loginStatus.msg}</h2>
                        <Link to="/bulletin" className="link-board">Go to Board</Link>
                    </div>
                }
            </div>
        </Roll>
    )
}


/* export const LogIn = () => {
    const [userInput, setUserInput] = useState();
    const [loginStatus, setLoginStatus] = useState({
        msg: '',
        state: 0,
    });
    const { msg, state } = loginStatus;

    useEffect(() => {
        console.log(state);
    }, [state])

    const handleClick = async (e) => {
        e.preventDefault();
        const URL = 'http://localhost:7777/movie/login/';
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userInput),
        })
        const data = await response.json();
        setLoginStatus(data);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });

    }


    return (
        <div className="login-section">
            {state !== 200 ?
                <>
                    <div className="login" >
                        <h2>Log In</h2>
                        <input type="text" placeholder="Username" onChange={handleChange} name="username" />
                        <input type="text" placeholder="Password" onChange={handleChange} name="password" />
                        <button type="submit" onClick={handleClick}>Sign In</button>
                    </div>
                    <Link to="/signup">Sign Up</Link>
                    <div>{msg}</div>
                </>
                :
                <div>
                    <h2>{loginStatus.msg}</h2>
                    <Link to="/bulletin">Go to Board</Link>
                </div>
            }
        </div>
    )
} */