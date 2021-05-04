import React from "react";
import PropTypes from "prop-types";
import "./MoviesStatistic.scss";

function MoviesStatistic({ moviesNumber }) {
  return (
    <div className="movies-statistic">
      <p>
        <span>{moviesNumber}</span> movies found
      </p>
    </div>
  );
}

MoviesStatistic.propTypes = {
  moviesNumber: PropTypes.number,
};

export default MoviesStatistic;
