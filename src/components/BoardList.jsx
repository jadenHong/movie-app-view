import React, { useState, useEffect } from 'react';
import { ListDetail } from './ListDetail';
import { Link } from 'react-router-dom';

export const BoardList = () => {
    const [listInfo, setListInfo] = useState([]);
    const [userInput, setuserInput] = useState('');
    const [clieckedItem, setClickedItem] = useState();
    // const { clicked, title, description, date } = clieckedItem;
    useEffect(() => {
        getAllFromDB();
    }, []);

    useEffect(() => {
        console.log(clieckedItem);
    }, [clieckedItem]);

    const getAllFromDB = () => {
        const URL = 'http://localhost:7777/movie/list';
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setListInfo(data))
    }

    const handleClick = (e) => {
        e.preventDefault();
        const URL = 'http://localhost:7777/movie/search/';
        console.log(URL + userInput)
        fetch(URL + userInput)
            .then((response) => response.json())
            .then((data) => setListInfo(data))
    }

    const handleChange = (e) => {
        const newInput = e.target.value;
        setuserInput(newInput);
    }



    const handleListBtn = (id) => {

        const URL = `http://localhost:7777/movie/clickedData/`;
        fetch(URL + id)
            .then((response) => response.json())
            .then((data) =>
                setClickedItem(data))

    }

    return (

        <div className="board-list">
            <div className="search-from">
                <input type="text" onChange={handleChange} className="search-input" />
            </div>
            <div>
                <button type="submit" className="search-button" onClick={handleClick}>Search</button>
                <Link to="/bulletin" className="add-button">Add</Link>
            </div>

            <div className="titles">
                <div className="title-list">
                    <h3>List</h3>
                    {listInfo.map((list, index) => {
                        const { id, title } = list;
                        return (
                            <div key={index}>
                                <div type="button" onClick={() => handleListBtn(id)} className="title-button">{title}</div>
                            </div>
                        )
                    })}
                </div>
                <ListDetail detailInfo={clieckedItem} />
            </div>


        </div>
    )
}

