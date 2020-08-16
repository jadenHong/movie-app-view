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

    const getAllFromDB = async () => {
        const URL = 'http://localhost:7777/movie/list';
        const response = await fetch(URL);
        const data = await response.json();
        setListInfo(data);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const URL = 'http://localhost:7777/movie/search/';
        // console.log(URL + userInput)
        const response = await fetch(URL + userInput);
        const data = await response.json();
        setListInfo(data);
    }

    const handleChange = (e) => {
        const newInput = e.target.value;
        setuserInput(newInput);
    }



    const handleListBtn = async (id) => {

        const URL = `http://localhost:7777/movie/clickedData/`;
        const response = await fetch(URL + id);
        const data = await response.json();
        setClickedItem(data);

    }

    return (

        <div className="board-list">
            <div className="search-from">
                <input type="text" onChange={handleChange} className="search-input" />
            </div>
            <div>
                <button type="submit" className="search-button" onClick={handleClick}>Search</button>
                <Link to="/bulletin" className="add-button">Add</Link>
                <button className="show-allList" onClick={getAllFromDB}>Show All</button>
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

