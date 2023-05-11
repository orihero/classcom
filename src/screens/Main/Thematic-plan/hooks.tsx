import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IThematicPlanResource} from '../../../api/types';
import {ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';

export const useThematicPlanHooks = () => {
  const [thematicPlans, setThematicPlans] = useState<IThematicPlanResource[]>(
    [],
  );

  const navigation = useNavigation();

  const effect = async () => {
    try {
      const res = await REQUESTS.general.getThematicPlans();
      setThematicPlans(res.data);
    } catch (error) {}
  };

  const onThematicInnerPress = (item: IThematicPlanResource) => {
    navigation.navigate(ROUTES.THEMATIC.THEMATIC_INNER as never, {item});
  };

  useEffect(() => {
    effect();
  }, []);
  return {thematicPlans, onThematicInnerPress};
};
