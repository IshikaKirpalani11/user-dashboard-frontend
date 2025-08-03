// src/features/users/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Charlie', role: 'Manager', status: 'Active' },
  ],
  selectedRole: 'All',
  searchText: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setFilterRole: (state, action) => {
      state.selectedRole = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    toggleStatus: (state, action) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.status = user.status === 'Active' ? 'Inactive' : 'Active';
      }
    },
  },
});

export const { setUsers, setFilterRole, setSearchText, toggleStatus } = userSlice.actions;
export default userSlice.reducer;
