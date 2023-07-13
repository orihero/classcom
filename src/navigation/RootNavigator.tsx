/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorizationScreen from '../screens/Auth/Authorization/view';
import PublicOfferScreen from '../screens/Auth/Public-offer/view';
import RegistrationScreen from '../screens/Auth/Registration/view';
import WelcomeScreen from '../screens/Auth/Welcome/view';
import {ROUTES} from './routes';
import DrawerNavigator from './DrawerNavigation';
import {useSelector} from 'react-redux';
import {profileSelector} from '../store/slices/profile.slice';
import {IThematicPlanResource} from '../api/types';

export type RootNavigatorParamList = {
  [ROUTES.AUTH.AUTHORIZATION]: undefined;
  [ROUTES.AUTH.PUBLIC_OFFER]: undefined;
  [ROUTES.AUTH.REGISTRATION]: undefined;
  [ROUTES.AUTH.WELCOME]: undefined;
  [ROUTES.DRAWER.DRAWER]: undefined;
  [ROUTES.THEMATIC.THEMATIC_INNER]: {item: IThematicPlanResource};
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  const {id_token} = useSelector(profileSelector);
  return (
    <Stack.Navigator
      // initialRouteName={ROUTES.DRAWER.DRAWER}
      screenOptions={{headerShown: false}}>
      {!id_token ? (
        <Stack.Group>
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
        </Stack.Group>
      ) : (
        <Stack.Screen name={ROUTES.DRAWER.DRAWER} component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
