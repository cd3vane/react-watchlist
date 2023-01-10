import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <>
            <nav>
                <div className="nav-wrapper black">
                    <a href="/watchlist" className="brand-logo">Watchlist</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/watchlist" >Watchlist</Link></li>
                        <li><Link to="/watched" >Watched</Link></li>
                        <li ><Link to="/search" className="waves-effect waves-light btn">+ Add</Link></li>
                    </ul>
                </div>
            </nav>


        </>
    );
}

export default Header;