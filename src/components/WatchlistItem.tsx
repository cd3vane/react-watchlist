import React from 'react';

type ItemProps = {
    movie : Movie;
}

type Movie = {
    id: number;
    title: string;
    poster_link: string;
    director: string;
    genre: string;
}
function WatchlistItem({ movie } : ItemProps) {
    return (
        <div data-testid="movie-id">
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="responsive-image" src={movie.poster_link} height="250" alt={movie.title}></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h4>{movie.title} - {movie.director}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WatchlistItem;