import React, {useContext} from 'react';
import {Movie} from "../../types";
import {ListContext} from "../../context/AppContext";

type ControlProps = {
    type: string;
    movie: Movie;
}
function MovieControls({type, movie} : ControlProps) {
    const {addWatchlist, addWatched, removeWatchlist, removeWatched} = useContext(ListContext);

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => removeWatchlist(movie.id)}>
                        <i className="material-icons" >remove_from_queue</i>
                    </button>

                    <button className="ctrl-btn" onClick={() => addWatchlist(movie)}>
                        <i className="material-icons">video_library</i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => removeWatched(movie.id)}>
                        <i className="material-icons">add_to_queue</i>
                    </button>

                    <button className="ctrl-btn" onClick={() => addWatched(movie)}>
                        <i className="material-icons">video_library</i>
                    </button>
                </>
            )}
        </div>
    );
}

export default MovieControls;