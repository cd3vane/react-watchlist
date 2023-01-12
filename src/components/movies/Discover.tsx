import {useEffect, useState} from 'react';
import axios from "axios";
import {Show} from "../../types";
import MovieCard from "./MovieCard";

enum Category{
    movie = 'movie',
    tv = 'tv'
}
function Discover() {
    const [shows, setShows] = useState<Show[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [pageNumber, setPage] = useState<number>(1)
    const [category, setCategory] = useState<Category>(Category.movie);
    const [filter, setFilter] = useState<string>('popularity.desc');

    useEffect(() => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/discover/${category}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${pageNumber}&include_adult=false&sort_by=${filter}`
        axios.get(url).then((response) => {
            setShows(response.data.results);
            setLoading(false)
        })
    }, [category])

    if (loading) {
        return <p>Loading...</p>;
    }else{
        return (
            <div className="container">
                <div className="header">
                    <h1> <button className="header-btn" onClick={() => setCategory(Category.movie)}>Movies</button> |
                        <button className="header-btn" onClick={() => setCategory(Category.tv)}>TV Shows</button></h1>
                </div>

                {shows ?  (<div className="movie-grid">
                    {shows.map((show) => (

                        <div key={show.id} className="col s12 m4 l3">
                            <MovieCard show={show} />
                        </div> ))}
                </div> ) : 'No movies to show'}
            </div>
        );
    }
}

export default Discover;