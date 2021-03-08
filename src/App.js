import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import MovieFilters from './components/MovieFilters/MovieFilters';
import MoviesList from './components/MoviesList/MoviesList';
import MoviesStatistic from './components/MoviesStatistic/MoviesStatistic';
import MoviesSorting from './components/MoviesSorting/MoviesSorting';
import CardMovieModal from './components/Modals/CardMovieModal/CardMovieModal';
import DeleteMovieModal from './components/Modals/DeleteMovieModal/DeleteMovieModal';
import { mockedData } from './mockedData';
import { searchMovies } from './utils/searchMovies';
import { filterMovies } from './utils/filterMovies';
import { sortMovies } from './utils/sortMovies';
import { ALL, newToOld } from './constants';
import './App.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movieFilter, setMovieFilter] = useState(ALL);
  const [typeSorting, setTypeSorting] = useState(newToOld);

  const moviesAfterSearching = searchMovies(searchValue, mockedData);
  const moviesAfterFilter = filterMovies(movieFilter, moviesAfterSearching);
  const moviesAfterSorting = sortMovies(typeSorting, moviesAfterFilter);

  return (
    <>
      <header className='header-content'>
        <MainHeader setSearchValue={setSearchValue} />
      </header>
      <main className='main-content container'>
        <div className='sort-and-filters'>
          <MovieFilters setMovieFilter={setMovieFilter} movieFilter={movieFilter} />
          <MoviesSorting setTypeSorting={setTypeSorting} typeSorting={typeSorting} />
        </div>

        <MoviesStatistic moviesNumber={moviesAfterSorting.length} />
        <MoviesList movies={moviesAfterSorting} />
      </main>
      <footer className='footer-content'>
        <Footer />
      </footer>
      <CardMovieModal />
      <DeleteMovieModal />
    </>
  );
};

export default App;
