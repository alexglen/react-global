import React from "react";
import App from "../App";
import MovieDetails from "../components/MovieDetails";
import MovieDetailsHeader from "../components/MovieDetailsHeader";

function MoviePage() {
  return (
    <>
      <MovieDetailsHeader />
      <MovieDetails />
      <App />
    </>
  );
}

export default MoviePage;
