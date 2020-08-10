import React, { useState } from 'react';
import { data } from '../data/movie2';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, EffectCube, EffectFlip, EffectCoverflow, Navigation, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
export const Movie2 = () => {
    console.log('4');
    const moviesData = data.movies;
    const handleClick = movie => {
        console.log(movie)
    }
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        rating: 0,
        runtime: 0,
        genres: '',
        summary: '',
    })
    return (
        <div>
            <Swiper
                style={{ height: '400px' }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={50}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={{ clickable: true }}
            >
                {moviesData.map((movies, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={movies.medium_cover_image} alt="movies" onClick={handleClick} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div>qwefjoqwejfoiqwjefoiqwjeoiwejfoqiewj</div>
        </div>

    )
}

