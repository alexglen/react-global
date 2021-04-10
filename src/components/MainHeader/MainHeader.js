import React from "react";
import Logo from "../Logo/Logo";
import Search from "./Search/Search";
import { typeAdd } from "./../../constants";
import { useDispatch } from "react-redux";
import { openCardModal, setTypeEvent } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import "./MainHeader.scss";

const MainHeader = () => {
  const dispatch = useDispatch();

  const openAddMovieModal = () => {
    dispatch(openCardModal());
    dispatch(setTypeEvent(typeAdd));
  };

  return (
    <div className="main-header">
      <div className="header container">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="add-button">
          <button onClick={openAddMovieModal}>+ Add Movie</button>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default MainHeader;
