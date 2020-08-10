import React, { useState } from 'react';
import { data } from '../data/movie2';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, EffectCube, EffectFlip, EffectCoverflow, Navigation, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
export const Movie2 = () => {
    console.log('4');
    const moviesData = data.movies;
    const handleHover = movie => {
        setMovieInfo({
            key: movie.id,
            title: movie.title,
            rating: movie.rating,
            runtime: movie.runtime,
            genres: movie.genres.join(', '),// 루프 돌려서 새로운 문자열을 만들어줌
            summary: movie.summary,
        })
    }
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        rating: 0,
        runtime: 0,
        genres: [],
        summary: '',
    });


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
                            <img src={movies.medium_cover_image} alt="movies" onMouseOver={() => handleHover(movies)} /> {/*onMouseOver={ handleHover(movies)} 이렇게 사용하면 랜더링이 되자마자 이 함수를 호출하게 되므로 반드시 callBack 함수를 이용해서 사용해야 한다. 그러면 이벤트가 발생햇을 경우에만 콜백함수를 호출 할 수 있다. */}
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div className="movie-information">
                <h2>{movieInfo.title} · {movieInfo.rating}<span role="img" aria-label="star">⭐</span></h2>
                <h4>{movieInfo.genres} · {movieInfo.runtime} mins</h4><br></br>
                <h4>{movieInfo.summary}</h4>
            </div>
        </div>

    )
}

