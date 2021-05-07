import React from "react";
import MoviesContainer from "./components/MoviesContainer";
import Footer from "./components/Footer";
import MovieFilters from "./components/MovieFilters";
import MoviesSorting from "./components/MoviesSorting";
import CardMovieModal from "./components/Modals/CardMovieModal";
import DeleteMovieModal from "./components/Modals/DeleteMovieModal";
import "./App.scss";

function App() {
  return (
    <>
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
}

export default App;
