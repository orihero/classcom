/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import TestingScreen from '../../screens/Main/Testing/view';
import CreateTestScreen from '../../screens/Main/CreateTest/view';
import TestingSingleChoice from '../../screens/Main/Testing/screens/TestingSingle/TestingSingle';
import TestingMultipleChoice from '../../screens/Main/Testing/screens/TestingMultiple/TestingMultiple';
import TestingSubChoice from '../../screens/Main/Testing/screens/TestingSubsequence/TestingSubsequence';
import TestingCorresponChoice from '../../screens/Main/Testing/screens/TestingCorrespon/TestingCorrespon';
import TestingOmissionsChoice from '../../screens/Main/Testing/screens/TestingOmissions/TestOmissions';
import TestingBooleanChoice from '../../screens/Main/Testing/screens/TestingBoolean/TestingBoolean';

const Stack = createNativeStackNavigator();

const TestingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DRAWER.TESTING} component={TestingScreen} />
      <Stack.Screen
        name={ROUTES.TESTING.CREATE_TEST}
        component={CreateTestScreen}
      />
      <Stack.Screen
        name={ROUTES.TESTING.TESTING_SINGLE_CHOICE}
        component={TestingSingleChoice}
      />
      <Stack.Screen
        name={ROUTES.TESTING.TESTING_MULTIPLE_CHOICE}
        component={TestingMultipleChoice}
      />
      <Stack.Screen
        name={ROUTES.TESTING.TESTING_SUBSEQUENCE}
        component={TestingSubChoice}
      />
      <Stack.Screen
        name={ROUTES.TESTING.TESTING_CORRESPONDENCE}
        component={TestingCorresponChoice}
      />
      <Stack.Screen
        name={ROUTES.TESTING.TESTING_OMISSIONS}
        component={TestingOmissionsChoice}
      />
      <Stack.Screen
        name={ROUTES.TESTING.TESTING_BOOLEAN_QUESTION}
        component={TestingBooleanChoice}
      />
    </Stack.Navigator>
  );
};

export default TestingStack;
