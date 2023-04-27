import {useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IELectronicResourceResponse} from '../../../api/types';
export const useElectronicResourcesHooks = () => {
  const [eResources, setEResources] = useState<
    IELectronicResourceResponse[] | null
  >([]);

  useEffect(() => {
    const effect = async () => {
      try {
        const res = await REQUESTS.general.getElectronicResource();
        setEResources(res.data);
      } catch (error) {
        console.log('====================================');
        console.log('ERROR', JSON.stringify(error, null, 4));
        console.log('====================================');
      }
    };
    effect();
  }, []);

  return {eResources};
};
