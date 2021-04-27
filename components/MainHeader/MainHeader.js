import Logo from '../Logo/Logo';
import Search from './Search/Search';
import { typeAdd } from '../../constants';
import { useDispatch } from 'react-redux';
import { openCardModal, setTypeEvent } from '../../actions';
import styles from './MainHeader.module.scss';

const MainHeader = () => {
  const dispatch = useDispatch();

  const openAddMovieModal = () => {
    dispatch(openCardModal());
    dispatch(setTypeEvent(typeAdd));
  };

  return (
    <div className={styles.header}>
      <div className={styles.subheader}>
        {/* <NavLink to='/'> */}
        <Logo />
        {/* </NavLink> */}

        <div className={styles.button}>
          <button onClick={openAddMovieModal}>+ Add Movie</button>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default MainHeader;
