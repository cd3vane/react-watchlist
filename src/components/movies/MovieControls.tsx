import React from 'react';
import {Movie} from "../../types";

type ControlProps = {
    type: string;
    movie: Movie;
}
function MovieControls({type, movie} : ControlProps) {
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn">
                        <i className="material-icons">add_to_queue</i>
                    </button>

                    <button className="ctrl-btn"
                    >
                        <i className="material-icons">video_library</i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn">
                        <i className="material-icons">add_to_queue</i>
                    </button>

                    <button className="ctrl-btn">
                        <i className="material-icons">video_library</i>
                    </button>
                </>
            )}
        </div>
    );
}

export default MovieControls;