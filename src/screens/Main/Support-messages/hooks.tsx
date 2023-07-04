import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {TechServiceThemeItems} from '../../../api/types';

export const SupportMessagesHooks = () => {
  const [techServiceItems, setTechServiceItems] =
    useState<TechServiceThemeItems[]>();

  useEffect(() => {
    const getTechServiceItems = async () => {
      try {
        const res = await REQUESTS.support.getTechServiceThemeItems();
        setTechServiceItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTechServiceItems();
  }, []);

  return {techServiceItems};
};
