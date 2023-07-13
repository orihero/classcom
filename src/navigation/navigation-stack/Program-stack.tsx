/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import ProgramScreen from '../../screens/Main/program/view';
import ModeratorsScreen from '../../screens/Main/ Moderators';
import DirectoryScreen from '../../screens/Main/Directory';
import TermsAndConditions from '../../screens/Main/TermsOfUse';

const Stack = createNativeStackNavigator();

const ProgramStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER.THEMATIC_PLANE}
        component={ProgramScreen}
      />
      <Stack.Screen
        name={ROUTES.PROGRAM.MODERATORS}
        component={ModeratorsScreen}
      />
      <Stack.Screen
        name={ROUTES.PROGRAM.DIRECTORY}
        component={DirectoryScreen}
      />
      <Stack.Screen
        name={ROUTES.PROGRAM.TERMS_OF_USE}
        component={TermsAndConditions}
      />
    </Stack.Navigator>
  );
};

export default ProgramStack;
