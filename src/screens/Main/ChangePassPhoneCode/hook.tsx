import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';

const useSendSmsToPhoneNumber = () => {
  const naavigation = useNavigation();

  const onNextScreen = () => {
    naavigation.navigate(ROUTES.SETTING.NEW_PASSWORD as never);
  };

  return {onNextScreen};
};

export default useSendSmsToPhoneNumber;
