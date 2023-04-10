import axios from 'axios';
import {IRegisterRequest} from './types';

export const BASE_URL = 'http://185.217.131.4:8080/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const REQUESTS = {
  auth: {
    register: (creds: IRegisterRequest) => axiosInstance.post('/create', creds),
  },
};
