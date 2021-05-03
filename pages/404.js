import Error404 from '../components/Error404/Error404';
import Head from 'next/head';

const ErrorPage = () => (
  <>
    <Head>
      <title>The page is not found</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Error404 />
  </>
);

export default ErrorPage;
