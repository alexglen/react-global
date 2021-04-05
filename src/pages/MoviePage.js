import React from "react";
import App from "../App";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieDetailsHeader from "../components/MovieDetailsHeader/MovieDetailsHeader";

const MoviePage = () => {
  return (
    <>
      <MovieDetailsHeader />
      <MovieDetails />
      <App />
    </>
  );
};

export default MoviePage;
