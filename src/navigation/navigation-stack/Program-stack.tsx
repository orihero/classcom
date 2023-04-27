/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import ProgramScreen from '../../screens/Main/program/view';

const Stack = createNativeStackNavigator();

const ProgramStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER.THEMATIC_PLANE}
        component={ProgramScreen}
      />
    </Stack.Navigator>
  );
};

export default ProgramStack;
