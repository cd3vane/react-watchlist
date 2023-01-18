import React, {useState} from 'react';
import axios from 'axios';
import { Movie } from '../../types'
import {ResultCard} from "./ResultCard";

const AddMovie = () => {
    const [results, setResults] = useState<Movie[] | null>(null);
    const [query, setQuery] = useState<string>("");

    const onChange = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        setQuery(e.currentTarget.value);
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.currentTarget.value}`;
        axios.get(url).then((response ) => {
            setResults(response.data.results);
        })
    };
    return (
        <div className="container">
            <div className="row">
                <div className="input-field col s12">
                    <input type="text"
                           placeholder="Search for a movie"
                           autoFocus
                           value={query}
                           onChange={onChange}className="validate"></input>
                </div>
            </div>
            {results ?
                (results.map((movie) => (
                    <div key={movie.id} className="row">
                        <ResultCard movie={movie} />
                    </div> ))) : '' }
        </div>
    );
}

export default AddMovie;