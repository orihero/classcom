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
