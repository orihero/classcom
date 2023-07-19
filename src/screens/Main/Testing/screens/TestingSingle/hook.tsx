import {useIsFocused} from '@react-navigation/native';
import {useState} from 'react';
import {Answer, Question} from '../../../../../api/types';
import {useSelector} from 'react-redux';
import {testSelector} from '../../../../../store/slices/test.slice';

export const useTestingSingleChoiceHook = () => {
  const store = useSelector(testSelector);
  const isFocused = useIsFocused();
  console.log(store);
  const [questions, setQuestios] = useState<Partial<Question>>({
    id: 1,
    question: 'Вопрос 1',
    answers: [],
  });
  const [answersState, setAnswersState] = useState<Partial<Answer[]>>([]);

  return {
    answersState,
    isFocused,
    questions,
  };
};
