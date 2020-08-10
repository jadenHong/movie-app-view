import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Scrollbar, A11y]);

export const Movie = ({ inputTitle, inputYear, inputGenre }) => {
    console.log('4');


    const data = inputTitle || inputYear || inputGenre;


    return (
        <div className="display-movies">
            <Swiper
                effect="zoom"
                spaceBetween={10}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
            >
                {data.map((movie, index) =>
                    <SwiperSlide>
                        <div key={index} className="movie-poster">
                            <Link to={{
                                pathname: `/movieInfo/${movie.id}`,
                                state: {
                                    img: movie.medium_cover_image,
                                    genres: movie.genres.join(', '),
                                    title: movie.title,
                                    desc: movie.summary,
                                    language: movie.language,
                                }

                            }}>
                                <img src={movie.medium_cover_image} alt="img" />
                            </Link>
                            <h4>{movie.title} <span>{movie.year}</span></h4>
                        </div>
                    </SwiperSlide>

                )
                }
            </Swiper>
        </div >

    )
}