import React from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieDetailsHeader from "../components/MovieDetailsHeader/MovieDetailsHeader";

const MoviePage = () => {
  return (
    <div>
      <MovieDetailsHeader />
      <MovieDetails />
    </div>
  );
};

export default MoviePage;
