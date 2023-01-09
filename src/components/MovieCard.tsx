import React from 'react';
import { Movie } from '../types'

type MovieCardProps = {
    movie: Movie
}
function MovieCard({movie} : MovieCardProps) {
    return (
        <div>{movie.title}</div>
    );
}

export default MovieCard;