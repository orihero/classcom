import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IThematicPlanResource} from '../../../api/types';

export const useThematicPlanHooks = () => {
  const [thematicPlans, setThematicPlans] = useState<IThematicPlanResource[]>(
    [],
  );
  const effect = async () => {
    try {
      const res = await REQUESTS.general.getThematicPlans();
      setThematicPlans(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  });
  return {thematicPlans};
};
