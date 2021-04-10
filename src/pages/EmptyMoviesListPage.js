import React from "react";
import EmptyMoviesList from "../components/EmptyMoviesList/EmptyMoviesList";
import MainHeader from "../components/MainHeader/MainHeader";

const EmptyMoviesListPage = () => (
  <header className="header-content">
    <MainHeader />
    <EmptyMoviesList />
  </header>
);

export default EmptyMoviesListPage;
