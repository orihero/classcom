import axios, {AxiosResponse} from 'axios';
import {
  IAccountResponse,
  ICourseResponse,
  IDistrictResponse,
  IELectronicResourceResponse,
  ILoginRequest,
  ILoginResponse,
  IModeratorsResponse,
  IRegionResponse,
  IRegisterRequest,
  IScheduleResponse,
  IScheduleTemplateResponse,
  IThematicPlanResource,
} from './types';
import {store} from '../store/configureStore';

export const BASE_URL = 'http://185.217.131.4:8080/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(e => {
  //@ts-ignore
  e.headers = {
    ...e.headers,
    Authorization: 'Bearer ' + store.getState().profile.id_token,
  };
  return e;
});

export const REQUESTS = {
  auth: {
    register: (creds: Partial<IRegisterRequest>) =>
      axiosInstance.post('/register', creds),
    login: (creds: Partial<ILoginRequest>) =>
      axiosInstance.post<null, AxiosResponse<ILoginResponse>>(
        '/authenticate',
        creds,
      ),
  },
  general: {
    getElectronicResource: () =>
      axiosInstance.get<IELectronicResourceResponse[]>(
        '/electronic-resources/all',
      ),
    getRegions: () =>
      axiosInstance.get<IRegionResponse[]>('/register-shared/regions'),
    getDistricts: (id: string | number) =>
      axiosInstance.get<IDistrictResponse[]>(
        `/register-shared/districts/${id}`,
      ),
    getCourses: () =>
      axiosInstance.get<ICourseResponse[]>('/register-shared/courses'),
    getThematicPlans: () =>
      axiosInstance.get<IThematicPlanResource[]>('/calendar-thematic-plans'),
    getAccount: () => axiosInstance.get<IAccountResponse>('/account'),
    getModerators: () =>
      axiosInstance.get<IModeratorsResponse>('v2/users/mobile/moderators'),
    getWeeklySchedule: (weekId: number | string, shift: number | string) =>
      axiosInstance.get<IScheduleResponse>(
        `/schedules/weekSchedules?weekID=${weekId}&shift=${shift}`,
      ),
    getWeeklyScheduleTemplate: () =>
      axiosInstance.get<IScheduleTemplateResponse>(
        `/schedules/scheduleTemplates`,
      ),
  },
};
