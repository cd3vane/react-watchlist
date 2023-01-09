import {useContext} from 'react';
import MovieCard from "./movies/MovieCard";
import {WatchlistContext} from "./context/AppContext";

function Watchlist() {
    const watchlist = useContext(WatchlistContext);
    return (
        <div className="row">
            {watchlist ?
                (watchlist.movies.map((movie) => (
                    <div key={movie.id} className="col s12 m6 l3">
                        <MovieCard movie={movie} />
                    </div> ))) : <h2>Currently, no movies in your watchlist, go add some</h2> }
        </div>
    );
}

export default Watchlist;