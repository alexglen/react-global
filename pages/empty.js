import EmptyMovieList from '../components/EmptyMoviesList/EmptyMoviesList';
import MainHeader from '../components/MainHeader/MainHeader';

const EmptyMoviesListPage = () => (
  <header className='header-content'>
    <MainHeader />
    <EmptyMovieList />
  </header>
);

export default EmptyMoviesListPage;
