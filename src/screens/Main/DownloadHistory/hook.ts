import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';

export const useDownloadHistoryhook = () => {
  const isFocused = useIsFocused();
  const [downloadHistory, setDownloadHistory] = useState([]);

  const getDownloadHistory = useCallback(async () => {
    try {
      const {data} = await REQUESTS.statistic.getDownloadHistory();
      setDownloadHistory(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    isFocused && getDownloadHistory();
  }, [isFocused, getDownloadHistory]);

  return {
    downloadHistory,
  };
};
