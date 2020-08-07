import { Movie2, Movie3, Search, Menu } from '.'
import React from 'react';
import Main from './main';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <Menu />
            <Route exact path="/main" component={Main} />
            <Route path="/search" component={Search} />
            <Route path="/movie2" component={Movie2} />
            <Route path="/movie3" component={Movie3} />
        </BrowserRouter>
    )
}