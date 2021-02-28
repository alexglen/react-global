import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({setSearchValue}) => {
  const [value, setValue] = useState('');
  const handlerForm = useCallback(
    (event) => {
      event.preventDefault();
      setSearchValue(value);
    },
    [value, setSearchValue]
  );

  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handlerForm}>
        <input type="text" placeholder="What do you want to watch?" value={value} onChange={({target: {value}}) => setValue(value)} />
        <button>search</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchValue: PropTypes.func,
};

export default Search;
