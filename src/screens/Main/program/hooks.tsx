import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {Linking} from 'react-native';
export const ProgramHooks = () => {
  const navigation = useNavigation();
  const onModeratrosPress = () => {
    navigation.navigate(ROUTES.PROGRAM.MODERATORS as never);
  };

  const onDirectoryPress = () => {
    navigation.navigate(ROUTES.PROGRAM.DIRECTORY as never);
  };

  const onRateUsOnGooglePlay = () => {
    Linking.openURL('http://play.google.com/store/apps/');
  };

  const onTermUseBtnPress = () => {
    navigation.navigate(ROUTES.PROGRAM.TERMS_OF_USE as never);
  };
  const goBack = () => {
    navigation.goBack();
  };
  return {
    onModeratrosPress,
    onDirectoryPress,
    onRateUsOnGooglePlay,
    onTermUseBtnPress,
    goBack,
  };
};
