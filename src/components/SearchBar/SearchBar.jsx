import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../features/users/userSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setSearchText(input));
    }, 300); // debounce
    return () => clearTimeout(delay);
  }, [input, dispatch]);

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search by name..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default SearchBar;
