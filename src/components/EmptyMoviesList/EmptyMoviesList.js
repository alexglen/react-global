import React from "react";
import Button from "../UI-kit/Button/Button";
import "./EmptyMoviesList.scss";

const EmptyMoviesList = () => {
  return (
    <div className="empty-movies">
      <h2 className="title">No Movies Found</h2>
      <p className="text">
        Unfortunately, your search returned no results... What to do? Try changing your request. Many films have
        multiple titles.
      </p>
      <div className="button">
        <Button color="primary">Search again</Button>
      </div>
    </div>
  );
};

export default EmptyMoviesList;
