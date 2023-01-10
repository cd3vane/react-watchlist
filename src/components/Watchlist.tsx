import {useContext} from 'react';
import MovieCard from "./movies/MovieCard";
import { ListContext } from "../context/AppContext";

function Watchlist() {
    const { watchlist } = useContext(ListContext);

    return (
        <div className="container">
            <h1>My Watchlist</h1>

            <h4>
                {watchlist && <>{watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}</>}
            </h4>

            <div className="movie-grid">
                {watchlist ?
                    (watchlist.map((movie) => (
                        <div key={movie.id} className="col s12 m4 l3">
                            <MovieCard movie={movie} type="watchlist"/>
                        </div> ))) : <h2>Currently, no movies in your watchlist, go add some</h2> }
            </div>
        </div>
    );
}

export default Watchlist;