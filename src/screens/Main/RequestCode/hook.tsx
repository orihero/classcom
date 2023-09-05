import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {useCallback, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {CustomSnackbar} from '../../../components/custom-snackbar';

const useChangePhoneNumber = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState({
    phone: '',
  });

  const onInputChange = (key: keyof typeof phoneNumber) => (value: any) => {
    setPhoneNumber({...phoneNumber, [key]: value});
  };

  const postRequestCode = useCallback(
    async (data: any) => {
      console.log(data);
      try {
        await REQUESTS.accountSettings.postAccountRequestCode(data);
        CustomSnackbar.success('Код отправлен');
        //@ts-ignore
        navigation.navigate(ROUTES.REQUEST_CODE_STACK.CONFIRIM_CODE_STACK, {
          phoneNumber,
        });
      } catch (error) {
        console.log(error);
        //@ts-ignore
        CustomSnackbar.danger(error?.response?.data?.message || '');
      }
    },
    [navigation, phoneNumber],
  );

  const clickedBtn = useCallback(() => {
    postRequestCode(phoneNumber);
  }, [phoneNumber, postRequestCode]);

  return {
    clickedBtn,
    onInputChange,
    phoneNumber,
  };
};

export default useChangePhoneNumber;
