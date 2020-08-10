import React from 'react';
import { Link } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
import Slider from "react-slick";

export const Movie = ({ inputTitle, inputYear, inputGenre }) => {
    console.log('4');
    const data = inputTitle || inputYear || inputGenre;
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (

        <div className="display-movies">

            {data.map((movie, index) => <Slider {...settings}>
                <Rotate top left>
                    <div key={index} className="movie-poster">
                        <Link to={{
                            pathname: `/movieInfo/${movie.id}`,
                            state: {
                                img: movie.medium_cover_image,
                                title: movie.title,
                                desc: movie.summary,
                                language: movie.language,
                            }

                        }}>
                            <img src={movie.medium_cover_image} alt="img" />
                        </Link>
                        <h4>{movie.title} <span>{movie.year}</span></h4>
                        <div>{movie.genres.map((genres) => `${genres}, `)}</div>
                        <h4>{movie.rating}</h4>
                    </div>
                </Rotate></Slider>
            )
            }

        </div >

    )
}