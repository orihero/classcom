import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {useIsFocused} from '@react-navigation/native';
import {QuestionAndAnswersItems} from '../../../api/types';

export const useDirectoryHook = () => {
  const isFocused = useIsFocused();
  const [allItems, setAllItems] = useState<QuestionAndAnswersItems[]>([]);

  const getAlldirectory = useCallback(async () => {
    try {
      const res = await REQUESTS.support.getQuestionandAnswersItems();
      setAllItems(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    isFocused && getAlldirectory();
  }, [isFocused, getAlldirectory]);

  return {allItems};
};
