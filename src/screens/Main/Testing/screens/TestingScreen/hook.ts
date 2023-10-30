import {CustomSnackbar} from './../../../../../components/custom-snackbar';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../../../api/requests';
import {AllTesting} from '../../../../../api/types';
import {ROUTES} from '../../../../../navigation/routes';

const useTestingHook = () => {
  const IsFocused = useIsFocused();
  const [allTesting, setAllTesting] = useState<AllTesting[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const navigateToSolution = useCallback(
    (id: number) => {
      //@ts-ignore
      navigation.navigate(ROUTES.TESTING.TESTING_RESHENIYA, {id});
    },
    [navigation],
  );

  const getAllTesting = useCallback(async () => {
    setLoading(true);
    try {
      const res = await REQUESTS.test.getAllTesting();
      setAllTesting(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      //@ts-ignore
      CustomSnackbar.error(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    IsFocused && getAllTesting();
  }, [IsFocused, getAllTesting]);
  return {allTesting, loading, navigateToSolution};
};

export default useTestingHook;
