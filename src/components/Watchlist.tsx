import React from 'react';
import WatchlistItem from './WatchlistItem';

type WatchlistProps = {
    movies: Movie[];
}
type Movie = {
    id: number;
    title: string;
    poster_link: string;
    director: string;
    genre: string;
}
function Watchlist({ movies }: WatchlistProps) {
    return (
        <div data-testid="movies">{movies.map((movie) => (
            <div key={movie.id}>
                <WatchlistItem movie={movie} />
            </div>
        ))}
        </div>
    );
}

export default Watchlist;