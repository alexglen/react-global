// import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import search from './search-icon.png';
import styles from './MovieDetailsHeader.module.scss';

const MovieDetailsHeader = () => {
  return (
    <header className={styles.header}>
      {/* <NavLink to='/'> */}
      <Logo />
      {/* </NavLink> */}
      {/* <NavLink to='/'> */}
      <img src={search} alt='search-icon' />
      {/* </NavLink> */}
    </header>
  );
};

export default MovieDetailsHeader;
