import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {ScheduleCourses} from '../../../api/types';
export const HomeHooks = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleCourses[]>();
  const isFocused = useIsFocused();

  const getScheduleCourses = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getScheduleCourses();
      setScheduleData(res.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    isFocused && getScheduleCourses();
  }, [isFocused, getScheduleCourses]);

  return {};
};
