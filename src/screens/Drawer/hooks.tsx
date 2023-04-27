import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

export const DrawerHook = () => {
  const navigation = useNavigation();
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
  };
};
