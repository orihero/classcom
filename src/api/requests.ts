import axios, {AxiosResponse} from 'axios';

import {
  AllSubjects,
  AllTesting,
  GetCourses,
  GetTestSolution,
  IAccountResponse,
  ICourseResponse,
  ICreateNewTest,
  ICreateTests,
  IDistrictResponse,
  IELectronicResourceResponse,
  IElectronicRecCategories,
  ILoginRequest,
  ILoginResponse,
  IModeratorsResponse,
  IRegionResponse,
  IRegisterRequest,
  IScheduleResponse,
  IScheduleTemplateResponse,
  IThematicPlanResource,
  LessonTemplatesType,
  ModeratorHistoryiesType,
  NotifactionType,
  PostChatItem,
  PostPayment,
  PostPaymentResponse,
  QuestionAndAnswersItems,
  ReferenceChatItems,
  ScheduleCourses,
  SubscriptionsItemProps,
  TechService,
  TechServiceThemeItems,
  TransactionHistory,
} from './types';

import {store} from '../store/configureStore';

export const BASE_URL = 'https://classcom.uz/api';

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
    getAllElectronicResource: () =>
      axiosInstance.get<IELectronicResourceResponse[]>(
        '/electronic-resources/all',
      ),

    getElectronicResourceCategories: () =>
      axiosInstance.get<IElectronicRecCategories[]>(
        '/electronic-resources/categories',
      ),

    getElectronicResourceAll: (id: string | number) =>
      axiosInstance.get<IELectronicResourceResponse>(
        `electronic-resources/all/${id}`,
      ),

    getFindAttechment: (fileId: string | number) =>
      axiosInstance.get<any>(`/find-attachment?id=${fileId}`),

    getRegions: () =>
      axiosInstance.get<IRegionResponse[]>('/register-shared/regions'),
    getDistricts: (id: string | number) =>
      axiosInstance.get<IDistrictResponse[]>(
        `/register-shared/districts/${id}`,
      ),
    getCourses: () =>
      axiosInstance.get<ICourseResponse[]>('/register-shared/courses'),

    putLessonTemplates: (data: LessonTemplatesType) =>
      axiosInstance.put<Partial<LessonTemplatesType>>('lesson-templates', data),

    //Thematic screens api
    getThematicPlans: () =>
      axiosInstance.get<IThematicPlanResource[]>('/calendar-thematic-plans'),

    getThematicSubject: (plantId: string | number) =>
      axiosInstance.get<AllSubjects[]>(`/subjects?planId=${plantId}`),

    getThematicRecorcesSubject: (subjectId: string | number) =>
      axiosInstance.get<any>(`/subject-resources?subjectId=${subjectId}`),

    getCalendarThematicPlansId: (id: string | number) =>
      axiosInstance.get<any>(`/calendar-thematic-plans/${id}`),

    //====================
    getAccount: () => axiosInstance.get<IAccountResponse>('/account'),

    getModerators: () =>
      axiosInstance.get<IModeratorsResponse>('v2/users/mobile/moderators'),
    getWeeklySchedule: (weekId: number | string, shift: number | string) =>
      axiosInstance.get<IScheduleResponse>(
        `/schedules/weekSchedules?weekID=${weekId}&shift=${shift}`,
      ),
    getWeeklyScheduleTemplate: () =>
      axiosInstance.get<IScheduleTemplateResponse>(
        '/schedules/scheduleTemplates',
      ),
    getScheduleCourses: () =>
      axiosInstance.get<ScheduleCourses[]>('/courses/scheduleCourses'),
    getClassNumbers: () => axiosInstance.get<string[]>('/enums/klass-numbers'),
    getClassLetters: () => axiosInstance.get<string[]>('/enums/klass-letters'),
  },

  support: {
    //Сообщения для службы поддержки
    getTechServiceThemeItems: () =>
      axiosInstance.get<TechServiceThemeItems[]>(
        '/v2/reference/tech-service-theme/items',
      ),

    postTechService: (data: TechService) =>
      axiosInstance.post<TechService>('/v2/reference/tech-service', data),

    //Чат со службой поддержки
    getTechServiceChatItems: () =>
      axiosInstance.get<ReferenceChatItems[]>(
        '/v2/reference/tech-service-chat/items',
      ),

    postTechServiceChat: (params: PostChatItem) =>
      axiosInstance.post<ReferenceChatItems[]>(
        '/v2/reference/tech-service-chat',
        params,
      ),

    //Ответы на вопросы
    getQuestionandAnswersItems: () =>
      axiosInstance.get<QuestionAndAnswersItems[]>(
        '/v2/reference/questions-and-answers/items',
      ),
  },

  test: {
    getApiCourses: () => axiosInstance.get<GetCourses[]>('/courses'),
    getAllMyTests: () => axiosInstance.get<ICreateTests[]>('/v2/testing/mine'),
    getAllTesting: () => axiosInstance.get<AllTesting[]>('/v2/testing'),
    getMyTestDelete: (id: number) =>
      axiosInstance.delete<any>(`/testing/${id}`),

    postCreateNewTest: (data: Partial<ICreateNewTest>) =>
      axiosInstance.post<Partial<ICreateNewTest>>('/testing', data),
    getCurrentTest: (id: number) =>
      axiosInstance.get<GetTestSolution>(`/v2/testing/${id}`),
  },

  notifaction: {
    getMyNotifactionItems: () =>
      axiosInstance.get<NotifactionType[]>('/v2/my-notification/items'),
  },

  // statistic screens
  statistic: {
    getTransactionHistory: () =>
      axiosInstance.get<TransactionHistory>('/v2/transaction/history'),

    getDownloadHistory: () => axiosInstance.get<any>('/donwloads'),

    getModeratorHistories: () =>
      axiosInstance.get<ModeratorHistoryiesType[]>('/moderator-histories'),
  },

  //payment screens

  payment: {
    getSubscriptionsItems: () =>
      axiosInstance.get<SubscriptionsItemProps[]>('/v1/subscriptions/items'),

    postPayment: (data: PostPayment) =>
      axiosInstance.post<PostPaymentResponse>('/v2/pay', data),
  },
  accountSettings: {
    postAccountRequestCode: (data: any) =>
      axiosInstance.post('/account/request_code', data),
    postAccountConfirmCode: (data: any) =>
      axiosInstance.post('/account/confirm_code', data),
    postAccountChangePassword: (data: any) =>
      axiosInstance.post('/account/change_password', data),
  },
};
