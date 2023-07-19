import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {GetCourses, ICreateNewTest} from '../../../api/types';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {useDispatch} from 'react-redux';
import {setTest} from '../../../store/slices/test.slice';

export const useCreateNewTestHook = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<GetCourses[]>([]);
  const [createTest, setCreateTest] = useState<Partial<ICreateNewTest>>({});
  const [isModalVisible, setModalVisible] = useState(false);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const getAllApiCourses = useCallback(async () => {
    try {
      const res = await REQUESTS.test.getApiCourses();
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const createNewTest = useCallback(async (data: Partial<ICreateTests>) => {
  //   try {
  //     await REQUESTS.test.postCreateNewTest(data);
  //   } catch (error) {}
  // }, []);

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
    return dispatch(setTest(createTest as ICreateNewTest));
  }, [createTest, dispatch]);

  const navigateToSingleChoice = useCallback(() => {
    navigation.navigate(ROUTES.TESTING.TESTING_SINGLE_CHOICE as never);
    setModalVisible(!isModalVisible);
    addNewTest();
  }, [navigation, isModalVisible, addNewTest]);

  const navigateToMultipleChoice = useCallback(() => {
    navigation.navigate(ROUTES.TESTING.TESTING_MULTIPLE_CHOICE as never);
    setModalVisible(!isModalVisible);
    addNewTest();
  }, [navigation, isModalVisible, addNewTest]);

  const navigateToSubsequence = useCallback(() => {
    navigation.navigate(ROUTES.TESTING.TESTING_SUBSEQUENCE as never);
    setModalVisible(!isModalVisible);
    addNewTest();
  }, [navigation, isModalVisible, addNewTest]);

  const navigateToCorrespondence = useCallback(() => {
    navigation.navigate(ROUTES.TESTING.TESTING_CORRESPONDENCE as never);
    setModalVisible(!isModalVisible);
    addNewTest();
  }, [navigation, isModalVisible, addNewTest]);

  const navigateToOmissions = useCallback(() => {
    navigation.navigate(ROUTES.TESTING.TESTING_OMISSIONS as never);
    setModalVisible(!isModalVisible);
    addNewTest();
  }, [navigation, isModalVisible, addNewTest]);

  const navigateToBoolean = useCallback(() => {
    navigation.navigate(ROUTES.TESTING.TESTING_BOOLEAN_QUESTION as never);
    setModalVisible(!isModalVisible);
    addNewTest();
  }, [navigation, isModalVisible, addNewTest]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    isFocused && getAllApiCourses();
  }, [isFocused, getAllApiCourses]);

  return {
    createTest,
    addNewTest,
    toggleModal,
    getSubjectId,
    onInputChange,
    isModalVisible,
    navigateToBoolean,
    navigateToOmissions,
    navigateToSubsequence,
    navigateToSingleChoice,
    navigateToMultipleChoice,
    navigateToCorrespondence,
    courses: courses.map(e => ({label: e.name, value: e.id})),
  };
};
