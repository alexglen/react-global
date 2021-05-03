import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../components/Home/Home';
import MainHeader from '../components/MainHeader/MainHeader';
import Head from 'next/head';
import { searchMovies } from '../actions';
import { FETCH_DATA_SUCCESS } from '../redux/types';

const SearchPage = ({ movies }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: movies });
  }, []);
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MainHeader />
      <Home />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const movies = await searchMovies(query.Search);

  return {
    props: {
      movies,
    },
  };
};

export default SearchPage;
