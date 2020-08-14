import React, { useState, useEffect } from 'react';
import { ListDetail } from './ListDetail';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = '';
    }

    const handleChange = (e) => {
        const newInput = e.target.value;
        console.log(newInput);
    }



    const handleListBtn = (id) => {

        const URL = `http://localhost:7777/movie/clickedData/`;
        fetch(URL + id)
            .then((response) => response.json())
            .then((data) =>
                setClickedItem(data))

    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <h3>List</h3>
            <div className="titles">
                {listInfo.map((list, index) => {
                    const { id, title } = list;
                    return (
                        <div key={index}>
                            <button type="button" onClick={() => handleListBtn(id)}>{title}</button>
                        </div>
                    )
                })}
            </div>

            <ListDetail detailInfo={clieckedItem} />
        </div>
    )
}

