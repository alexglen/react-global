import React, { useCallback, useState } from "react";
import Button from "../../UI-kit/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { lookMovies } from "../../../redux/actions";
import { useHistory } from "react-router";
import "./Search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const { push } = useHistory();

  const handleForm = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(lookMovies(value));

      push(`/search?Search=${value}`);
    },
    [value, dispatch, push]
  );

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="What do you want to watch?" value={value} onChange={handleChange} />
        <Button color="primary">search</Button>
      </form>
    </div>
  );
};

export default Search;
