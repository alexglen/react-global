import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../components/Home/Home';
import MainHeader from '../components/MainHeader/MainHeader';
import Head from 'next/head';
import { fetchMovies } from '../actions';
import { FETCH_DATA_SUCCESS } from '../redux/types';

const App = ({ movies }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: movies });
  }, []);
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MainHeader />
      <Home />
    </>
  );
};

export const getServerSideProps = async () => {
  const movies = await fetchMovies();
  return {
    props: {
      movies,
    },
  };
};

export default App;
