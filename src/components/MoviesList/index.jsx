import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import "./MoviesList.scss";

function MoviesList({ movies }) {
  return (
    <>
      {movies.length ? (
        <div className="movies-list">
          {movies.map((movie) => {
            const { img, title, releaseDate, genre, id } = movie;
            return <MovieCard img={img} title={title} releaseDate={releaseDate} genre={genre} id={id} key={movie.id} />;
          })}
        </div>
      ) : (
        <h2 className="empty-list">No Movies Found</h2>
      )}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.string,
      duration: PropTypes.string,
      rating: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default MoviesList;
