import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import TestingScreen from '../../screens/Main/Testing/view';
import CreateTestScreen from '../../screens/Main/CreateTest/view';

const Stack = createNativeStackNavigator();

const TestingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DRAWER.TESTING} component={TestingScreen} />
      <Stack.Screen
        name={ROUTES.TESTING.CREATE_TEST}
        component={CreateTestScreen}
      />
    </Stack.Navigator>
  );
};

export default TestingStack;
