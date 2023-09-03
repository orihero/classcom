import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {REQUESTS} from '../../api/requests';
import {ROUTES} from '../../navigation/routes';
import {loggedOut} from '../../store/slices/profile.slice';
import {userLoaded, userSelector} from '../../store/slices/user.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from '../../utils/themeContext';
import {ThemeType} from '../../types';

export const DrawerHook = () => {
  const navigation = useNavigation();
  const account = useSelector(userSelector);
  const {updateTheme} = useContext(ThemeContext);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(loggedOut());
    AsyncStorage.clear();
    updateTheme(ThemeType.LIGHT);
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

        dispatch(userLoaded(res.data));
      } catch (error) {}
    };
    effect();
  }, [dispatch]);
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
