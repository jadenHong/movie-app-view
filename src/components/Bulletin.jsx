import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Bulletin = () => {
    const [boardInfo, setBoardInfo] = useState({
        title: "",
        desc: "",
    });
    const [submitState, setSubmitState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(boardInfo);
        const URL = "http://localhost:7777/movie/board/";
        fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(boardInfo),
        }).then(setSubmitState(true));
    };
    const handleChange = (e) => {
        // console.dir(e.target);
        const { value, name } = e.target;
        setBoardInfo({
            ...boardInfo,
            [name]: value,
        });
    };
    const handleAddBtn = () => {
        setSubmitState(false);
    };
    return (
        <div>
            {submitState ? (
                <div>
                    <h3>you submitted successfully</h3>
                    <button onClick={handleAddBtn}>ADD</button>
                </div>
            ) : (
                    <div>
                        <Link to="/boardList">List</Link>
                        <form onSubmit={handleSubmit}>
                            <h2>bulletin</h2>
                            <label>
                                Title:
                                <input type="text" onChange={handleChange} name="title" />
                            </label>
                            <label>
                                Description:
                                <input type="text" onChange={handleChange} name="desc" />
                            </label>
                            <input type="submit" />
                        </form>
                    </div>
                )}
        </div>
    );
};
// { submitState ? <div>really</div> : <div>no</div> }
