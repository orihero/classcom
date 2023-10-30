import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {useIsFocused} from '@react-navigation/native';
import {QuestionAndAnswersItems} from '../../../api/types';

export const useDirectoryHook = () => {
  const isFocused = useIsFocused();
  const [allItems, setAllItems] = useState<QuestionAndAnswersItems[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const getAlldirectory = useCallback(async () => {
    setLoading(true);
    try {
      const res = await REQUESTS.support.getQuestionandAnswersItems();
      setAllItems(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      //@ts-ignore
      CustomSnackbar(error.message, 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    isFocused && getAlldirectory();
  }, [isFocused, getAlldirectory]);

  return {allItems, loading};
};
