import React, { useState } from "react";
import { Link } from "react-router-dom";
import RubberBand from 'react-reveal/RubberBand';

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
        <RubberBand>
            <div className="add-section">
                {submitState ? (
                    <div className="success-msg">
                        <h3>You submitted successfully</h3>
                        <button onClick={handleAddBtn}>ADD</button>
                    </div>
                ) : (
                        <div>

                            <form onSubmit={handleSubmit} className="add-form">
                                <h2>Bulletin</h2>
                                <label>
                                    Title:
                            </label>
                                <input type="text" onChange={handleChange} name="title" />
                                <label>
                                    Description:
                            </label>
                                <input type="text" onChange={handleChange} name="desc" />
                                <input type="submit" className="submit-button" />
                            </form>
                            <Link to="/boardList" className="list">List</Link>
                        </div>
                    )}
            </div>
        </RubberBand>
    );
};
// { submitState ? <div>really</div> : <div>no</div> }
