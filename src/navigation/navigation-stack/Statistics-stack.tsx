/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import StatisticScreen from '../../screens/Main/Statistics/view';
import HistoryPaymentView from '../../screens/Main/HistoryPayment';
import DownloadHistoryPayment from '../../screens/Main/DownloadHistory';
import CallHistoryPayment from '../../screens/Main/CallHistoryPayment';

const Stack = createNativeStackNavigator();

const StatisticStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DRAWER.TESTING} component={StatisticScreen} />
      <Stack.Screen
        name={ROUTES.STATISTIC.HISTORY_PAYMENT}
        component={HistoryPaymentView}
      />
      <Stack.Screen
        name={ROUTES.STATISTIC.HISTORY_PAYMENT_DOWNLOAD}
        component={DownloadHistoryPayment}
      />
      <Stack.Screen
        name={ROUTES.STATISTIC.HISTORY_PAYMENT_CALL}
        component={CallHistoryPayment}
      />
    </Stack.Navigator>
  );
};

export default StatisticStack;
