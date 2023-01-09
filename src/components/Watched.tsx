import React from 'react';
import { Movie } from '../types';
import MovieCard from "./movies/MovieCard";

type WatchlistProps = {
    movies?: Movie[];
}
function Watched({ movies }: WatchlistProps) {
    return (
        <div className="row">
            {movies ?
                (movies.map((movie) => (
                    <div key={movie.id} className="col s12 m6 l3">
                        <MovieCard movie={movie} />
                    </div> ))) : <h2>You haven't watched anything yet, get to it</h2> }
        </div>
    );
}

export default Watched;