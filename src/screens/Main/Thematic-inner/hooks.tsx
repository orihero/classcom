import {useIsFocused, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {RootNavigatorParamList} from '../../../navigation/RootNavigator';
import {THEMATIC} from '../../../navigation/routes';
import {AllSubjects} from '../../../api/types';

export const useThematicInnerHooks = () => {
  const [subjectsData, setSubkectsData] = useState<AllSubjects[]>();
  const [paramsData, setParamsData] = useState();
  const isFocused = useIsFocused();
  //@ts-ignore
  const route = useRoute<RootNavigatorParamList<THEMATIC.THEMATIC_INNER>>();
  const SubjectID = route.params.item.id;
  const paramsTeacherName = route.params.item.activated;

  // const getFileAttechment = useCallback(async (currentItem: AttachmenFile) => {
  //   console.log(currentItem, 'currentItem');
  //   const fileUrl = `https://classcom.uz/api/find-attachment?id=${currentItem.attachmentId}`;
  //   const fileName = currentItem.attachmentName;

  //   if (Platform.OS === 'android') {
  //     getDownloadPermissionAndroid().then(granted => {
  //       if (granted) {
  //         downloadFile({fUrl: fileUrl, fName: fileName});
  //       }
  //     });
  //   } else {
  //     downloadFile({fUrl: fileUrl, fName: fileName}).then(res => {
  //       //@ts-ignore
  //       RNFetchBlob.ios.previewDocument(res.path());
  //     });
  //   }
  // }, []);

  const getAllSubjectResources = useCallback(
    async (subjectId: string | number) => {
      try {
        const res = await REQUESTS.general.getThematicRecorcesSubject(
          subjectId,
        );
        return res;
      } catch (err) {
        return err;
      }
    },

    [],
  );
  const getAllSubjects = useCallback(
    async (id: string | number) => {
      try {
        const res = await REQUESTS.general.getThematicSubject(id);
        setSubkectsData(res.data);
        await Promise.all(
          res.data.map(item => getAllSubjectResources(item.id)),
        ).then(data => {
          //@ts-ignore
          const list = data.map(itemD => itemD.data);
          setSubkectsData(oldData =>
            oldData?.map((item, index) => ({
              ...item,
              subjectResourceDTOs: list[index],
            })),
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
    [getAllSubjectResources],
  );

  useEffect(() => {
    isFocused && getAllSubjects(SubjectID);
    setParamsData(paramsTeacherName);
  }, [isFocused, getAllSubjects, SubjectID, setParamsData, paramsTeacherName]);

  return {subjectsData, paramsData};
};
