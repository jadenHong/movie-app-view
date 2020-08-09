import React, { useState, useEffect } from 'react';

const Main = () => {
    const USER_LS = "currentUser";
    const [name, setName] = useState(localStorage.getItem(USER_LS));
    const [timeString, setTimeString] = useState('');
    const [randomNum, setRandomNum] = useState(parseInt(Math.random() * 3 + 1));
    const [hasLocalStorage, setHasLocalStorage] = useState(false);


    useEffect(() => {
        const storageValue = localStorage.getItem(USER_LS);
        console.log('get data from local Storage');
        console.log(storageValue);
        if (storageValue) {
            setHasLocalStorage(true);
            setName(storageValue);
        }
    }, [])

    useEffect(() => {//내부에서 didmount, update 가 동작, return 함수에는 unmount 가 동작!!!!!!!!
        const interval = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString('ko-KR');
            const time = now.toLocaleTimeString('ko-KR');
            setTimeString(`${date} ${time}`);
        }, 1000);
        // loadName();
        return () => {
            console.log('unmounted')
            clearInterval(interval);//다른 페이지 갔다가 돌아오면, 타이머가 또 실행되서 중복될 수 있어서여!리턴할 때 클리어해주면, 컴포넌트가 언마운트 될 때 인터벌 없애줘영
        }
    }, []);

    useEffect(() => {
        RandomNum();
    }, [])




    const RandomNum = () => {
        setRandomNum(parseInt(Math.random() * 3 + 1))
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (name.length > 0) {
            localStorage.setItem(USER_LS, name);
        }
    }

    return (
        <div className="main-screen" style={{ backgroundImage: `url(${require(`../images/${randomNum}.jpg`)})` }}>
            <h1 className="current-time">
                {timeString}
            </h1>
            {!hasLocalStorage && <form onSubmit={handleClick} className='welcome-form'>
                <input type="text" placeholder="Write Your Name" className="input-name" onChange={e => setName(e.target.value)} />
            </form>}
            {hasLocalStorage && <h2 className="welcome-msg">Hello {name} ! </h2>}
        </div>
    )
}
export default Main;







/* const [seconds, setSeconds] = useState(new Date().getSeconds());
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
        setBackground();
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

    const setBackground = () => {
        console.log('image');
        const randomNum = parseInt(Math.random() * 3 + 1);
        const backImage = document.querySelector('.main-screen');
        console.log(randomNum);
        backImage.style.backgroundImage = `url(${require(`../images/${randomNum}.jpg`)})`;

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
    */