import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {useIsFocused} from '@react-navigation/native';
import {TransactionHistory} from '../../../api/types';
import {CustomSnackbar} from '../../../components/custom-snackbar';

export const HistoryPaymentHook = () => {
  const [historyPayment, setHistoryPayment] = useState<TransactionHistory>(
    {} as TransactionHistory,
  );
  const [loading, setLoading] = useState(false);
  const IsFocused = useIsFocused();

  const getHistoryPayment = useCallback(async () => {
    setLoading(true);
    try {
      const res = await REQUESTS.statistic.getTransactionHistory();
      setHistoryPayment(res.data);
      setLoading(false);
    } catch (e) {
      //@ts-ignore
      CustomSnackbar.error(e?.response?.data.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    IsFocused && getHistoryPayment();
  }, [IsFocused, getHistoryPayment]);
  return {historyPayment, loading};
};
