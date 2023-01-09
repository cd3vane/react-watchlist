import {Movie} from "../types";
import {createContext, useEffect, useReducer} from "react";
import AppReducer, {ListAction, WatchlistState} from "./AppReducer";

const initialState : WatchlistState = {

    movies: [
        {
            id: 550,
            overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            release_date: "1999-10-15",
            title: "Fight Club",
        },
    ],
    add: () => {},
    remove: () => {}
};

export const ListContext = createContext<WatchlistState | null>(initialState);
export const ListProvider = (props : any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.movies));
    }, [state]);

    const addMovieToWatchlist = (movie : Movie) => {
        console.log("Attempting add " + movie.title);
        dispatch({ type: ListAction.ADD, payload: movie});
    }
    const removeMovieFromWatchlist = (id : number) => {
        console.log("Attempting remove " + id);
        dispatch({ type: ListAction.REMOVE, payload: id})
    }

    return (
        <ListContext.Provider
            value={{
                movies: state.movies,
                add: addMovieToWatchlist,
                remove: removeMovieFromWatchlist
            }}>
            {props.children}
        </ListContext.Provider>
    );
}