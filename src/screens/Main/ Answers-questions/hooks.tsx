import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {QuestionAndAnswersItems} from '../../../api/types';
import {CustomSnackbar} from '../../../components/custom-snackbar';
export const AnswersQuestionsHooks = () => {
  const [allQuestion, setAllQuestion] = useState<QuestionAndAnswersItems[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getQuestionAndAnswearFunc = async () => {
      setLoading(true);
      try {
        const res = await REQUESTS.support.getQuestionandAnswersItems();
        setAllQuestion(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        setLoading(false);
        //@ts-ignore
        CustomSnackbar(error.message, 'error');
      } finally {
        setLoading(false);
      }
    };
    getQuestionAndAnswearFunc();
  }, []);

  return {allQuestion, loading};
};
