import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';

const useNewPasswordHook = () => {
  const navigation = useNavigation();
  const onSettingScreen = () => {
    navigation.navigate(ROUTES.STACK.SETTING_STACK as never);
  };
  return {onSettingScreen};
};

export default useNewPasswordHook;
