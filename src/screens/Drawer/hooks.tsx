import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

export const DrawerHook = () => {
  const navigation = useNavigation();
  const onHomePress = () => {
    navigation.navigate(ROUTES.MAIN.HOME as never);
  };
  const onSettingPress = () => {
    navigation.navigate(ROUTES.DRAWER.SETTING as never);
  };
  const onElectronicPress = () => {
    navigation.navigate(ROUTES.DRAWER.ELECTRONIC_RESOURCES as never);
  };
  const onPaymentPress = () => {
    navigation.navigate(ROUTES.DRAWER.PAYMENT as never);
  };
  const onProgramPress = () => {
    navigation.navigate(ROUTES.DRAWER.PROGRAM as never);
  };
  const onStatisticPress = () => {
    navigation.navigate(ROUTES.DRAWER.STATISTIC as never);
  };
  const onSupportPress = () => {
    navigation.navigate(ROUTES.DRAWER.SUPPORT as never);
  };
  const onThematicPress = () => {
    navigation.navigate(ROUTES.DRAWER.THEMATIC_PLANE as never);
  };
  const onTestingPress = () => {
    navigation.navigate(ROUTES.DRAWER.TESTING as never);
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
