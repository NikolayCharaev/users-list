import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearchUsers = createAsyncThunk('users/fetchByIdStatus', async (value: string) => {
  const names: string[] = [];
  const ids: number[] = [];

  const values = value.split(',');
  values.forEach((val) => {
    if (isNaN(parseInt(val))) {
      names.push(val.trim());
    } else {
      ids.push(parseInt(val.trim()));
    }
  });

  let url = 'https://jsonplaceholder.typicode.com/users';
  if (names.length > 0) {
    url += `?name=${names.join('&name=')}`;
  }
  if (ids.length > 0) {
    url += `?id=${ids.join('&id=')}`;
  }

  const response = await axios.get(url);
  return response.data;
});


interface UsersState {
  searchValue: string;
  searchResult: [];
  oneUser: {};
  status: 'idle' | 'pending' | 'succeeded' | 'failed' | 'empty';
}

const initialState: UsersState = {
  searchValue: '',
  searchResult: [],
  oneUser: {},
  status: 'idle',
};

export const usersSlice = createSlice({
  name: 'searchUser',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;

      if (state.searchValue === '') {
        state.searchResult = [];
        state.status = 'idle';
      }
    },

    setOneUser: (state, action) => {
      state.oneUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchUsers.pending, (state) => {
        state.status = 'pending';
        state.searchResult = [];
      })
      .addCase(fetchSearchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResult = action.payload;

        if (state.searchResult.length <= 0) {
          state.status = 'empty';
        }
      })
      .addCase(fetchSearchUsers.rejected, (state) => {
        state.status = 'failed';
        state.searchResult = [];
      });
  },
});

export const { setSearchValue, setOneUser } = usersSlice.actions;

export default usersSlice.reducer;
