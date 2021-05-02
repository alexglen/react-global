import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions';
import Home from '../components/Home/Home';
import MainHeader from '../components/MainHeader/MainHeader';
import { wrapper } from '../store';
import Head from 'next/head';

const App = (props) => {
  useEffect(() => {
    props.getMovies();
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

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(getMovies());
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: bindActionCreators(getMovies, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(App);
