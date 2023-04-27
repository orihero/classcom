import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
export const SettingHooks = () => {
  const navigation = useNavigation();
  const [range, setRange] = useState(0);
  return {range, setRange};
};
