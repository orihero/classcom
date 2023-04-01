import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorizationScreen from '../screens/Auth/Authorization/view';
import RegistrationScreen from '../screens/Auth/Registration/view';
import PublicOfferScreen from '../screens/Auth/Public-offer/view';
import WelcomeScreen from '../screens/Auth/Welcome/view';
import {ROUTES} from './ROUTES';
import HomeScreen from '../screens/Main/Home/view';
import CalendarSettingScreen from '../screens/Main/Calendar-setting/view';


export type RootNavigatorParamList = {
  [ROUTES.AUTH.AUTHORIZATION]: undefined;
  [ROUTES.AUTH.PUBLIC_OFFER]: undefined;
  [ROUTES.AUTH.REGISTRATION]: undefined;
  [ROUTES.AUTH.WELCOME]: undefined;
  [ROUTES.MAIN.HOME]: undefined;
  [ROUTES.MAIN.CALENDAR_SETTING]: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
