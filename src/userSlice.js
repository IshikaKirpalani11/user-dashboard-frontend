import { createSlice } from '@reduxjs/toolkit';
import users from './mockdata/users.json'; // updated path

const initialState = {
  userList: users,
  filterRole: 'All',
  searchText: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      const user = state.userList.find(u => u.id === action.payload);
      if (user) {
        user.status = user.status === 'Active' ? 'Inactive' : 'Active';
      }
    },
    setFilterRole: (state, action) => {
      state.filterRole = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { toggleStatus, setFilterRole, setSearchText } = userSlice.actions;
export default userSlice.reducer;
