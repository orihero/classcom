import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';

const useChangePhoneNumber = () => {
  const naavigation = useNavigation();
  const IsFocused = useIsFocused();
  const [phoneNumber, setPhoneNumber] = useState({
    phone: '',
  });

  const onInputChange = (key: keyof typeof phoneNumber) => (value: any) => {
    setPhoneNumber({...setPhoneNumber, [key]: value});
  };

  const postRequestCode = useCallback(async (data: any) => {
    try {
      await REQUESTS.accountSettings.postAccountRequestCode(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const clickedBtn = useCallback(() => {
    postRequestCode(phoneNumber);
    naavigation.navigate(ROUTES.SETTING.CHANGE_PHONE as never);
  }, [naavigation, phoneNumber, postRequestCode]);

  useEffect(() => {
    IsFocused;
  }, [IsFocused]);

  return {
    clickedBtn,
    onInputChange,
    phoneNumber,
  };
};

export default useChangePhoneNumber;
