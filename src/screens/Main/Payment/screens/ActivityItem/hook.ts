import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../../../api/requests';
import {TransactionHistory} from '../../../../../api/types';
export const useActivityItemHook = () => {
  const isFocused = useIsFocused();
  const [subscription, setSubscription] = useState<TransactionHistory>(
    {} as TransactionHistory,
  );

  const getActiveSubscription = useCallback(async () => {
    try {
      const res = await REQUESTS.statistic.getTransactionHistory();
      setSubscription(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    isFocused && getActiveSubscription();
  }, [isFocused, getActiveSubscription]);

  return {
    subscription,
  };
};
