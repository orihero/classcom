import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/ROUTES';
export const PublicOfferHooks = () => {
  const navigation = useNavigation();
  const onWelcomePress = () => {
    navigation.navigate(ROUTES.AUTH.WELCOME as never);
  };
  const goBack = () => {
    navigation.goBack();
  };
  return {goBack, onWelcomePress};
};
