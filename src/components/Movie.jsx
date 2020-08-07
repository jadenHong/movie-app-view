import React from 'react';
export const Movie = ({ inputTitle, inputYear, inputGenre }) => {

    const data = inputTitle || inputYear || inputGenre;
    return (
        <div className="display-movies">
            {data.map((movie, index) =>
                <div key={index}>

                    <img src={movie.medium_cover_image} alt="img" />
                    <h4>{movie.title} <span>{movie.year}</span></h4>
                    <div>{movie.genres.map((genres) => `${genres}, `)}</div>
                    <h4>{movie.rating}</h4>
                    <h4>{movie.summary}</h4>
                </div>
            )}
        </div>
    )
}