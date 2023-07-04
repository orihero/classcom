import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../configureStore';
import {IAccountResponse} from '../../api/types';

export interface IProfile {
  id_token: string;
  iAccount: IAccountResponse;
}

const initialState: IProfile = {
  id_token: '',
  iAccount: {} as IAccountResponse,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<IProfile>) => {
      return action.payload;
    },
    loggedOut: () => initialState,
  },
});

export const profileSelector = (e: RootState) => e.profile;

export const {loggedIn, loggedOut} = profileSlice.actions;

export default profileSlice.reducer;
