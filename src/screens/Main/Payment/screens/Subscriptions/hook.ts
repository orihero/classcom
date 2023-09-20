import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {PostPayment, SubscriptionsItemProps} from '../../../../../api/types';
import {REQUESTS} from '../../../../../api/requests';
import {ROUTES} from '../../../../../navigation/routes';

export const useSubscriptionsHook = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [subscriptions, setSubscriptions] = useState<SubscriptionsItemProps[]>(
    [],
  );

  const getSubscriptions = useCallback(async () => {
    try {
      const res = await REQUESTS.payment.getSubscriptionsItems();
      setSubscriptions(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const postPayment = useCallback(
    async (data: PostPayment) => {
      try {
        const res = await REQUESTS.payment.postPayment(data);
        console.log(res.data, 'responce data ');
        //@ts-ignore
        navigation.navigate(ROUTES.WEB_VIEW.WEB_VIEW, {
          uri: res.data.result.paymentRedirectUrl,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [navigation],
  );

  const handlePaymentGetID = useCallback(
    (id: number) => {
      const data = {
        subscriptionId: id,
      };
      postPayment(data);
    },
    [postPayment],
  );

  useEffect(() => {
    isFocused && getSubscriptions();
  }, [isFocused, getSubscriptions]);

  return {
    handlePaymentGetID,
    subscriptions,
  };
};
