import React from 'react';
import {Movie, Show} from '../../types'
import MovieControls from "./MovieControls";

type MovieCardProps = {
    movie?: Movie
    show?: Show
    type?: string
}
function MovieCard({movie, show, type} : MovieCardProps) {
    if(movie && type){
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
    } else if(show){
        return (
            <div className="movie-card">
                <div className="overlay"></div>
                <img
                    src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                    alt={`${show.name} Poster`}
                />
            </div>
        );
    }else{
        return(<div>No movies or shows here</div>)
    }
}
export default MovieCard;