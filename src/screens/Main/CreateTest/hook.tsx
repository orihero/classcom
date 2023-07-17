import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {GetCourses, ICreateTests} from '../../../api/types';
import {useIsFocused} from '@react-navigation/native';

export const useCreateNewTestHook = () => {
  const [courses, setCourses] = useState<GetCourses[]>([]);
  const [createTest, setCreateTest] = useState<Partial<ICreateTests>>({});
  const isFocused = useIsFocused();

  const getAllApiCourses = useCallback(async () => {
    try {
      const res = await REQUESTS.test.getApiCourses();
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createNewTest = useCallback(async (data: Partial<ICreateTests>) => {
    try {
      await REQUESTS.test.postCreateNewTest(data);
    } catch (error) {}
  }, []);

  const getSubjectId = useCallback(
    async (subjectId: number) => {
      setCreateTest({...createTest, id: subjectId});
    },
    [createTest],
  );

  const onInputChange = (key: keyof typeof createTest) => (value: any) => {
    setCreateTest({...createTest, [key]: value});
  };

  const addNewTest = useCallback(() => {
    return createNewTest(createTest);
  }, [createTest, createNewTest]);

  useEffect(() => {
    isFocused && getAllApiCourses();
  }, [isFocused, getAllApiCourses]);

  return {
    courses,
    createTest,
    getSubjectId,
    onInputChange,
    addNewTest,
  };
};
