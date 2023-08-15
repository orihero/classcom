/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import SettingScreen from '../../screens/Main/Setting/view';
import ChangePasswordView from '../../screens/Main/ChangePassword';
import ChangePasswordWithCode from '../../screens/Main/ChangePassPhoneCode';
import NewPasswordScreen from '../../screens/Main/NewPassword';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER_STACK.THEMATIC_PLANE}
        component={SettingScreen}
      />
      <Stack.Screen
        name={ROUTES.SETTING.CHANGE_PASSWORD}
        component={ChangePasswordView}
      />
      <Stack.Screen
        name={ROUTES.SETTING.CHANGE_PHONE}
        component={ChangePasswordWithCode}
      />
      <Stack.Screen
        name={ROUTES.SETTING.NEW_PASSWORD}
        component={NewPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
