type Modify<T, R> = Omit<T, keyof R> & R;

export interface IRegisterRequest {
  achievements: string;
  activated: boolean;
  address: string;
  authorities: string[];
  awards: string;
  bio: string;
  courseCode: string;
  courseId: number;
  courseName: string;
  createdBy: string;
  createdDate: string;
  districtId: number;
  districtName: string;
  dob: string;
  dobPlace: string;
  educationDegreeId: number;
  email: string;
  firstName: string;
  id: number;
  imageUrl: string;
  jobPlace: string;
  langKey: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  lastName: string;
  login: string;
  moderator: boolean;
  moderatorBalance: number;
  moderatorCategoryId: number;
  password: string;
  patronymic: string;
  phone: string;
  regionId: number;
  regionName: string;
  schoolId: number;
  schoolName: string;
  tg: string;
}

export interface IRegionResponse {
  id: number;
  name: string;
  countryId: any;
  countryName: any;
}

export interface IDistrictResponse {
  id: number;
  name: string;
  regionId: number;
  regionName: string;
}

export interface ICourseResponse {
  id: number;
  code: any;
  status: string;
  name: string;
  parentId: any;
  parentCode: any;
  parentName: any;
}

export interface ILoginRequest {
  password: string;
  rememberMe: boolean;
  username: string;
}

export interface ILoginResponse {
  id_token: string;
}

export interface IELectronicResourceResponse {
  id: number;
  name: any;
  description: any;
  params: any;
  resourceCategoryId: number;
  resourceCategoryName: string;
  attachmentId: number;
  attachmentName: string;
  attachmentType: string;
  attachmentSize: string;
  source: string;
}

export interface IThematicPlanResource {
  id: number;
  quarter: string;
  klass: string;
  courseId: number;
  courseCode: any;
  courseName: string;
  year: number;
  subjects: any[];
  activated: string;
}
export interface IAccountResponse {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  patronymic: any;
  dob: any;
  dobPlace: any;
  address: any;
  jobPlace: any;
  achievements: any;
  awards: any;
  moderatorCategoryId: any;
  educationDegreeId: any;
  textSize: any;
  themeColor: any;
  sendPush: boolean;
  email: any;
  phone: any;
  imageUrl: any;
  activated: boolean;
  langKey: string;
  bio: any;
  createdBy: any;
  createdDate: string;
  lastModifiedBy: any;
  lastModifiedDate: any;
  authorities: string[];
  courseId: number;
  courseCode: string;
  courseName: string;
  schoolId: any;
  schoolName: any;
  regionId: any;
  regionName: any;
  districtId: any;
  districtName: any;
  tg: any;
  moderator: boolean;
  moderatorBalance: number;
}

interface IPaginatedContent<Content> {
  content: Content[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: any;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
}

export interface IModerator {
  id: number;
  firstName: string;
  lastName: string;
  activated: boolean;
  imageUrl: string;
  categoryName: any;
}

export interface IScheduleResponse {
  [key: string]: ISchedule | undefined;
}

export interface ISchedule {
  id: number;
  scheduleDate: string;
  ownerId: number;
  ownerLogin: string;
  lessonsMap: ILessonsMap;
  shift: number;
  today: boolean;
}

export interface ILesson {
  id: number;
  klassNumber: string;
  klassLetter: string;
  startTime: string;
  endTime: string;
  sorder: number;
  subjectDTO: any;
  subjectId: any;
  subjectName: any;
  courseId: number;
  courseName: string;
}
export interface ILessonsMap {
  [key: string]: ILesson;
}

export type IScheduleTemplate = Omit<ISchedule, 'lessonsMap'> & {
  lessonTemplatesMap: ILessonsMap;
};

export type IScheduleTemplateResponse = Modify<
  ISchedule,
  {[key: string]: IScheduleTemplate}
>;

export type IModeratorsResponse = IPaginatedContent<IModerator>;

export interface ILessonTemplateRequest {
  weekday: string;
  klassNumber: string;
  klassLetter: string;
  startTime: string;
  endTime: string;
  sorder: string;
  courseId: number;
}
export interface Content {
  content: string;
  createdBy: string;
  createdDate?: Date;
  id?: number;
  viewed?: boolean;
}

export interface ReferenceChatItems {
  contents: Content[];
  id: number;
  username: string;
}

export interface TechServiceThemeItems {
  id: number;
  name: string;
}

export interface TechService {
  content: string;
  themeId: number;
  type: 'SUPPORT' | 'SUGGESTION';
}

export interface QuestionAndAnswersItems {
  answer: string;
  disabled: boolean;
  id: number;
  question: string;
}

export interface PostChatItem {
  content: string;
}

export interface NotifactionType {
  createdDate: Date;
  entityType: string;
  entityTypeId: number;
  id: number;
  message: string;
  type: string;
  userId: number;
  viewed: boolean;
}

export interface AllSubjects {
  duration: number;
  id: number;
  name: string;
  number: number;
  planId: number;
  sortOrder: number;
  subjectResourceDTOs: SubjectResourceDTO[];
}

export interface SubjectResourceDTO {
  attachment: Attachment;
  content: string;
  description: string;
  id: number;
  name: string;
  resourceCategoryId: number;
  resourceCategoryName: string;
  source: string;
  subjectId: number;
  subjectName: string;
}

export interface Attachment {
  file: string;
  filePath: string;
  fullSize: string;
  id: number;
  name: string;
  size: number;
  type: string;
}

export interface IElectronicRecCategories {
  book?: AttachmenFile;
  course_id: number;
  course_name: string;
  id: number;
  module: number;
  name: string;
  sortOrder: number;
  sourceEXT: Source;
  sourceITS: Source;
}

export interface AttachmenFile {
  attachmentId: number;
  attachmentName: string;
  attachmentSize: string;
  attachmentType: string;
  description: string;
  id: number;
  name: string;
  params: string;
  resourceCategoryId: number;
  resourceCategoryName: string;
  source: string;
}

export interface Source {
  addCharge: number;
  deleteCharge: number;
  editCharge: number;
  source: string;
}

export interface ScheduleCourses {
  code: string;
  id: number;
  name: string;
  parentCode: string;
  parentId: number;
  parentName: string;
  status: string;
}

export interface Time {
  split(arg0: string): unknown;
  hour: number;
  minute: number;
  nano: number;
  second: number;
}

export interface LessonTemplatesType {
  courseId: number;
  courseName: string;
  endTime: Time;
  id: number;
  klassLetter: string;
  klassNumber: string;
  scheduleTemplateId: number;
  shift: number;
  sorder: number;
  startTime: Time;
  weekday: number;
}

export interface GetCourses {
  code: string;
  id: number;
  name: string;
  parentCode: string;
  parentId: number;
  parentName: string;
  status: string;
}

export interface ICreateTests {
  createdBy: string;
  createdDate: Date;
  id: number;
  status: string;
  subjectName: string;
  testName: string;
}

export interface ICreateNewTest {
  id: number;
  questions: Question[];
  status: string;
  subjectId: number;
  testName: string;
}

export interface Question {
  answers: Answer[];
  id: number;
  question: string;
  testingId: number;
  testingType: string;
}

export interface Answer {
  answer: string;
  answerLetter: string;
  correct: boolean;
  id: number;
  questionId: number;
}

//statistic interface

export interface TransactionHistory {
  content: Content[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: any;
  totalElements: number;
  totalPages: number;
}

export interface Content {
  id?: number;
  amount: number;
  endDate: Date;
  ownerName: string;
  startDate: Date;
  status: string;
}

export interface ModeratorHistoryiesType {
  actionDate: string;
  actionType: string;
  bonus: number;
  entityID: number;
  entityType: string;
  id: number;
  ownerName: string;
}
