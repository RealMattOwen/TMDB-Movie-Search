import React from 'react';
import SearchBar from './SearchBar';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <a className="header__logo" href="https://www.themoviedb.org/">
                    <img src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg" />
                </a>
                <div className="search">
                    <SearchBar />
                </div>
            </div>
        </div>
    </header>
);

export default Header;