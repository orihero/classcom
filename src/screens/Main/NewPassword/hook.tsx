import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {useState} from 'react';

const useNewPasswordHook = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
  });

  const checkConfirimPassword = () => {
    if (password.password === password.confirmPassword) {
      console.log('Passwords match!');
    } else {
      console.log('Passwords do not match!');
    }
  };

  const onSettingScreen = () => {
    navigation.navigate(ROUTES.STACK.SETTING_STACK as never);
  };

  const onInputChange = (key: keyof typeof password) => (value: any) => {
    setPassword({...password, [key]: value});
  };

  return {onSettingScreen, onInputChange, password, checkConfirimPassword};
};

export default useNewPasswordHook;
