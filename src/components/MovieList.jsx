import React, { Fragment, useState, useEffect } from 'react';

export const MovieList = () => {
    console.log('5');
    const LIST_LS = 'movieList';
    const [movieList, setMovieList] = useState([]);
    const [movie, setMovie] = useState({
        id: '',
        title: '',
    });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log('data load')
        loadList();
    }, []);

    useEffect(() => {
        console.log('local 저장');
        saveToLocal(movieList);
        // console.log(movie);
    }, [movieList])


    const loadList = () => {
        const loadedDate = JSON.parse(localStorage.getItem(LIST_LS));
        console.log(loadedDate)
        if (loadedDate !== null) {
            setMovieList(loadedDate);
        }

    }

    const handleDelete = (e) => {
        console.log(e.target);
        const listNode = e.target.parentNode;
        // console.log(listNode.id);
        // console.log(movieList.filter((movie) => {
        //     return movie.id !== parseInt(listNode.id)
        // }));
        const newMovieList = movieList.filter((movie) => {
            return movie.id !== parseInt(listNode.id)
        });
        setMovieList(newMovieList);
    }

    const saveToLocal = (movieList) => {
        localStorage.setItem(LIST_LS, JSON.stringify(movieList));
    }

    const handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        setMovieList([...movieList, movie]);
        setInputValue('');

    }

    const handleChange = (e) => {
        const inputTitle = e.target.value;
        console.log(inputTitle);
        setInputValue(inputTitle);
        setMovie({
            id: new Date().valueOf(),
            title: inputTitle,
        });

    }

    return (
        <Fragment>
            <form className="mymovie-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Write a movie to watch" onChange={handleChange} value={inputValue} />
            </form>
            <ul className="movie-list">
                {movieList.map((movie, index) =>
                    <li key={index} id={movie.id}>
                        <button onClick={handleDelete} id={movie.id}>
                            <span role="img" aria-label="cancle">❌</span>
                        </button>
                        {movie.title}
                    </li>
                )}

            </ul>
        </Fragment>
    )
}


/* console.log('5');
    const LIST_LS = 'movieList';
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        loadList();

        // saveToLocal(movieList)
    }, []);

    useEffect(() => {
        saveToLocal(movieList)
    }, [movieList])
    const loadList = () => {
        const loadedDate = JSON.parse(localStorage.getItem(LIST_LS));
        console.log(loadedDate)
        if (loadedDate !== null) {
            console.log(loadedDate)
            setMovieList(loadedDate);
            console.log(movieList)
        }

    }

    const handleSubmit = (e) => {
        console.log('submit 누름')
        e.preventDefault();
        const movieFrom = e.target;
        const inputMovie = movieFrom.childNodes[0];
        const inputValue = inputMovie.value;
        console.log(movieList);

        saveMovie(inputValue);
        inputMovie.value = '';
    }

    const saveMovie = (inputValue) => {
        const movie = {
            id: new Date().valueOf(), // 시간을 유닉스코드로 나타낸다. 이것은 유니크한값이다.
            title: inputValue
        }
        setMovieList([...movieList, movie]);
        console.log('로컬에 저장')
    }

    const saveToLocal = (movieList) => {
        console.log(movieList)
        localStorage.setItem(LIST_LS, JSON.stringify(movieList));
    }
    const handleDelete = (e) => {
        console.log(e.target);
        const listNode = e.target.parentNode;
        console.log(listNode.id);
        console.log(movieList.filter((movie) => {
            return movie.id !== parseInt(listNode.id)
        }));
        const newMovieList = movieList.filter((movie) => {
            return movie.id !== parseInt(listNode.id)
        });
        setMovieList(newMovieList);
    }


    return (
        <Fragment>
            <form className="mymovie-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Write a movie to watch" />
            </form>
            <ul className="movie-list">
                {movieList.map((movie, index) => <li key={index} id={movie.id}><button onClick={handleDelete} id={index}>❌</button>{movie.title}</li>)}
            </ul>
        </Fragment>
    ) */




/* console.log('5');
const LIST_LS = 'movieList';
const [movieList, setMovieList] = useState([]);
useEffect(() => {
    loadList();

    // saveToLocal(movieList)
}, []);

useEffect(() => {
    saveToLocal(movieList)
}, [movieList])
const loadList = () => {
    const loadedDate = JSON.parse(localStorage.getItem(LIST_LS));
    console.log(loadedDate)
    if (loadedDate !== null) {
        console.log(loadedDate)
        setMovieList(loadedDate);
        console.log(movieList)
    }

}

const handleSubmit = (e) => {
    console.log('submit 누름')
    e.preventDefault();
    const movieFrom = e.target;
    const inputMovie = movieFrom.childNodes[0];
    const inputValue = inputMovie.value;
    console.log(movieList);

    saveMovie(inputValue);
    inputMovie.value = '';
}

const saveMovie = (inputValue) => {
    const movie = {
        id: movieList.length + 1,
        title: inputValue
    }
    setMovieList([...movieList, movie]);
    console.log('로컬에 저장')
}

const saveToLocal = (movieList) => {
    console.log(movieList)
    localStorage.setItem(LIST_LS, JSON.stringify(movieList));
}
const handleDelete = (e) => {
    console.log(e.target);
    const listNode = e.target.parentNode;
    console.log(listNode.id);
    console.log(movieList.filter((movie) => {
        return movie.id !== parseInt(listNode.id)
    }));
    const newMovieList = movieList.filter((movie) => {
        return movie.id !== parseInt(listNode.id)
    });
    setMovieList(newMovieList);
}


return (
    <Fragment>
        <form className="mymovie-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Write a movie to watch" />
        </form>
        <ul className="movie-list">
            {movieList.map((movie, index) => <li key={index} id={movie.id}><button onClick={handleDelete} id={index}>❌</button>{movie.title}</li>)}
        </ul>
    </Fragment>
) */