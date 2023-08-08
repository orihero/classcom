import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {useIsFocused} from '@react-navigation/native';
import {TransactionHistory} from '../../../api/types';

export const HistoryPaymentHook = () => {
  const [historyPayment, setHistoryPayment] = useState<TransactionHistory>(
    {} as TransactionHistory,
  );
  const IsFocused = useIsFocused();

  const getHistoryPayment = useCallback(async () => {
    try {
      const res = await REQUESTS.statistic.getTransactionHistory();
      setHistoryPayment(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    IsFocused && getHistoryPayment();
  }, [IsFocused, getHistoryPayment]);
  return {historyPayment};
};
