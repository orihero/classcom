/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import SupportScreen from '../../screens/Main/Support/view';
import SettingScreen from '../../screens/Main/Setting/view';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER.THEMATIC_PLANE}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
