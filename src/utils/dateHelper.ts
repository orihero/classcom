import {RUSSAIN_MONTHS2, RUSSAIN_WEEKDAYS2} from '../constants/dates';

export const dateInRussain = (date: Date = new Date(Date.now())) => {
  const currentDate =
    date.getDate() +
    ' ' +
    RUSSAIN_MONTHS2[date.getMonth()] +
    ' ' +
    (date.getFullYear() < 10 ? '0' : '') +
    date.getFullYear();

  return currentDate;
};

export const getWeekDays = (current: Date = new Date(Date.now())) => {
  const curr = new Date(current);
  console.log(curr.getDate(), curr.getDay(), curr.getMonth(), 'curr date');

  var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
  console.log(firstday.getDate(), 'firstday');

  const arr = [];
  for (let i = 0; i <= 6; i++) {
    const date = i + firstday.getDate();
    arr.push({
      date,
      day: RUSSAIN_WEEKDAYS2[i],
      current: date === current.getDate(),
      month: current.getMonth() + 1,
      year: current.getFullYear(),
    });
  }
  return arr;
};

export const calculateWeekId = (date: Date = new Date(Date.now())) => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};
