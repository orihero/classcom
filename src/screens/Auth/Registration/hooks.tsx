import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/ROUTES';
import {useState} from 'react';
export const RegistrationHooks = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [drop, setDrop] = useState('Математика');
  const [state, setState] = useState(true);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const onPublicPress = () => {
    navigation.navigate(ROUTES.AUTH.PUBLIC_OFFER as never);
  };
  return {
    goBack,
    onPublicPress,
    shouldShow,
    setDrop,
    setShouldShow,
    drop,
    state,
    setState,
  };
};
