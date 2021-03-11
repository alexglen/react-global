import React from "react";
import Logo from "../Logo/Logo";
import search from "./search-icon.png";
import "./MovieDetailsHeader.scss";
import { NavLink } from "react-router-dom";

const MovieDetailsHeader = () => {
  return (
    <div className="header">
      <div className="header container">
        <NavLink to="/" exact>
          <Logo />
        </NavLink>
        <NavLink to="/" exact>
          <img src={search} alt="search-icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;