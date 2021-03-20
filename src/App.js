import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import Footer from "./components/Footer/Footer";
import MovieFilters from "./components/MovieFilters/MovieFilters";
import MoviesSorting from "./components/MoviesSorting/MoviesSorting";
import CardMovieModal from "./components/Modals/CardMovieModal/CardMovieModal";
import DeleteMovieModal from "./components/Modals/DeleteMovieModal/DeleteMovieModal";
import "./App.scss";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path={`/movies/:id`} component={MoviePage} />
      </Switch>

      <main className="main-content container">
        <div className="sort-and-filters">
          <MovieFilters />
          <MoviesSorting />
        </div>

        <MoviesContainer />
      </main>
      <footer className="footer-content">
        <Footer />
      </footer>
      <CardMovieModal />
      <DeleteMovieModal />
    </>
  );
};

export default App;
