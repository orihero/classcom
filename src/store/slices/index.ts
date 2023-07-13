import {combineReducers} from '@reduxjs/toolkit';
import profileSlice from './profile.slice';
import userSlice from './user.slice';

export const rootReducer = combineReducers({
  profile: profileSlice,
  user: userSlice,
});
