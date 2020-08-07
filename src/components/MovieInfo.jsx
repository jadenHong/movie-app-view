import React from 'react';

export const MovieInfo = ({ match, location }) => {
    console.log(match.params);
    console.log(location);
    const { state } = location;
    console.log(state);
    return (
        <div>{state.desc}</div>
    )
}