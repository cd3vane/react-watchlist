import { Movie } from '../types'
export enum ListAction {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

export type WatchlistState = {
    movies: Movie[]
    add: (movie: Movie) => void
    remove: (id: number) => void
}


type ReducerAction = {
    type: ListAction
    payload: Movie | number
}

export default (state : WatchlistState, action : ReducerAction) => {
    switch (action.type) {
        case ListAction.ADD:
            return {
                ...state,
                watchlist: [action.payload, ...state.movies],
            };
        case ListAction.REMOVE:
            return {
                ...state,
                watchlist: state.movies.filter(
                    (movie : Movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};