import {combineReducers} from '@reduxjs/toolkit';
import profileSlice from './profile.slice';

export const rootReducer = combineReducers({profile: profileSlice});
