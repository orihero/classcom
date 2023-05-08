import {useState} from 'react';
import {useSelector} from 'react-redux';
import {userSelector} from '../../../store/slices/user.slice';
export const SettingHooks = () => {
  const [range, setRange] = useState(0);
  const account = useSelector(userSelector);
  return {range, setRange, account};
};
