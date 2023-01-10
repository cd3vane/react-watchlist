import React, {useContext} from 'react';
import MovieCard from "./movies/MovieCard";
import {ListContext} from "../context/AppContext";

function Watched() {
    const { watched } = useContext(ListContext);

    return (
        <div className="container">
            <h1>My watched</h1>

            <h4>
                {watched && <>{watched.length} {watched.length === 1 ? "Movie" : "Movies"}</>}
            </h4>

            <div className="movie-grid">
                {watched ?
                    (watched.map((movie) => (
                        <div key={movie.id} className="col s12 m4 l3">
                            <MovieCard movie={movie} type="watched"/>
                        </div> ))) : <h2>Currently, no movies in your watched, go add some</h2> }
            </div>
        </div>
    );
}

export default Watched;