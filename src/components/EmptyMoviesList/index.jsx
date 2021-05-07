import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../stories/Button";
import "./EmptyMoviesList.scss";

function EmptyMoviesList() {
  const { push } = useHistory();
  return (
    <div className="empty-movies">
      <h2 className="title">No Movies Found</h2>
      <div className="text">
        <p>Unfortunately, your search returned no results...</p>
        <p>What to do? Try changing your request. Many films have multiple titles.</p>
      </div>
      <div className="button">
        <Button color="primary" onClick={() => push("/")}>
          Search again
        </Button>
      </div>
    </div>
  );
}

export default EmptyMoviesList;
