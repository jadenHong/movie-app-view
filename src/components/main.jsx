import React, { useState, useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';

const Main = () => {
    const USER_LS = "currentUser";
    const [name, setName] = useState(localStorage.getItem(USER_LS));
    const [timeString, setTimeString] = useState('');
    const [randomNum, setRandomNum] = useState(parseInt(Math.random() * 3 + 1));
    const [hasLocalStorage, setHasLocalStorage] = useState(false);

    const [coordsInfo, setCoordsInfo] = useState({ latitude: 0, longitude: 0 });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();


    const [weather, setWeather] = useState('');
    const API_WEATHER_KEY = '015408c7b2ff4cc5a6b9d6332e145cf6';


    useEffect(() => {
        const storageValue = localStorage.getItem(USER_LS);
        console.log('get data from local Storage');
        console.log(storageValue);
        if (storageValue) {
            setHasLocalStorage(true);
            // setName(storageValue);
        }
    }, [])

    useEffect(() => {//내부에서 didmount, update 가 동작, return 함수에는 unmount 가 동작!!!!!!!!
        const interval = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString(); //const date = now.toLocaleDateString('ko-KR'); 이렇게 하면 한국어로됨
            const time = now.toLocaleTimeString(); //const time = now.toLocaleTimeString('ko-KR');
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

    useEffect(() => {

        // set loading flag on render
        setIsLoading(true);

        // load location info
        navigator.geolocation.getCurrentPosition(async position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setCoordsInfo({ latitude, longitude });
            const { place, weatherTemp, clouds } = await loadData(latitude, longitude);
            setWeather(`${place} ${weatherTemp} ${clouds}`);
            setIsLoading(false);
        }, err => {
            setErrorMessage(err.message);
            setIsLoading(false);
        });
    }, []);

    const loadData = async (latitude, longitude) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_WEATHER_KEY}&units=metric`);
            const data = await response.json();
            const weatherTemp = data.main.temp;
            const place = data.name;
            const clouds = data.weather[0].description;
            return { weatherTemp, place, clouds };
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    const RandomNum = () => {
        setRandomNum(parseInt(Math.random() * 3 + 1))
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (name.length > 0) {
            console.log(name);
            localStorage.setItem(USER_LS, name);
            // const storageValue = localStorage.getItem(USER_LS);
            setHasLocalStorage(true);
        }
    }




    const renderWeather = () => isLoading ? <div className="spinner" /> : <span className="js-weather">{weather}</span>;

    return (
        <Zoom left>
            <div className="main-screen" style={{ backgroundImage: `url(${require(`../images/${randomNum}.jpg`)})` }}>
                {errorMessage ? <span>{errorMessage}</span> : renderWeather()}

                <h1 className="current-time">
                    {timeString}
                </h1>
                {!hasLocalStorage && <form onSubmit={handleClick} className='welcome-form'>
                    <input type="text" placeholder="Write Your Name" className="input-name" onChange={e => setName(e.target.value)} />
                </form>}
                {hasLocalStorage && <h2 className="welcome-msg">Hello {name} ! </h2>}
            </div>
        </Zoom>
    )
}
export default Main;