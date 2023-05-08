import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IAccountResponse} from '../../api/types';
import {RootState} from '../configureStore';

const initialState: Partial<IAccountResponse> = {};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    userLoaded: (state, action: PayloadAction<IAccountResponse>) => {
      return action.payload;
    },
  },
});

export const userSelector = (state: RootState) => state.user;

export const {userLoaded} = userSlice.actions;

export default userSlice.reducer;
