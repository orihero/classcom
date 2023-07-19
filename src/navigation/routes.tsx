export enum AUTH {
  AUTHORIZATION = 'AUTHORIZATION',
  WELCOME = 'WELCOME',
  PUBLIC_OFFER = 'PUBLIC_OFFER',
  REGISTRATION = 'REGISTRATION',
}
export enum MAIN {
  HOME = 'HOME',
  CALENDAR_SETTING = 'CALENDAR_SETTING',
  NOTIFICATIONS = 'NOTIFICATIONS',
  CREATE_TEST = 'CREATE_TEST',
}
export enum DRAWER {
  DRAWER = 'DRAWER',
  SETTING = 'SETTING',
  THEMATIC_PLANE = 'THEMATIC_PLANE',
  TESTING = 'TESTING',
  SUPPORT = 'SUPPORT',
  STATISTIC = 'STATISTIC',
  PROGRAM = 'PROGRAM',
  PAYMENT = 'PAYMENT',
  ELECTRONIC_RESOURCES = 'ELECTRONIC_RESOURCES',
}
export enum THEMATIC {
  THEMATIC_INNER = 'THEMATIC_INNER',
}
export enum TESTING {
  CREATE_TEST = 'CREATE_TEST',
  TESTING_SINGLE_CHOICE = 'TESTING_SINGLE_CHOICE',
  TESTING_MULTIPLE_CHOICE = 'TESTING_MULTIPLE_CHOICE',
  TESTING_SUBSEQUENCE = 'TESTING_TESTING_SUBSEQUENCE',
  TESTING_CORRESPONDENCE = 'TESTING_CORRESPONDENCE',
  TESTING_BOOLEAN_QUESTION = 'TESTING_BOOLEAN_QUESTION',
  TESTING_OMISSIONS = 'TESTING_OMISSIONS',
}
export enum SUPPORT {
  SUPPORT_MESSAGES = 'SUPPORT_MESSAGES',
  ANSWER_QUESTIONS = 'ANSWER_QUESTIONS',
  USERS_MAUAL = 'USERS_MANUAL',
  SUPPORT_SUGGEST = 'SUPPORT_SUGGEST',
  CHAT_SUPPORT = 'CHAT_SUPPORT',
}
export enum PROGRAM {
  MODERATORS = 'MODERATORS',
  DIRECTORY = 'DIRECTORY',
  TERMS_OF_USE = 'TERMSOFUSE',
}
export enum HOME {
  SETTING_CALENDAR = 'SETTING_CALENDAR',
}
export enum STACK {
  ELECTRONIC_STACK = 'ELECTRONIC_STACK',
  THEMATIC_STACK = 'THEMATIC_STACK',
  TESTING_STACK = 'TESTING_STACK',
  SUPPORT_STACK = 'SUPPORT_STACK',
  STATISTICS_STACK = 'STATISTICS_STACK',
  SETTING_STACK = 'SETTING_STACK',
  PROGRAM_STACK = 'PROGRAM_STACK',
  PAYMENT_STACK = 'PAYMENT_STACK',
  HOME_STACK = 'HOME_STACK',
}
export const ROUTES = {
  AUTH,
  MAIN,
  DRAWER,
  STACK,
  THEMATIC,
  TESTING,
  SUPPORT,
  PROGRAM,
  HOME,
} as const;
