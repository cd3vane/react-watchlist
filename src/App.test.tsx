import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('title renders on page', () => {
  render(<App />)
  const linkElement = screen.getByText(/my watchlist/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggle form renders form', () => {
  render(<App />)
  const toggleForm = screen.getByTestId("toggle-form");
  userEvent.click(toggleForm);
  const linkElement = screen.getByTestId("add-form");
  expect(linkElement).toBeInTheDocument();
});

test('second toggle removes form', () => {
  render(<App />)
  const toggleForm = screen.getByTestId("toggle-form");
  userEvent.click(toggleForm);
  const linkElement = screen.getByTestId("add-form");
  expect(linkElement).toBeInTheDocument();
  userEvent.click(toggleForm);
  expect(linkElement).not.toBeInTheDocument();
});

test('toggling form changes button text', () => {
  render(<App />)
  const toggleForm = screen.getByTestId("toggle-form");
  userEvent.click(toggleForm);
  expect(toggleForm).toHaveTextContent("Close Add Form");
  userEvent.click(toggleForm);
  expect(toggleForm).toHaveTextContent("Open Add Form");
});

test('watchlist renders with at least one movie set', () => {
  render(<App />)
  const movie = screen.getByTestId("movies");
  expect(movie).toBeInTheDocument();
});