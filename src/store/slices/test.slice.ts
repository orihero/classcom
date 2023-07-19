import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICreateNewTest} from '../../api/types';
import {RootState} from '../configureStore';

export const testSlice = createSlice({
  name: 'test',
  initialState: {} as ICreateNewTest,
  reducers: {
    setTest: (state, action: PayloadAction<ICreateNewTest>) => {
      return action.payload;
    },
  },
});

export const testSelector = (state: RootState) => state.test;

export const {setTest} = testSlice.actions;

export default testSlice.reducer;
