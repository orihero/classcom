import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IElectronicRecCategories} from '../../../api/types';
import {useIsFocused} from '@react-navigation/native';
export const useElectronicResourcesHooks = () => {
  const [eResources, setEResources] = useState<
    IElectronicRecCategories[][] | null
  >([]);

  const isFocuced = useIsFocused();

  const getElectionRecorcesCategories = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getElectronicResourceCategories();
      let someFilterArray = [
        ...new Set(res.data.map(item => item.course_name)),
      ];
      let newArr: any = [];

      someFilterArray.map(item => {
        const arr = res.data.filter(element => element.course_name === item);
        newArr.push(arr);
      });

      console.log(newArr);

      setEResources(newArr);
    } catch (error) {}
  }, []);

  // const getElectionRecorcesCategoryId = useCallback(
  //   async (id: string | number) => {
  //     try {
  //       const res = await REQUESTS.general.getElectronicResourceAll(id);
  //       console.log(res.data);
  //     } catch (error) {}
  //   },
  //   [],
  // );

  useEffect(() => {
    isFocuced && getElectionRecorcesCategories();
  }, [isFocuced, getElectionRecorcesCategories]);

  return {eResources};
};
