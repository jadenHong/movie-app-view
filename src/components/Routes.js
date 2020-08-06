import Movie2 from './Movie2';
import Movie3 from './Movie3';
import Search from './Search';
import React from 'react';
import Menu from './Menu';
import Main from './main';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <Menu />
            <Route path="/Main" component={Main} />
            <Route path="/Search" component={Search} />
            <Route path="/Movie2" component={Movie2} />
            <Route path="/Movie3" component={Movie3} />
        </BrowserRouter>
    )
}