import React from "react";
import Logo from "../Logo";
import Search from "./Search";
import { openCardModal, setTypeEvent } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { typeAdd } from "../../constants";
import "./MainHeader.scss";

function MainHeader() {
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
}

export default MainHeader;
