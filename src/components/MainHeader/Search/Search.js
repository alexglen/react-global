import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import Button from '../../Button/Button';

const Search = ({setSearchValue}) => {
  const [value, setValue] = useState('');
  const handleForm = useCallback((event) => {
      event.preventDefault();
      setSearchValue(value);
    },
    [value, setSearchValue]
  );

  const handleChange = useCallback(({target: {value}}) => {
    setValue(value);
  }, [])

  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="What do you want to watch?" value={value} onChange={handleChange} />
        <Button>search</Button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchValue: PropTypes.func,
};

export default Search;
