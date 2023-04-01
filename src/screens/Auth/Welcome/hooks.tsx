import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/ROUTES';
export const WelcomeHooks = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.MAIN.HOME as never);
  };
  return {onPress};
};
