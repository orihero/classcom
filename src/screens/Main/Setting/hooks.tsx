import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../../store/slices/user.slice';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/routes';
import {
  sliderRangeSelector,
  sliderRangeSlice,
} from '../../../store/slices/sliderRange';
export const SettingHooks = () => {
  const navigation = useNavigation();
  const store = useSelector(sliderRangeSelector);
  const [range, setRange] = useState(store.value);
  const account = useSelector(userSelector);
  const dispatch = useDispatch();

  const onChangePasswordPress = () => {
    navigation.navigate(ROUTES.SETTING.CHANGE_PASSWORD as never);
  };

  const onChangeRange = useCallback(
    (value: number) => {
      const newValue = value - 50;
      dispatch(sliderRangeSlice.actions.sliderRange({value: newValue}));
      setRange(newValue);
    },
    [dispatch],
  );

  return {range, onChangeRange, account, onChangePasswordPress};
};
