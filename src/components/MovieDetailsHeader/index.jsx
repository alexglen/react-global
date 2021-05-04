import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import search from "./search-icon.png";
import "./MovieDetailsHeader.scss";

function MovieDetailsHeader() {
  return (
    <header className="movie-header container">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/">
        <img src={search} alt="search-icon" />
      </NavLink>
    </header>
  );
}

export default MovieDetailsHeader;
