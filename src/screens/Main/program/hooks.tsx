import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const ProgramHooks = () => {
  const navigation = useNavigation();
  const onModeratrosPress = () => {
    navigation.navigate(ROUTES.PROGRAM.MODERATORS as never);
  };
  return {onModeratrosPress};
};
