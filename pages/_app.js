import 'nprogress/nprogress.css';
import '../styles/globals.scss';

import { Provider } from 'react-redux';
import Router from 'next/router';
import NProgress from 'nprogress';
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import store from '../store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

if (typeof window === 'undefined') {
  global.window = {};
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundry>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundry>
  );
};

export default MyApp;
