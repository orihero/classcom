import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const StatisticHooks = () => {
  const navigation = useNavigation();

  const onPressHistoryPayment = () => {
    navigation.navigate(ROUTES.STATISTIC.HISTORY_PAYMENT as never);
  };

  const onPressHistoryPaymentDownload = () => {
    navigation.navigate(ROUTES.STATISTIC.HISTORY_PAYMENT_DOWNLOAD as never);
  };

  const onPressHistoryPaymentCall = () => {
    navigation.navigate(ROUTES.STATISTIC.HISTORY_PAYMENT_CALL as never);
  };

  return {
    onPressHistoryPayment,
    onPressHistoryPaymentDownload,
    onPressHistoryPaymentCall,
  };
};
