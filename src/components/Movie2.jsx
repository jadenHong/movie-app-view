import React, { Fragment } from 'react';
import { data } from '../data/movie2';
const Movie2 = () => {
    /* useEffect(() => {
        // console.log(data.movies.map((movies) => movies));
        const { movies } = data;
    }); */
    const moviesData = data.movies;
    console.log(moviesData);
    return (
        <Fragment>
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
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quod in fugit saepe minus quaerat magnam modi eum consequuntur, illum voluptas sequi optio nostrum? Illo consequuntur odio obcaecati veritatis amet!
            Obcaecati assumenda dignissimos voluptatum vel aperiam quaerat unde vitae in hic, molestias porro officiis voluptatibus a architecto excepturi ab autem est! Excepturi sed enim eaque quae sunt libero, dolorem quas.
            Ab possimus consectetur dolorum veritatis vero cumque repellendus! Temporibus numquam fugiat dolorem ratione, voluptatem nostrum officiis, ipsam inventore, rerum consequuntur nobis explicabo! Doloremque accusamus aperiam pariatur blanditiis deleniti, non tenetur.
        Molestiae amet facere, omnis ipsam dolorum quia repellendus corporis corrupti nobis vero eaque neque illum dicta iste porro laboriosam quibusdam eum recusandae aliquam quos ut. Itaque laboriosam consectetur impedit sit?</div>
        </Fragment>
    )
}

export default Movie2;