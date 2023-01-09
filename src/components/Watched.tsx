import React from 'react';
import WatchlistItem from './WatchlistItem';
import { Movie } from '../App';

type WatchlistProps = {
    movies?: Movie[];
}
function Watchlist({ movies }: WatchlistProps) {
    return (
        <div data-testid="movies">{movies && movies.map((movie) => (
            <div key={movie.id}>
                <WatchlistItem movie={movie} />
            </div>
        ))}
        </div>
    );
}

export default Watchlist;