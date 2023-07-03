import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const SupportHooks = () => {
  const onSupportMessagePress = () => {
    navigation.navigate(ROUTES.SUPPORT.SUPPORT_MESSAGES as never);
  };
  const onAnswerQuestionPress = () => {
    navigation.navigate(ROUTES.SUPPORT.ANSWER_QUESTIONS as never);
  };

  const onUsersMaualPress = () => {
    navigation.navigate(ROUTES.SUPPORT.USERS_MAUAL as never);
  };
  const onSupportSuggestPress = () => {
    navigation.navigate(ROUTES.SUPPORT.SUPPORT_SUGGEST as never);
  };
  const onChatSupportPress = () => {
    navigation.navigate(ROUTES.SUPPORT.CHAT_SUPPORT as never);
  };

  const navigation = useNavigation();
  return {
    onSupportMessagePress,
    onAnswerQuestionPress,
    onUsersMaualPress,
    onSupportSuggestPress,
    onChatSupportPress,
  };
};
