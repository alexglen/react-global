import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { resetedState } from "../../constants";
import { moviesSelector } from "../../redux/selectors/moviesSelectors";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useLocation();

  const [detailsMovie, setDetailsMovie] = useState(resetedState);

  const movies = useSelector(moviesSelector);

  useEffect(() => {
    setDetailsMovie({ ...movies.find((movie) => movie.id === id) });
  }, [id, movies]);

  return (
    <article className="container">
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
    </article>
  );
};

export default MovieDetails;
