import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {ModeratorHistoryiesType} from '../../../api/types';
export const useCallHistoryPayment = () => {
  const IsFocused = useIsFocused();
  const [moderatorHistoryies, setModeratorHistoryies] = useState<
    ModeratorHistoryiesType[]
  >([]);

  const getoderatorHistoryies = useCallback(async () => {
    try {
      const res = await REQUESTS.statistic.getModeratorHistories();
      console.log(res);
      setModeratorHistoryies(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    IsFocused && getoderatorHistoryies();
  }, [IsFocused, getoderatorHistoryies]);

  return {moderatorHistoryies};
};
