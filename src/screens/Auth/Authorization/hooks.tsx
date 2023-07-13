import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {IAccountResponse, ILoginRequest} from '../../../api/types';
import {ROUTES} from '../../../navigation/routes';
import {REQUESTS} from '../../../api/requests';
import {CustomSnackbar} from '../../../components/custom-snackbar';
import {useDispatch} from 'react-redux';
import {loggedIn} from '../../../store/slices/profile.slice';
export const AuthorizationHooks = () => {
  const [values, setValues] = useState<Partial<ILoginRequest>>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const onRegisterPress = () => {
    navigation.navigate(ROUTES.AUTH.REGISTRATION as never);
  };

  const onInputChange =
    (key: string = '') =>
    (value: string) => {
      setValues({...values, [key]: value});
    };

  const onLogin = async () => {
    setLoading(true);
    try {
      const res = await REQUESTS.auth.login(values);
      dispatch(
        loggedIn({
          id_token: res.data.id_token,
          iAccount: res.data,
        }),
      );
    } catch (error) {
      //@ts-ignore
      CustomSnackbar.danger(error?.response?.data?.message || '');
    } finally {
      setLoading(false);
    }
  };

  return {onRegisterPress, onInputChange, onLogin, loading};
};
