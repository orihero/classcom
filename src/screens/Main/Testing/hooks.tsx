import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const TestingHooks = () => {
  const navigation = useNavigation();
  const onCreateTestPress = () => {
    navigation.navigate(ROUTES.TESTING.CREATE_TEST as never);
  };
  return {onCreateTestPress};
};
