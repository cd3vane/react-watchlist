import {useEffect, useState} from 'react';
import axios from 'axios';
import { Movie } from '../../types'
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
        <div className="row">
            {movies ?
                (movies.map((movie) => (
                    <div key={movie.id} className="col s12 m6 l3">
                        <MovieCard movie={movie} type="watchlist"/>
                    </div> ))) : <h2>Unable to connect to TMDB</h2> }
        </div>
    );
}

export default AddMovie;