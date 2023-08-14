import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {useIsFocused} from '@react-navigation/native';
import {find, flatten, map} from 'lodash';
import FileDownloadHelper from '../../../helper/FileDownload';
import {AttachmenFile} from '../../../api/types';
import {Platform} from 'react-native';

export const useElectronicResourcesHooks = () => {
  const [eResources, setResources] = useState<any>({});
  const {downloadFile, getDownloadPermissionAndroid} = FileDownloadHelper();
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

  const getFileAttechment = useCallback(
    async (currentItem: AttachmenFile) => {
      console.log(currentItem, 'currentItem');
      const url = `https://classcom.uz/api/find-attachment?id=${currentItem.attachmentId}`;
      const fileName = currentItem.attachmentName;

      downloadFile({fName: fileName, fUrl: url});
      if (Platform.OS === 'android') {
        getDownloadPermissionAndroid().then(granted => {
          if (granted) {
            downloadFile({fName: fileName, fUrl: url});
          }
        });
      } else {
        downloadFile({fName: fileName, fUrl: url}).then(res => {
          console.log(res, 'res');
        });
      }

      // try {
      //   const res = await REQUESTS.general.getFindAttechment(findID);
      //   console.log(JSON.stringify(res.data, null, 2) + 'res');
      // } catch (error) {}
    },
    [downloadFile, getDownloadPermissionAndroid],
  );

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
