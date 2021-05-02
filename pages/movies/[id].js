import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieDetailsHeader from '../../components/MovieDetailsHeader/MovieDetailsHeader';
import Home from '../../components/Home/Home';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wrapper } from '../../store';
import { getMovies } from '../../actions';
import Head from 'next/head';
import { moviesSelector } from '../../selectors/moviesSelectors';

const MoviePage = (props) => {
  const {
    query: { id },
  } = useRouter();

  const movies = useSelector(moviesSelector);
  const { title } = movies.find((movie) => movie.id === id);

  useEffect(() => {
    props.getMovies();
  }, [id]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MovieDetailsHeader />
      <MovieDetails id={id} />
      <Home />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(getMovies());
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: bindActionCreators(getMovies, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(MoviePage);
