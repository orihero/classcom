import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {useIsFocused} from '@react-navigation/native';
import {find, flatten, map} from 'lodash';
export const useElectronicResourcesHooks = () => {
  const [eResources, setResources] = useState<any>({});
  // const [findAttechmentId, setFindAttechmentID] = useState<string | number>();

  const isFocuced = useIsFocused();
  const getElectionRecorcesCategoryId = useCallback(
    async (id: string | number) => {
      try {
        const res = await REQUESTS.general.getElectronicResourceAll(id);
        return res;
      } catch (error) {}
    },
    [],
  );

  const getFileAttechment = useCallback(async (findID: string | number) => {
    try {
      const res = await REQUESTS.general.getFindAttechment(findID);

      console.log(JSON.stringify(res.data, null, 2));
    } catch (error) {}
  }, []);

  // resourceCategoryId
  const getElectionRecorcesCategories = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getElectronicResourceCategories();

      const resData = res.data.reduce((total: any, currentItem) => {
        if (total.hasOwnProperty(currentItem.course_name)) {
          total[currentItem.course_name] = [
            ...total[currentItem.course_name],
            currentItem,
          ];
        } else {
          total[currentItem.course_name] = [currentItem];
        }
        return total;
      }, {});

      setResources(resData);

      const newRes = await Promise.all(
        res.data.map(item => getElectionRecorcesCategoryId(item.id)),
      );

      const list = flatten(newRes.map(itemB => itemB?.data));
      const newData: any = {};

      for (const key in resData) {
        newData[key] = map(resData[key], resItem => ({
          ...resItem,
          book: find(list, {resourceCategoryId: resItem.id}),
        }));
      }

      setResources(newData);
    } catch (error) {}
  }, [getElectionRecorcesCategoryId]);

  useEffect(() => {
    isFocuced && getElectionRecorcesCategories();
  }, [isFocuced, getElectionRecorcesCategories]);

  return {eResources, getFileAttechment};
};
