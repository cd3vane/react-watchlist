import { Movie } from '../types'

export type WatchlistState = {
    movies: Movie[]
    add: (movie: Movie) => void
    remove: (id: number) => void
}


type ReducerAction = 
{type: 'ADD', payload: Movie} |
{type: 'REMOVE', payload: number}

const AppReducer = (state : WatchlistState, action : ReducerAction) : WatchlistState=> {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                movies: [...state.movies, action.payload],
            } ;
        case "REMOVE":
            return {
                ...state,
                movies: state.movies.filter(
                    (movie : Movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default AppReducer;