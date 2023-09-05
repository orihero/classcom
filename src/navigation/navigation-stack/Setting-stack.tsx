/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import SettingScreen from '../../screens/Main/Setting/view';
import RequestCodeView from '../../screens/Main/RequestCode/view';
import ConfirimCodeView from '../../screens/Main/ConfirimCode/view';
import NewPasswordScreen from '../../screens/Main/NewPassword/view';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER_STACK.SETTING}
        component={SettingScreen}
      />
      <Stack.Screen
        name={ROUTES.SETTING.REQUEST_CODE}
        component={RequestCodeView}
      />
      <Stack.Screen
        name={ROUTES.SETTING.CONFIRIM_CODE}
        component={ConfirimCodeView}
      />
      <Stack.Screen
        name={ROUTES.SETTING.NEW_PASSWORD}
        component={NewPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
