import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header row">
        <div className="col-sm-4 col-sm-offset-8">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    </header>
)

export default Header;
