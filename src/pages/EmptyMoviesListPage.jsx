import React from "react";
import EmptyMoviesList from "../components/EmptyMoviesList";
import MainHeader from "../components/MainHeader";

function EmptyMoviesListPage() {
  return (
    <header className="header-content">
      <MainHeader />
      <EmptyMoviesList />
    </header>
  );
}

export default EmptyMoviesListPage;
