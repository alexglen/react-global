import React, {useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({img, title, releaseDate, genre}) => {
  const [isMovieCardWithHover, setIsMovieCardWithHover] = useState(false);

  const iconClass = classnames({
    'dots-icon': true,
    'dots-icon-hidden': !isMovieCardWithHover,
  });

  return (
    <div className="movie" onMouseEnter={() => setIsMovieCardWithHover(true)} onMouseLeave={() => setIsMovieCardWithHover(false)}>
      <div className="movie-img">
        <img src={img} alt={title} />
      </div>
      <div className="movie-info">
        <p>{title}</p>
        <p className="movie-info-year">{releaseDate}</p>
      </div>
      <p className="movie-genre">{genre}</p>
      <div className={iconClass}></div>
    </div>
  );
};

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.number,
  genre: PropTypes.string,
};

export default MovieCard;
