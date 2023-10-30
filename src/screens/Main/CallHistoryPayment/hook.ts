import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {ModeratorHistoryiesType} from '../../../api/types';
export const useCallHistoryPayment = () => {
  const IsFocused = useIsFocused();
  const [moderatorHistoryies, setModeratorHistoryies] = useState<
    ModeratorHistoryiesType[]
  >([]);
  const [loading, setLoading] = useState(false);

  const getoderatorHistoryies = useCallback(async () => {
    setLoading(true);
    try {
      const res = await REQUESTS.statistic.getModeratorHistories();
      console.log(res);
      setModeratorHistoryies(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      //@ts-ignore
      CustomSnackbar.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    IsFocused && getoderatorHistoryies();
  }, [IsFocused, getoderatorHistoryies]);

  return {moderatorHistoryies, loading};
};
