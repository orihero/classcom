import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {CustomSnackbar} from '../../../components/custom-snackbar';
// import {RootNavigatorParamList} from '../../../navigation/RootNavigator';

const useSendSmsToPhoneNumber = () => {
  const naavigation = useNavigation();
  //@ts-ignore
  // const route = useRoute<RootNavigatorParamList<SETTING.CHANGE_PHONE>>();
  // const phoneNumber = route.params?.phoneNumber;
  // console.log(route.params?.phoneNumber, 'route.params?.phoneNumber');

  const isFocused = useIsFocused();
  const [confirimCode, setConfirimCode] = useState({
    code: '',
    phone: '',
  });

  const onInputChange = (key: keyof typeof confirimCode) => (value: any) => {
    setConfirimCode({...confirimCode, [key]: value});
  };

  const postRequestCode = useCallback(
    async (data: any) => {
      try {
        await REQUESTS.accountSettings.postAccountConfirmCode(data);
        CustomSnackbar.success('Код отправлен');
        naavigation.navigate(ROUTES.CONFIRIM_CODE_STACK.NEW_PASSWORD as never);
      } catch (error) {
        console.log(error);
        //@ts-ignore
        CustomSnackbar.danger(error?.response?.data?.message || '');
        naavigation.navigate(ROUTES.CONFIRIM_CODE_STACK.NEW_PASSWORD as never);
      }
    },
    [naavigation],
  );

  const repeatRequestCode = useCallback(async () => {
    console.log('repeatRequestCode');
    try {
      await REQUESTS.accountSettings.postAccountRequestCode({
        phone: '+998901012799',
      });
    } catch (error) {
      console.log(error);
      //@ts-ignore
      CustomSnackbar.danger(error?.response?.data?.message || '');
    }
  }, []);

  useEffect(() => {
    isFocused && setTimeout(repeatRequestCode, 50000);
  }, [isFocused, repeatRequestCode]);

  const clickedBtn = useCallback(() => {
    postRequestCode(confirimCode);
  }, [confirimCode, postRequestCode]);

  return {onInputChange, clickedBtn, confirimCode};
};

export default useSendSmsToPhoneNumber;
