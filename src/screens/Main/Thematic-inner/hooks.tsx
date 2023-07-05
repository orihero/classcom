import {useIsFocused, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {RootNavigatorParamList} from '../../../navigation/RootNavigator';
import {THEMATIC} from '../../../navigation/routes';
import {AllSubjects} from '../../../api/types';

export const useThematicInnerHooks = () => {
  const [subjectsData, setSubkectsData] = useState<AllSubjects[]>();
  const isFocused = useIsFocused();
  //@ts-ignore
  const route = useRoute<RootNavigatorParamList<THEMATIC.THEMATIC_INNER>>();
  console.log('params id', JSON.stringify(route.params.item.id, null, 2));
  const SubjectID = route.params.item.id;

  const getAllSubjects = useCallback(async (id: string | number) => {
    try {
      const res = await REQUESTS.general.getThematicSubject(id);

      setSubkectsData(res.data);

      await Promise.all(
        res.data.map(item => getAllSubjectResources(item.id)),
      ).then(data => {
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
  }, []);

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

  useEffect(() => {
    isFocused && getAllSubjects(SubjectID);
  }, [isFocused, getAllSubjects, SubjectID]);

  return {subjectsData};
};
