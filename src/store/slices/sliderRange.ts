import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../configureStore';

export interface ISliderRangeProps {
  value: number;
}

export const sliderRangeSlice = createSlice({
  name: 'sliderRange',
  initialState: {} as ISliderRangeProps,
  reducers: {
    sliderRange: (state, action: PayloadAction<ISliderRangeProps>) => {
      return action.payload;
    },
  },
});

export const sliderRangeSelector = (e: RootState) => e.range;

export const {sliderRange} = sliderRangeSlice.actions;

export default sliderRangeSlice.reducer;
