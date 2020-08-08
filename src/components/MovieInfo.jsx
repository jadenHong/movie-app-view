/* import React from 'react';

export const MovieInfo = ({ match, location }) => {
    console.log(match.params);
    console.log(location);
    const { state } = location;
    console.log(state);
    return (
        <div>{state.desc}</div>
    )
} */

import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

export const MovieInfo = () => {
    console.log('6');
    const param = useParams();
    const location = useLocation();
    const history = useHistory();
    const { movieID } = param;
    const { state } = location;
    // const 
    console.log(movieID);
    console.log(state);
    console.log(history);
    return (
        <div className="movie-detail">
            <img src={state.img} alt="poster" />
            <h3>Title</h3> {state.title}
            <h4>Description</h4> {state.desc}
            <h4>Language</h4> {state.language}
        </div>
    )
}