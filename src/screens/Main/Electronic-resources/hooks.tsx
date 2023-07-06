import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IElectronicRecCategories} from '../../../api/types';
import {useIsFocused} from '@react-navigation/native';
export const useElectronicResourcesHooks = () => {
  const [eResources, setEResources] = useState<
    IElectronicRecCategories[] | null
  >([]);
  // const [state, setState] = useState<string | number>('');
  // const [data, setData] = useState<any>();

  const isFocuced = useIsFocused();

  const getElectionRecorcesCategories = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getElectronicResourceCategories();
      setEResources(res.data);
    } catch (error) {}
  }, []);

  // const getElectionRecorcesCategoryId = useCallback(
  //   async (id: string | number) => {
  //     try {
  //       const res = await REQUESTS.general.getElectronicResourceAll(id);
  //       setData(res.data);
  //     } catch (error) {}
  //   },
  //   [],
  // );

  useEffect(() => {
    isFocuced && getElectionRecorcesCategories();
  }, [isFocuced, getElectionRecorcesCategories]);

  return {eResources};
};
