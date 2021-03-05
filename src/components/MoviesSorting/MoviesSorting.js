import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, {Item as MenuItem} from 'rc-menu';
import { typeOfSorting } from '../../constants';
import PropTypes from 'prop-types';
import 'rc-dropdown/assets/index.css';
import './MoviesSorting.scss';

const MoviesSorting = ({setTypeSorting, typeSorting}) => {
  const onSelect = ({key}) => {
    setTypeSorting(key);
  };

  const menu = (
    <Menu onSelect={onSelect}>
      {Object.entries(typeOfSorting).map(([key, value]) => <MenuItem key={key}>{value}</MenuItem>)}
    </Menu>
  );

  return (
    <div className="sorting">
      <div className="sorting-title">Sort by</div>
      <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
        <div className="sorting-type">
          <span>{typeOfSorting[typeSorting]}</span>
          <span className="icon"></span>
        </div>
      </Dropdown>
    </div>
  );
};

MoviesSorting.propTypes = {
  typeSorting: PropTypes.string,
  setTypeSorting: PropTypes.func,
};

export default MoviesSorting;