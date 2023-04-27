/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import SupportScreen from '../../screens/Main/Support/view';
import SupportMessagesScreen from '../../screens/Main/Support-messages/view';
import AnswerQuestionScreen from '../../screens/Main/ Answers-questions/view';

const Stack = createNativeStackNavigator();

const SupportStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER.THEMATIC_PLANE}
        component={SupportScreen}
      />
      <Stack.Screen
        name={ROUTES.SUPPORT.SUPPORT_MESSAGES}
        component={SupportMessagesScreen}
      />
      <Stack.Screen
        name={ROUTES.SUPPORT.ANSWER_QUESTIONS}
        component={AnswerQuestionScreen}
      />
    </Stack.Navigator>
  );
};

export default SupportStack;
