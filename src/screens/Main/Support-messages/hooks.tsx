import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {TechServiceThemeItems} from '../../../api/types';
import {useIsFocused} from '@react-navigation/native';

export const SupportMessagesHooks = () => {
  const [techServiceItems, setTechServiceItems] =
    useState<TechServiceThemeItems[]>();

  const isFocused = useIsFocused();

  const getTechServiceItems = useCallback(async () => {
    try {
      const res = await REQUESTS.support.getTechServiceThemeItems();
      setTechServiceItems(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    isFocused && getTechServiceItems();
  }, [isFocused, getTechServiceItems]);

  return {techServiceItems};
};
