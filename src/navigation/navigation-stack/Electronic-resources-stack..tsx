/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import ElectronicResourceScreen from '../../screens/Main/Electronic-resources/view';

const Stack = createNativeStackNavigator();

const ElectronicResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER.ELECTRONIC_RESOURCES}
        component={ElectronicResourceScreen}
      />
    </Stack.Navigator>
  );
};

export default ElectronicResourcesStack;
