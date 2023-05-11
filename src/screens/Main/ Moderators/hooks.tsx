import {useEffect, useState} from 'react';
import {IModerator} from '../../../api/types';
import {REQUESTS} from '../../../api/requests';
import {CustomSnackbar} from '../../../components/custom-snackbar';

export const useModeratorsHooks = () => {
  const [moderators, setModerators] = useState<IModerator[]>([]);

  const effect = async () => {
    try {
      const res = await REQUESTS.general.getModerators();
      setModerators(res.data.content || []);
    } catch (error) {
      CustomSnackbar.danger('Could not load moderators');
    }
  };

  useEffect(() => {
    effect();
  }, []);

  return {moderators};
};
