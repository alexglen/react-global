import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieDetailsHeader from '../../components/MovieDetailsHeader/MovieDetailsHeader';
import Home from '../../components/Home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import { fetchMovie, fetchMovies } from '../../actions';
import { FETCH_DATA_SUCCESS } from '../../redux/types';

const MoviePage = ({ movie, movies }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: movies });
  }, []);
  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MovieDetailsHeader />
      <MovieDetails movie={movie} />
      <Home />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const movies = await fetchMovies();
  const movie = await fetchMovie(query.id);

  return {
    props: {
      movie,
      movies,
    },
  };
};

export default MoviePage;
