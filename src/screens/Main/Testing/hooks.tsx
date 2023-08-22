import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {ICreateTests} from '../../../api/types';
export const TestingHooks = () => {
  const isFocused = useIsFocused();
  const [allMyTests, setAllMyTests] = useState<ICreateTests[]>([]);
  const navigation = useNavigation();
  const onCreateTestPress = () => {
    navigation.navigate(ROUTES.TESTING.CREATE_TEST as never);
  };

  const getAllMyTests = useCallback(async () => {
    try {
      const res = await REQUESTS.test.getAllMyTests();
      setAllMyTests(res.data);
    } catch (error) {}
  }, []);

  const getApiMyTestDelete = useCallback(async (itemId: number) => {
    console.log(itemId);

    try {
      await REQUESTS.test.getMyTestDelete(itemId).then(() => {
        setAllMyTests(oldTests => oldTests.filter(test => test.id !== itemId));
        console.log('clicked item delate');
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    isFocused && getAllMyTests();
  }, [isFocused, getAllMyTests]);

  return {
    onCreateTestPress,
    allMyTests,
    getApiMyTestDelete,
    setAllMyTests,
  };
};
