import {useIsFocused, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {RootNavigatorParamList} from '../../../navigation/RootNavigator';
import {DRAWER_STACK} from '../../../navigation/routes';

const TestSolutionHook = () => {
  const [loading, setLoading] = useState(false);
  const [currentTest, setCurrentTest] = useState<any>(null);
  //@ts-ignore
  const route = useRoute<RootNavigatorParamList<DRAWER_STACK.TESTING>>();
  const {id} = route.params;
  const IsFocused = useIsFocused();

  const getCurrentTest = useCallback(async (id: any) => {
    setLoading(true);
    try {
      const res = await REQUESTS.test.getCurrentTest(id);
      setCurrentTest(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // @ts-ignore
      CustomSnackbar.error(e.response.data.message);
    }
  }, []);

  useEffect(() => {
    IsFocused && getCurrentTest(id);
  }, [getCurrentTest, IsFocused, id]);

  return {loading, currentTest, id};
};
('');
export default TestSolutionHook;
