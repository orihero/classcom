import {useNavigation, useRoute} from '@react-navigation/native';

export const useThematicInnerHooks = () => {
  const navigation = useNavigation();
  const route = useRoute();
  route.params?.id;
  return {};
};
