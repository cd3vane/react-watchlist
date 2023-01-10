import React, { useContext } from "react";
import Moment from "react-moment";
import { ListContext } from "../../context/AppContext";
import {Movie} from "../../types";

type ResultCardProps = {
    movie: Movie
}
export const ResultCard = ({ movie } : ResultCardProps) => {
    const {
        addWatchlist,
        addWatched,
        watchlist,
        watched,
    } = useContext(ListContext);

    let storedMovie = watchlist.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="col s12 m7">
            <div className="card horizontal blue-grey lighten-1">
                <div className="card-image">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                         alt={`${movie.title} Poster`}></img>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h4>{movie.title}</h4>
                        <h4><Moment format="YYYY">{movie.release_date}</Moment></h4>
                    </div>
                    <div className="card-action">
                        <div className="controls">
                            <button
                                className="btn"
                                disabled={watchlistDisabled}
                                onClick={() => addWatchlist(movie)}
                            >
                                Add to Watchlist
                            </button>

                            <button
                                className="btn"
                                disabled={watchedDisabled}
                                onClick={() => addWatched(movie)}
                            >
                                Add to Watched
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};