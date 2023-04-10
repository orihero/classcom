import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
export const RegistrationHooks = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [drop, setDrop] = useState('Математика');
  const [state, setState] = useState(true);
  const navigation = useNavigation();
  const [values, setValues] = useState({});
  const goBack = () => {
    navigation.goBack();
  };
  const onRegisterPress = () => {};

  const onInputChange =
    (key: string = '') =>
    (value: string) => {
      setValues({...values, [key]: value});
    };

  return {
    goBack,
    onRegisterPress,
    shouldShow,
    setDrop,
    setShouldShow,
    drop,
    state,
    setState,
    onInputChange,
  };
};
