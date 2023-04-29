import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {AccountResource} from '../../../api/types';
export const SettingHooks = () => {
  const [range, setRange] = useState(0);
  const [account, setAccount] = useState<AccountResource[] | null>([]);

  useEffect(() => {
    const effect = async () => {
      try {
        const res = await REQUESTS.general.getAccount();
        setAccount(res.data);
      } catch (error) {
        // console.log('====================================ACCounT');
        // console.log('ERROR', JSON.stringify(error, null, 4));
        // console.log('====================================LEEEEE');
      }
    };
    effect();
  }, []);
  return {range, setRange, account};
};
