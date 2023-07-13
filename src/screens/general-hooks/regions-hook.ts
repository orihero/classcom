import {useEffect, useState} from 'react';
import {REQUESTS} from '../../api/requests';
import {IDistrictResponse, IRegionResponse} from '../../api/types';

export const useRegionsHook = (districtId?: string | number) => {
  const [regions, setRegions] = useState<IRegionResponse[]>([]);
  const [districts, setDistricts] = useState<IDistrictResponse[]>([]);
  useEffect(() => {
    const getRegions = async () => {
      try {
        const res = await REQUESTS.general.getRegions();
        setRegions(res.data);
      } catch (error) {}
    };
    getRegions();
  }, []);

  useEffect(() => {
    const getDistricts = async () => {
      if (!districtId) {
        return;
      }
      const res = await REQUESTS.general.getDistricts(districtId);
      setDistricts(res.data);
    };
    getDistricts();
  }, [districtId]);

  return {
    regions: regions.map(e => ({label: e.name, value: e.id})),
    districts: districts.map(e => ({label: e.name, value: e.id})),
  };
};
