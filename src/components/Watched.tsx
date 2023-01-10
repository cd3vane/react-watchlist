import React, {useContext} from 'react';
import { Movie } from '../types';
import MovieCard from "./movies/MovieCard";
import {ListContext} from "../context/AppContext";

function Watched() {
    const { watched } = useContext(ListContext);

    return (
        <div>
            <h1 className="center-align">My watched</h1>

            <h4 className="center-align">
                {watched && <>{watched.length} {watched.length === 1 ? "Movie" : "Movies"}</>}
            </h4>

            <div className="row">
                {watched ?
                    (watched.map((movie) => (
                        <div key={movie.id} className="col s12 m6 l3">
                            <MovieCard movie={movie} type="watched"/>
                        </div> ))) : <h2>Currently, no movies in your watched, go add some</h2> }
            </div>
        </div>
    );
}

export default Watched;