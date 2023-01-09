import {useEffect, useState} from 'react';
import axios from 'axios';
import { Movie } from '../types'
import MovieCard from "./MovieCard";

const AddMovie = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
        axios.get(url).then((response ) => {
            setMovies(response.data.results);
        })
    }, [])
    return (
        <div data-testid="add-form">{movies ?
            (movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)) : null }
        </div>
    );
}

export default AddMovie;