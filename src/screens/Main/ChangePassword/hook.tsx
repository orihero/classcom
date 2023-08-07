import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';

const useChangePhoneNumber = () => {
  const naavigation = useNavigation();

  const onNextScreen = () => {
    naavigation.navigate(ROUTES.SETTING.CHANGE_PHONE as never);
  };

  return {onNextScreen};
};

export default useChangePhoneNumber;
