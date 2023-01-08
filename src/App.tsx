import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import Watchlist from "./components/Watchlist";

type Movie = {
    id: number;
    title: string;
    poster_link: string;
    director: string;
    genre: string;
    watched: boolean;
}
const App = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const data = [
            {
                "id": 1,
                "title": "The Northman",
                "director": "Robert Eggars",
                "poster_link": "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/03/THE_NORTHMAN_Dig_1-SHT_Dom_Payoff_FIN01_DOLBY-1.jpg?resize=740%2C1096&ssl=1",
                "genre": "RIPS",
                "watched": false,
            },
            {
                "id": 2,
                "title": "Evil Dead",
                "director": "Fede Alverez",
                "poster_link": "https://www.scriptslug.com/assets/posters/_posterPageJpg/evil-dead-2013.jpg",
                "genre": "Horror",
                "watched": true,
            }
        ]
        setMovies(data);
    }, [])


  return (
    <div className="container-fluid">
        <Header numberInWatchlist={movies.length}/>
        <button data-testid="toggle-form" onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? ('Close Add Form') : ('Open Add Form')}
        </button>
        {showAddForm && <AddMovie />}
        <div data-testid="watchlist">
            {movies.length > 0 ? <Watchlist movies={movies}/> : "There are no movies in your watchlist yet"}
        </div>
    </div>
  );
}

export default App;
