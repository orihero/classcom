import {combineReducers} from '@reduxjs/toolkit';
import profileSlice from './profile.slice';
import userSlice from './user.slice';
import testSlice from './test.slice';
import sliderRangeSlice from './sliderRange';
import NotifactionCountSlice from './notifactionCounter';

export const rootReducer = combineReducers({
  profile: profileSlice,
  user: userSlice,
  test: testSlice,
  range: sliderRangeSlice,
  notifactionCount: NotifactionCountSlice,
});
