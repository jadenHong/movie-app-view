import React, { useState, useEffect } from 'react';

const Main = () => {
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [hours, setHours] = useState(new Date().getHours());
    const USER_LS = "currentUser";
    const [name, setName] = useState(localStorage.getItem(USER_LS));



    useEffect(() => {
        console.log('hi')
        const interval = setInterval(() => {
            setSeconds(new Date().getSeconds());
            setMinutes(new Date().getMinutes());
            setHours(new Date().getHours());
        }, 1000);
        return () => clearInterval(interval);//다른 페이지 갔다가 돌아오면, 타이머가 또 실행되서 중복될 수 있어서여!리턴할 때 클리어해주면, 컴포넌트가 언마운트 될 때 인터벌 없애줘영
    }, []);

    useEffect(() => {
        console.log('loadName');
        loadName();
    }, [name])

    const handleClick = (e) => {
        e.preventDefault();
        const formTag = e.target;
        const inputTag = formTag.childNodes[0] // console.dir(formTag) 해보고 childNode 를 찾아줄 수있다.
        const inputValue = inputTag.value;
        console.log('handle');
        if (typeof inputTag != 'undefined' || inputTag != null) {
            removeInput(inputTag)
        }
        // inputTag.remove();
        paintGreeting(inputValue, formTag);
    }

    const removeInput = (inputTag) => {
        console.log(inputTag)
        console.log('removeInput');
        inputTag.remove();
    }

    const paintGreeting = (inputValue, formTag) => {
        console.log('paintGreeting');
        console.log(formTag)
        const welcomeMsg = document.querySelector('.welcome-msg');

        // inputTag.childNodes[0].classList.add('showing');
        welcomeMsg.classList.add('showing');
        setName(inputValue);
        saveNameToLocalStorage(inputValue);
    }
    const saveNameToLocalStorage = (inputValue) => {
        console.log('saveLocal');
        localStorage.setItem(USER_LS, inputValue);
    }

    const loadName = () => {
        const currentUser = localStorage.getItem(USER_LS);
        const formTag = document.querySelector('.welcome-form');
        const inputTag = document.querySelector('.input-name');
        if (currentUser === null) {
            console.log('null 일때');
        } else {
            if (document.body.contains(inputTag)) {
                console.log('input Tag 있음')
                removeInput(inputTag);
            }
            console.log('input Tag 없음');
            paintGreeting(currentUser, formTag);
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
            <form onSubmit={handleClick} className='welcome-form'>
                <input type="text" placeholder="Write Your Name" className="input-name" />
            </form>
            <h2 className="welcome-msg">Hello {name} ! </h2>
        </div>
    )
}
export default Main;
