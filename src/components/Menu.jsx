import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/menu.css';

const Menu = () => {
    return (
        <Fragment>
            <div className="navbar">
                <div className="navbar-logo-title">
                    <i className="fas fa-video"></i>
                    <h2><Link to="./main">Mflix</Link></h2>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li><Link to="./Search">Search</Link></li>
                        <li><Link to="./Movie2">More Movies</Link></li>
                        <li><Link to="/Movie3">React</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
export default Menu;