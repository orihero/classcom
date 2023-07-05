import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {QuestionAndAnswersItems} from '../../../api/types';
export const AnswersQuestionsHooks = () => {
  const [allQuestion, setAllQuestion] = useState<QuestionAndAnswersItems[]>([]);

  useEffect(() => {
    const getQuestionAndAnswearFunc = async () => {
      try {
        const res = await REQUESTS.support.getQuestionandAnswersItems();
        setAllQuestion(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestionAndAnswearFunc();
  }, []);

  return {allQuestion};
};
