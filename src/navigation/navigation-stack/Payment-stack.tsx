/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';

import PaymentScreen from '../../screens/Main/Payment/view';

const Stack = createNativeStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER_STACK.PAYMENT}
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;
