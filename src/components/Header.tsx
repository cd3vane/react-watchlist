import React from 'react';
import { Link } from 'react-router-dom';


type HeaderProps = {
    numberInWatchlist?: number;
    numberWatched?: number
}
function Header({ numberInWatchlist = 0, numberWatched = 0 }: HeaderProps) {
    return (
        <>
            <nav>
                <div className="nav-wrapper blue-grey darken-3">
                    <a href="/" className="brand-logo">Watchlist</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/" >Watchlist</Link></li>
                        <li><Link to="/watched" >Watched</Link></li>
                        <li ><Link to="/search" className="waves-effect waves-light btn">+ Add</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;