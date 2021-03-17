import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuMovieCard from "./MenuMovieCard/MenuMovieCard";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = ({ img, title, releaseDate, genre, id }) => {
  const [isMovieCardWithHover, setIsMovieCardWithHover] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const iconClass = classnames("dots-icon", {
    "dots-icon-hidden": !isMovieCardWithHover,
  });

  return (
    <div
      className="movie"
      onMouseEnter={() => setIsMovieCardWithHover(true)}
      onMouseLeave={() => setIsMovieCardWithHover(false)}
    >
      <NavLink to={`/movies/${id}`}>
        <div className="movie-img">
          <img src={img} alt={title} />
        </div>
      </NavLink>
      <div className="movie-info">
        <p>{title}</p>
        <p className="movie-info-year">{releaseDate}</p>
      </div>
      <p className="movie-genre">{genre}</p>
      <div className={iconClass} onClick={() => setIsMenuModalOpen(true)}></div>
      <MenuMovieCard isMenuModalOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen} movieCardId={id} />
    </div>
  );
};

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.number,
  genre: PropTypes.string,
  id: PropTypes.string,
};

export default MovieCard;
