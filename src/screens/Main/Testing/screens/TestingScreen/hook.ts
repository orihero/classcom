import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../../../api/requests';
import {AllTesting} from '../../../../../api/types';

const useTestingHook = () => {
  const IsFocused = useIsFocused();
  const [allTesting, setAllTesting] = useState<AllTesting[]>([]);
  const getAllTesting = useCallback(async () => {
    try {
      const res = await REQUESTS.test.getAllTesting();
      console.log(res.data);
      setAllTesting(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    IsFocused && getAllTesting();
  }, [IsFocused, getAllTesting]);
  return {allTesting};
};

export default useTestingHook;
