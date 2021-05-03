import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import { useDispatch, useSelector } from 'react-redux';
import { sortMovies } from '../../redux/actions';
import { sortingTypes } from '../../constants';
import { sortingSelector } from '../../redux/selectors/sortingSelectors';
import 'rc-dropdown/assets/index.css';
import styles from './MoviesSorting.module.scss';

const MoviesSorting = () => {
  const dispatch = useDispatch();

  const sorting = useSelector(sortingSelector);

  const onSelect = ({ key }) => {
    dispatch(sortMovies(key));
  };

  const menu = (
    <Menu onSelect={onSelect}>
      {Object.entries(sortingTypes).map(([key, value]) => (
        <MenuItem key={key}>{value}</MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className={styles.sorting}>
      <div className={styles.title}>Sort by</div>
      <Dropdown trigger={['click']} overlay={menu} animation='slide-up'>
        <div className={styles.type}>
          <span>{sortingTypes[sorting]}</span>
          <span className={styles.icon}></span>
        </div>
      </Dropdown>
    </div>
  );
};

export default MoviesSorting;
