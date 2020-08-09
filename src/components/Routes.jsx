import { Movie2, MovieList, Search, Menu, MovieInfo } from '.'
import React from 'react';
import Main from './Main';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
    console.log('route');
    return (
        <BrowserRouter>
            <Menu />
            <Route exact path="/main" component={Main} />
            <Route path="/search" component={Search} />
            <Route path="/movie2" component={Movie2} />
            <Route path="/movieList" component={MovieList} />
            <Route path={"/movieInfo/:movieID"} component={MovieInfo} />

        </BrowserRouter>
    )
}