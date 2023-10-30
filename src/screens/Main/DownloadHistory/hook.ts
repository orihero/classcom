import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {CustomSnackbar} from '../../../components/custom-snackbar';

export const useDownloadHistoryhook = () => {
  const isFocused = useIsFocused();
  const [downloadHistory, setDownloadHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDownloadHistory = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await REQUESTS.statistic.getDownloadHistory();
      setDownloadHistory(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      // @ts-ignore
      CustomSnackbar.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    isFocused && getDownloadHistory();
  }, [isFocused, getDownloadHistory]);

  return {
    downloadHistory,
    loading,
  };
};
