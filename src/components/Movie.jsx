import React from 'react';
import { Link } from 'react-router-dom';
export const Movie = ({ inputTitle, inputYear, inputGenre }) => {

    const data = inputTitle || inputYear || inputGenre;

    return (
        <div className="display-movies">
            {data.map((movie, index) =>
                <div key={index}>
                    <Link to={{
                        pathname: `./movieInfo/:${movie.id}`,
                        state: {
                            desc: movie.summary,
                        }

                    }}>
                        <img src={movie.medium_cover_image} alt="img" />
                    </Link>
                    <h4>{movie.title} <span>{movie.year}</span></h4>
                    <div>{movie.genres.map((genres) => `${genres}, `)}</div>
                    <h4>{movie.rating}</h4>
                    <h4>{movie.summary}</h4>
                </div>
            )
            }
        </div >
    )
}