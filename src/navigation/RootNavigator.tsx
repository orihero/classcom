/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorizationScreen from '../screens/Auth/Authorization/view';
import PublicOfferScreen from '../screens/Auth/Public-offer/view';
import RegistrationScreen from '../screens/Auth/Registration/view';
import WelcomeScreen from '../screens/Auth/Welcome/view';
import CalendarSettingScreen from '../screens/Main/Calendar-setting/view';
import CreateTestScreen from '../screens/Main/CreateTest/view';
import HomeScreen from '../screens/Main/Home/view';
import NotificationScreen from '../screens/Main/Notifications/view';
import {ROUTES} from './routes';

export type RootNavigatorParamList = {
  [ROUTES.AUTH.AUTHORIZATION]: undefined;
  [ROUTES.AUTH.PUBLIC_OFFER]: undefined;
  [ROUTES.AUTH.REGISTRATION]: undefined;
  [ROUTES.AUTH.WELCOME]: undefined;
  [ROUTES.MAIN.HOME]: undefined;
  [ROUTES.MAIN.CALENDAR_SETTING]: undefined;
  [ROUTES.MAIN.NOTIFICATIONS]: undefined;
  [ROUTES.MAIN.CREATE_TEST]: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.MAIN.CREATE_TEST}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.AUTH.AUTHORIZATION}
        component={AuthorizationScreen}
      />

      <Stack.Screen
        name={ROUTES.AUTH.REGISTRATION}
        component={RegistrationScreen}
      />
      <Stack.Screen
        name={ROUTES.AUTH.PUBLIC_OFFER}
        component={PublicOfferScreen}
      />
      <Stack.Screen name={ROUTES.AUTH.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ROUTES.MAIN.CALENDAR_SETTING}
        component={CalendarSettingScreen}
      />
      <Stack.Screen
        name={ROUTES.MAIN.NOTIFICATIONS}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={ROUTES.MAIN.CREATE_TEST}
        component={CreateTestScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
