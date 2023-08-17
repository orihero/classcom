/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import ThematicInnerScreen from '../../screens/Main/Thematic-inner/view';

const Stack = createNativeStackNavigator();

const ThematicPlanStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER_STACK.THEMATIC_PLANE}
        component={ThematicPlanScreen}
      />
      <Stack.Screen
        name={ROUTES.THEMATIC.THEMATIC_INNER}
        component={ThematicInnerScreen}
      />
    </Stack.Navigator>
  );
};

export default ThematicPlanStack;
