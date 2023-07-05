import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IThematicPlanResource} from '../../../api/types';
import {ROUTES, THEMATIC} from '../../../navigation/routes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {RootNavigatorParamList} from '../../../navigation/RootNavigator';

export const useThematicPlanHooks = () => {
  const isFocused = useIsFocused();

  const [thematicPlans, setThematicPlans] = useState<IThematicPlanResource[]>(
    [],
  );

  const navigation =
    //@ts-ignore
    useNavigation<RootNavigatorParamList<THEMATIC.THEMATIC_INNER>>();

  const effect = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getThematicPlans();
      setThematicPlans(res.data);
    } catch (error) {}
  }, []);

  const onThematicInnerPress = (item: IThematicPlanResource) => {
    navigation.navigate(ROUTES.THEMATIC.THEMATIC_INNER as never, {item});
  };

  useEffect(() => {
    isFocused && effect();
  }, [effect, isFocused]);
  return {thematicPlans, onThematicInnerPress};
};
