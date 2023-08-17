/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ThematicPlanScreen from '../../screens/Main/Thematic-plan/view';
import {ROUTES} from '../routes';
import SupportScreen from '../../screens/Main/Support/view';
import SupportMessagesScreen from '../../screens/Main/Support-messages/view';
import AnswerQuestionScreen from '../../screens/Main/ Answers-questions/view';
import UsersMaual from '../../screens/Main/UsersManual';
import SupportSuggest from '../../screens/Main/SupportSuggest';
import ChatSupport from '../../screens/Main/ChatSupport';

const Stack = createNativeStackNavigator();

const SupportStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.DRAWER_STACK.THEMATIC_PLANE}
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
      <Stack.Screen name={ROUTES.SUPPORT.USERS_MAUAL} component={UsersMaual} />
      <Stack.Screen
        name={ROUTES.SUPPORT.SUPPORT_SUGGEST}
        component={SupportSuggest}
      />
      <Stack.Screen
        name={ROUTES.SUPPORT.CHAT_SUPPORT}
        component={ChatSupport}
      />
    </Stack.Navigator>
  );
};

export default SupportStack;
