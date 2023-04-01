import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IUser {
  name: string;
}

const initialState: IUser = {
  name: 'OriHero UZB',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
  },
});

export const {loggedIn} = userSlice.actions;

export default userSlice.reducer;
