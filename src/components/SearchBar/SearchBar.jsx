import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../../features/users/userSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.users.searchText);

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchText}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
