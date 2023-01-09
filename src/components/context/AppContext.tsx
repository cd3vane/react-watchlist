import {Movie} from "../../types";
import {createContext} from "react";

interface AppContext {
    movies: Movie[];
}

export const WatchlistContext = createContext<AppContext | null>(null);

export const sampleAppContext: AppContext = {
    movies: [{
        "id": 76600,
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
    },
        {
            "id": 315162,
            "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
            "poster_path": "/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
            "release_date": "2022-12-07",
            "title": "Puss in Boots: The Last Wish",
        },]
};