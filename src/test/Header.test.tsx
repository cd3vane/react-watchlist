import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "../components/Header";



test('dynamic title renders', () => {
    render(<Header />);
    const linkElement = screen.getByText(/0 of 2 watched/i);
    expect(linkElement).toBeInTheDocument();
});
