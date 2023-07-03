import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {NotifactionType} from '../../../api/types';

export const NotifactionHook = () => {
  const [allNotifaction, setAllNotifaction] = useState<NotifactionType[]>();
  useEffect(() => {
    const getAllMyNotifaction = async () => {
      try {
        const res = await REQUESTS.notifaction.getMyNotifactionItems();
        setAllNotifaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMyNotifaction();
  }, []);

  return {allNotifaction};
};
