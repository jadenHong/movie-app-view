import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';


export const ListEdit = () => {
    // const params = useParams(); URL 파라미터 값을 가져올 수 있다.
    const locations = useLocation();
    // const history = useHistory(); location 이외의 다른 API 정보를 볼수 있다. go, goback, goForward API등
    const state = locations.state;
    const { id, title, description, created } = state;
    const [newData, setNewData] = useState();
    const [clicked, setclicked] = useState(0);

    useEffect(() => {
        console.log(newData);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(value);
        setNewData({
            ...newData,
            [name]: value,
            id: id,
        });

    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const URL = 'http://localhost:7777/movie/updateData';
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        });
        setclicked(1);
    }

    const handleDelete = async (id) => {
        const URL = `http://localhost:7777/movie/deleteData/`;
        console.log(URL + id);
        await fetch(URL + id)
    }

    return (
        <div className="edit-section">
            <h2>Bulletin</h2>
            <form onSubmit={handleUpdate}>
                <label>Title</label>
                <input type="text" defaultValue={title} onChange={handleChange} name="title" />
                <label>Description</label>
                <input type="text" defaultValue={description} onChange={handleChange} name="description" />

                <div className="edit-buttons">
                    <input type="submit" value="Update" className="button updateBtn" />
                    <button onClick={() => handleDelete(id)} className="button deleteBtn">Delete</button>
                    <button className="button listBtn">
                        <Link to="/boardList" className="list-link">List</Link>
                    </button>
                    {clicked > 0 && <Notification duration={2} message="Processing Successed .." />}

                </div>

            </form>
        </div>
    )
}

export const Notification = ({ duration, message }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {

        //이걸가지고 IIFE (immediately invoked function expression) 한다.
        // 원래 함수를 만들어 변수명정해주고 그걸 콜을 해줘야하는데 이렇게 짜면 이안에있는게 바로그냥실행됨
        (async () => {
            const sleep = (ms) => new Promise((r) => setTimeout(r, ms)); //여기서 resolve는 리턴하는게 없다. 그냥 단지 sleep 이라는 함수를 프로미스로 만들어서 비동기로 setTimeout을 실행시키기 위해 만들어 준것이다. 이거 되게 많이 쓰이니까 꼭 알아놓기!!
            const sleep2 = ms => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, ms)
                })
            }
            await sleep(150);
            setShow(true);
            await sleep(duration * 1000);
            setShow(false);
        })();
        // setTimeout(() => {
        //     setShow(true);
        // }, duration / 2 * 100);
        // setTimeout(() => {
        //     setShow(false);
        // }, duration * 1000);
    }, [duration])

    return (
        <div className={`notification ${show ? 'show' : 'hide'}`}>
            {message}
        </div>
    )
}