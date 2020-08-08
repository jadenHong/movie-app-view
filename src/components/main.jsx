import React, { useState, useEffect } from 'react';

const Main = () => {
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [hours, setHours] = useState(new Date().getHours());
    const [name, setName] = useState('');
    const USER_LS = "currentUser";
    useEffect(() => {
        loadName();
        setInterval(() => {
            setSeconds(new Date().getSeconds());
            setMinutes(new Date().getMinutes());
            setHours(new Date().getHours());
        }, 1000);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const formTag = e.target;
        const inputTag = formTag.childNodes[0] // console.dir(formTag) 해보고 childNode 를 찾아줄 수있다.
        const inputValue = inputTag.value;
        paintGreeting(inputValue, inputTag);
    }

    const paintGreeting = (inputValue, inputTag) => {
        inputTag.remove();
        setName(inputValue);
        const greeting = document.querySelector('.welcome-msg');
        greeting.classList.add('showing');
        saveNameToLocalStorage(inputValue);
    }
    const saveNameToLocalStorage = (inputValue) => {
        localStorage.setItem(USER_LS, inputValue);
    }

    const loadName = () => {
        const currentUser = localStorage.getItem(USER_LS);
        if (currentUser === null) {
        } else {
            paintGreeting(currentUser);
        }
    }

    return (
        <div className="main-screen">
            <h1 className="current-time">
                {`${hours < 10 ? `0${hours}` : hours} :
                ${minutes < 10 ? `0${minutes}` : minutes} :
                ${seconds < 10 ? `0${seconds}` : seconds}`
                }
            </h1>
            <form onSubmit={handleClick}>
                <input type="text" placeholder="Write Your Name" className="input-name" />
                <h2 className="welcome-msg">Welcome {name}</h2>
            </form>
        </div>
    )
}
export default Main;
