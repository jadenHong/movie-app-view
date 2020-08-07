import React from 'react';
import { data } from '../data/movie2';

export const Movie2 = () => {
    const moviesData = data.movies;
    return (
        <div className="movie-data">
            {moviesData.map((movies, index) => {
                return (<div key={index}>
                    <h2>{movies.title}({movies.year})</h2>
                    <img src={movies.medium_cover_image} alt="img" />
                    <h3>Run Time: {movies.runtime}</h3>
                    <h3>Rate: {movies.rating}</h3>
                    <h4>{movies.summary}</h4>
                </div>
                )
            })}
        </div>

    )
}

