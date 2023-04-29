import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {useDispatch} from 'react-redux';
import {loggedOut} from '../../store/slices/profile.slice';
import {useEffect, useState} from 'react';
import {REQUESTS} from '../../api/requests';
import {AccountResource} from '../../api/types';

export const DrawerHook = () => {
  const navigation = useNavigation();
  const [account, setAccount] = useState<AccountResource[] | null>([]);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(loggedOut());
  };

  const onHomePress = () => {
    navigation.navigate(ROUTES.MAIN.HOME as never);
  };
  const onSettingPress = () => {
    navigation.navigate(ROUTES.STACK.SETTING_STACK as never);
  };
  const onElectronicPress = () => {
    navigation.navigate(ROUTES.STACK.ELECTRONIC_STACK as never);
  };
  const onPaymentPress = () => {
    navigation.navigate(ROUTES.STACK.PAYMENT_STACK as never);
  };
  const onProgramPress = () => {
    navigation.navigate(ROUTES.STACK.PROGRAM_STACK as never);
  };
  const onStatisticPress = () => {
    navigation.navigate(ROUTES.STACK.STATISTICS_STACK as never);
  };
  const onSupportPress = () => {
    navigation.navigate(ROUTES.STACK.SUPPORT_STACK as never);
  };
  const onThematicPress = () => {
    navigation.navigate(ROUTES.STACK.THEMATIC_STACK as never);
  };
  const onTestingPress = () => {
    navigation.navigate(ROUTES.STACK.TESTING_STACK as never);
  };
  useEffect(() => {
    const effect = async () => {
      try {
        const res = await REQUESTS.general.getAccount();
        setAccount(res.data);
      } catch (error) {
        // console.log('====================================ACCounT');
        // console.log('ERROR', JSON.stringify(error, null, 4));
        // console.log('====================================LEEEEE');
      }
    };
    effect();
  }, []);
  return {
    onHomePress,
    onElectronicPress,
    onPaymentPress,
    onProgramPress,
    onSettingPress,
    onStatisticPress,
    onSupportPress,
    onTestingPress,
    onThematicPress,
    onLogout,
    account,
  };
};
