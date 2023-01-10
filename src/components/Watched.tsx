import React, {useContext} from 'react';
import MovieCard from "./movies/MovieCard";
import {ListContext} from "../context/AppContext";
import {Link} from "react-router-dom";

function Watched() {
    const { watched } = useContext(ListContext);

    return (
        <div className="container">
            <div className="header">
                <h1 className="text">Watched</h1>

                <span className="count-pill">
                    {watched && <>{watched.length} {watched.length === 1 ? "Movie" : "Movies"}</>}
                </span>
            </div>


                {watched.length > 0 ?
                    (<div className="movie-grid">
                            {watched.map((movie) => (

                            <div key={movie.id} className="col s12 m4 l3">
                                <MovieCard movie={movie} type="watched"/>

                        </div>))} </div>) : <h3>You haven't watched anything yet, <Link to="/search">get watching <i className="small material-icons" >local_movies</i></Link></h3> }

        </div>
    );
}

export default Watched;