import {useContext} from 'react';
import MovieCard from "./movies/MovieCard";
import { ListContext } from "../context/AppContext";

function Watchlist() {
    const watchlist = useContext(ListContext);

    return (
        <div>
            <h1 className="center-align">My Watchlist</h1>

            <h4 className="center-align">
                {watchlist && <>{watchlist.movies.length} {watchlist.movies.length === 1 ? "Movie" : "Movies"}</>}
              </h4>

            <div className="row">
                {watchlist?.movies ?
                    (watchlist.movies.map((movie) => (
                        <div key={movie.id} className="col s12 m6 l3">
                            <MovieCard movie={movie} type="watchlist"/>
                        </div> ))) : <h2>Currently, no movies in your watchlist, go add some</h2> }
            </div>
        </div>
    );
}

export default Watchlist;