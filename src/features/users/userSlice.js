import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersData from '../../mockdata/users.json';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersData);
    }, 500);
  });
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',
    searchText: '',
    filterRole: 'All',
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilterRole: (state, action) => {
      state.filterRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearchText, setFilterRole } = userSlice.actions;

export default userSlice.reducer;
