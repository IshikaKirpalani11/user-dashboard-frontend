import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterRole } from '../../features/users/userSlice';

const RoleFilter = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.users.filterRole);

  const handleChange = (e) => {
    dispatch(setFilterRole(e.target.value));
  };

  return (
    <select value={role} onChange={handleChange}>
      <option value="All">All</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
      <option value="Manager">Manager</option>
    </select>
  );
};

export default RoleFilter;
