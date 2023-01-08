import React from 'react';


type HeaderProps = {
    numberInWatchlist?: number;
    numberWatched?: number
}
function Header({ numberInWatchlist = 0, numberWatched = 0 }: HeaderProps) {
    return (
        <>
            <nav>
                <div className='nav-wrapper teal darken-4 center-align'>
                    <a href='/' className="brand-logo center">My Watchlist</a>
                </div>
            </nav>
            <h4 className="center">{numberWatched} of {numberInWatchlist} watched</h4>

        </>
    );
}

export default Header;