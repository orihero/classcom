import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const SupportHooks = () => {
  const onSupportMessagePress = () => {
    navigation.navigate(ROUTES.SUPPORT.SUPPORT_MESSAGES as never);
  };
  const onAnswerQuestionPress = () => {
    navigation.navigate(ROUTES.SUPPORT.ANSWER_QUESTIONS as never);
  };
  const navigation = useNavigation();
  return {onSupportMessagePress, onAnswerQuestionPress};
};
