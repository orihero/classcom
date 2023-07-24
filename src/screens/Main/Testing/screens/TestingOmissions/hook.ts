import {useCallback, useState} from 'react';
import {ICreateNewTest} from '../../../../../api/types';
import {useSelector} from 'react-redux';
import {testSelector} from '../../../../../store/slices/test.slice';
import {REQUESTS} from '../../../../../api/requests';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../navigation/routes';

const initialQustion = {
  answers: [
    {
      answer: '',
      answerLetter: '',
      correct: true,
      id: 0,
      questionId: 0,
    },
  ],
  id: 0,
  question: '',
  testingId: 0,
  testingType: 'OMISSIONS',
};

export const useTestingOmissionsHook = () => {
  const store = useSelector(testSelector);
  const navigation = useNavigation();

  const [newTest, updateNewTest] = useState<Omit<ICreateNewTest, 'id'>>({
    questions: [initialQustion],
    status: 'DRAFT',
    subjectId: store.subjectId,
    testName: store.testName,
  });

  const onQustionChange = useCallback((id: number, value: string) => {
    updateNewTest(oldTest => ({
      ...oldTest,
      questions: oldTest.questions?.map(question =>
        question.id === id ? {...question, question: value} : question,
      ),
    }));
  }, []);

  const onAnswerChange = useCallback(
    (qustionId: number, answerId: number, value: string) => {
      updateNewTest(oldTest => ({
        ...oldTest,
        questions: oldTest.questions?.map(question =>
          question.id === qustionId
            ? {
                ...question,
                answers: question.answers?.map(answer =>
                  answer.id === answerId ? {...answer, answer: value} : answer,
                ),
              }
            : question,
        ),
      }));
    },
    [],
  );

  const onAnsverCorrectChange = useCallback(
    (qustionId: number, answerId: number, value: boolean) => {
      updateNewTest(oldTest => ({
        ...oldTest,
        questions: oldTest.questions?.map(question =>
          question.id === qustionId
            ? {
                ...question,
                answers: question.answers?.map(answer =>
                  answer.id === answerId
                    ? {...answer, correct: value}
                    : {...answer, correct: false},
                ),
              }
            : question,
        ),
      }));
    },
    [],
  );

  const addNewQuestion = useCallback(() => {
    updateNewTest(oldTest => ({
      ...oldTest,
      questions: [
        ...(oldTest.questions ||= []),
        {
          ...initialQustion,
          id: oldTest.questions?.length,
          answers: initialQustion.answers?.map(answer => ({
            ...answer,
            questionId: oldTest.questions?.length,
          })),
        },
      ],
      subjectId: store.subjectId,
      testName: store.testName,
      status: 'DRAFT',
    }));
  }, [store.subjectId, store.testName]);

  const createNewTest = useCallback(async (data: Partial<ICreateNewTest>) => {
    try {
      await REQUESTS.test.postCreateNewTest(data);
    } catch (error) {}
  }, []);

  const onCreateNewTestBtn = useCallback(() => {
    createNewTest(newTest);
    navigation.navigate(ROUTES.DRAWER.TESTING as never);
  }, [newTest, createNewTest, navigation]);

  return {
    newTest,
    addNewQuestion,
    onQustionChange,
    onAnswerChange,
    onAnsverCorrectChange,
    onCreateNewTestBtn,
  };
};
