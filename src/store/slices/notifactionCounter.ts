import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NotifactionType} from './../../api/types';

export interface NotifactionCountType {
  allNotifaction: NotifactionType[];
  count: number;
}

export const NotifactionCountSlice = createSlice({
  name: 'notifactionCount',
  initialState: {} as NotifactionCountType,
  reducers: {
    notifactionCount: (state, action: PayloadAction<NotifactionCountType>) => {
      return action.payload;
    },
  },
});

export const notifactionCountSelector = (e: NotifactionCountType) => e.count;

export const {notifactionCount} = NotifactionCountSlice.actions;

export default NotifactionCountSlice.reducer;
