import React from 'react';
import { render, screen } from '@testing-library/react';
import Watchlist from "../components/Watchlist";

const data = [
    {
        "id": 1,
        "title": "The Northman",
        "director": "Robert Eggars",
        "poster_link": "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/03/THE_NORTHMAN_Dig_1-SHT_Dom_Payoff_FIN01_DOLBY-1.jpg?resize=740%2C1096&ssl=1",
        "genre": "RIPS"
    },
    {
        "id": 2,
        "title": "Evil Dead",
        "director": "Fede Alverez",
        "poster_link": "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2013/02/Evil_Dead_Poster_Red_2_20_13.jpg,",
        "genre": "Horror"
    }
]

test('renders 2 movies when given 2 movies', () => {
    render(<Watchlist movies={data} />);
    const movies = screen.getAllByTestId("movie-id");
    expect(movies.length).toBe(2);
});