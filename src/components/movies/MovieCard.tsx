import React from 'react';
import { Movie } from '../../types'
import MovieControls from "./MovieControls";

type MovieCardProps = {
    movie: Movie
    type: string
}
function MovieCard({movie, type} : MovieCardProps) {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            <MovieControls type={type} movie={movie}/>
        </div>
    );
}

export default MovieCard;