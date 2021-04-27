import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import { useDispatch, useSelector } from 'react-redux';
import { sortMovies } from '../../redux/actions';
import { sortingTypes } from '../../types';
import { sortingSelector } from '../../redux/selectors/sortingSelectors';
import 'rc-dropdown/assets/index.css';
import './MoviesSorting.module.scss';

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
    <div className='sorting'>
      <div className='sorting-title'>Sort by</div>
      <Dropdown trigger={['click']} overlay={menu} animation='slide-up'>
        <div className='sorting-type'>
          <span>{sortingTypes[sorting]}</span>
          <span className='icon'></span>
        </div>
      </Dropdown>
    </div>
  );
};

export default MoviesSorting;
