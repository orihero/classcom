import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import TestingScreen from '../../screens/Main/Testing/view';

const Stack = createNativeStackNavigator();

const StatisticStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DRAWER.TESTING} component={TestingScreen} />
    </Stack.Navigator>
  );
};

export default StatisticStack;
