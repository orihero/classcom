import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const AuthorizationHooks = () => {
  const navigation = useNavigation();
  const onRegisterPress = () => {
    navigation.navigate(ROUTES.AUTH.REGISTRATION as never);
  };
  return {onRegisterPress};
};
