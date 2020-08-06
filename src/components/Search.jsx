import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import { Movie } from './Movie';
const Search = () => {
    const [movieArray, setMovieArray] = useState([]);
    const URL = "http://localhost:6060/movie/";

    // useEffect(() => {
    //   const path = `${URL}findMoviesByTitle/${inputTitle}`;
    //   fetch(path)
    //     .then((response) => response.json())
    //     .then((data) => setMovieArray(data));
    // }, [inputTitle]); // 여기서 inputTitle이 의존성 배열에 들어가있기때문에 이 값이 바뀌는순간 지금 useEffect 함수바디 안에있는게 실행되어요


    // try {
    //   const response = await fetch(path);
    //   const data = response.json();
    //   setMovieArray(data);
    // } catch (error) {
    //   console.log(error);
    // }



    const titleChange = async (e) => {
        if (e.target.value === '') {
            setMovieArray([]);
        } else {
            const newInputTitle = e.target.value;
            const path = `${URL}findMoviesByTitle/${newInputTitle}`;
            // fetch(path)
            //   .then((response) => response.json())
            //   .then((data) => setMovieArray(data))
            //   .catch(() => console.log('er ror'));
            try {
                const response = await fetch(path);
                const data = await response.json();
                setMovieArray(data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const yearChange = async (e) => {
        if (e.target.value === '') {
            setMovieArray([]);
        } else {
            const newInputYear = e.target.value;
            const path = `${URL}findMoviesByYear/${newInputYear}`;
            // fetch(path)
            //   .then((response) => response.json())
            //   .then((data) => setMovieArray(data));

            try {
                const response = await fetch(path);
                const data = await response.json();
                setMovieArray(data);
            } catch (error) {
                console.log(error);
            }
        }
    }



    const genreChange = (e) => {
        const newInputGenre = e.target.value;
        const path = `${URL}findMoviesByGenre/${newInputGenre}`;

        fetch(path)
            .then((response) => { return response.json() })
            .then((data) => setMovieArray(data));
        console.log(movieArray);

    }




    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, [])

    // const searchInput = useRef(null);
    // let variableForX;
    // some time later.. ( in react this would be - after page renders)
    // variableForX = 10

    return (
        <div>
            <h3>Search Menu</h3>
            <div className="search-bar">
                <label>Title: </label>
                <input type="text" onChange={titleChange} ref={searchInput} />
            </div>
            <div className="search-bar">
                <label>Year: </label>
                <input type="text" onChange={yearChange} />
            </div>
            <div className="search-bar">
                <label>Genre: </label>
                <input type="text" onChange={genreChange} />
            </div>
            <Movie default1={movieArray} inputTitle={movieArray} inputYear={movieArray} inputGenre={movieArray} />
        </div>
    )
}
export default Search;