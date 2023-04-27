import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
export const ThematicPlanHooks = () => {
  const navigation = useNavigation();

  const onThematicInnerPress = () => {
    navigation.navigate(ROUTES.THEMATIC.THEMATIC_INNER as never);
  };
  return {
    onThematicInnerPress,
  };
};
