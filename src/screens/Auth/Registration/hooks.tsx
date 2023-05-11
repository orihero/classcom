import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IRegisterRequest} from '../../../api/types';
import {CustomSnackbar} from '../../../components/custom-snackbar';
import {ROUTES} from '../../../navigation/routes';
import * as yup from 'yup';

const registerValidationScheme = yup.object({
  regionId: yup.string().required('Это поле обязательно к заполнению'),
  distrcitId: yup.string().required('Это поле обязательно к заполнению'),
  firstName: yup.string().required('Это поле обязательно к заполнению'),
  lastName: yup.string().required('Это поле обязательно к заполнению'),
  password: yup.string().required('Это поле обязательно к заполнению'),
  courseId: yup.string().required('Это поле обязательно к заполнению'),
  phone: yup.string().required('Это поле обязательно к заполнению'),
  login: yup.string().required('Это поле обязательно к заполнению'),
});

export const RegistrationHooks = () => {
  const [state, setState] = useState(true);
  const navigation = useNavigation();
  const [values, setValues] = useState<Partial<IRegisterRequest>>({});
  const [validationErrors, setValidationErros] = useState<null | {
    [key: keyof IRegisterRequest]: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const goBack = () => {
    navigation.goBack();
  };

  const onRegisterPress = async () => {
    setLoading(true);
    // try {
    //   await registerValidationScheme.validate(values);
    //   setValidationErros(null);
    // } catch (error) {
    //   console.log('====================================');
    //   console.log(JSON.stringify(error, null, 4));
    //   console.log('====================================');
    //   setValidationErros({...validationErrors, [error.path]: error.message});
    //   setLoading(false);
    //   return;
    // }
    try {
      const res = await REQUESTS.auth.register({...values});
      setTimeout(() => {
        CustomSnackbar.success(res.data.message || '');
      }, 0);
      //@ts-ignore
      navigation.navigate(ROUTES.AUTH.AUTHORIZATION);
    } catch (error) {
      //@ts-ignore
      CustomSnackbar.danger(error?.response?.data?.message || '');
    } finally {
      setLoading(false);
    }
  };

  const onInputChange =
    (key: string = '') =>
    (value: string) => {
      setValues({...values, [key]: value});
    };

  return {
    goBack,
    onRegisterPress,
    state,
    setState,
    onInputChange,
    values,
    loading,
    validationErrors,
  };
};
