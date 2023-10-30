import {useCallback, useEffect, useState} from 'react';
import {IModerator} from '../../../api/types';
import {REQUESTS} from '../../../api/requests';
import {CustomSnackbar} from '../../../components/custom-snackbar';

export const useModeratorsHooks = () => {
  const [moderators, setModerators] = useState<IModerator[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const effect = useCallback(async () => {
    setLoading(true);
    try {
      const res = await REQUESTS.general.getModerators();
      setModerators(res.data.content || []);
      setLoading(false);
    } catch (error) {
      CustomSnackbar.danger('Could not load moderators');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    effect();
  }, [effect]);

  return {moderators, loading};
};
