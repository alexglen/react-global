import Button from '../UI-kit/Button/Button';
import styles from './Error404.module.scss';

const Error404 = () => {
  // const { push } = useHistory();
  return (
    <main className={styles.error}>
      <p className={styles.title}>Can't you find?</p>
      <p className={styles.text}>
        We couldn't find this page. But there are still a lot of interesting things on the main page
      </p>
      <div className={styles.errorButton}>
        <Button color='primary' onClick={() => push('/')}>
          To main page
        </Button>
      </div>
      <div className={styles.errorCode}>
        <p>Error code: 404</p>
      </div>
    </main>
  );
};

export default Error404;
