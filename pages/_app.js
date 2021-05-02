import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import { wrapper } from '../store';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundry>
      <Component {...pageProps} />
    </ErrorBoundry>
  );
};

export default wrapper.withRedux(MyApp);
