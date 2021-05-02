import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './MovieDetailsHeader.module.scss';

const MovieDetailsHeader = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <div>
          <Logo onClick={() => alert()} />
        </div>
      </Link>
      <Link href='/'>
        <div>
          <img src='/icon.png' />
        </div>
      </Link>
    </header>
  );
};

export default MovieDetailsHeader;
