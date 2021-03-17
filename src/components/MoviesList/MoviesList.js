import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import PropTypes from "prop-types";
import "./MoviesList.scss";

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.length ? (
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <h2 className="empty-list">No Movie Found</h2>
      )}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      releaseDate: PropTypes.number,
      genre: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default MoviesList;
