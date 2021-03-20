import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { resetedState } from "../../constants";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useParams();

  const [detailsMovie, setDetailsMovie] = useState(resetedState);

  const { movies } = useSelector(({ moviesReducer }) => moviesReducer);

  useEffect(() => {
    setDetailsMovie({ ...movies.find((movie) => movie.id === id) });
  }, [id, movies]);

  return (
    <div className="container">
      <div className="movie-details">
        <div className="picture">
          <img src={detailsMovie.img} alt={detailsMovie.title} />
        </div>
        <div className="info">
          <div className="titles">
            <p className="title">{detailsMovie.title}</p>
            <p className="rating">{detailsMovie.rating}</p>
          </div>

          <div className="info-extra">
            <p className="info-awards">Oscar winning Movie</p>
            <div className="year-and-duration">
              <p className="year">{detailsMovie.releaseDate}</p>
              <p className="duration">{detailsMovie.duration} min</p>
            </div>
            <p className="description">{detailsMovie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
