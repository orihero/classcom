import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../../../api/requests';
import {useIsFocused} from '@react-navigation/native';

const useScheduleHook = () => {
  const IsFocused = useIsFocused();
  const [weeklySchedule, setWeeklySchedule] = useState<any>();

  const getWeekSchedule = useCallback(
    async (_weekId: number, _shift: number | string) => {
      try {
        const res = await REQUESTS.general.getWeeklySchedule(_weekId, _shift);
        setWeeklySchedule(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  useEffect(() => {
    IsFocused && getWeekSchedule(0, 1);
  }, [IsFocused, getWeekSchedule]);

  return {weeklySchedule};
};

export default useScheduleHook;
