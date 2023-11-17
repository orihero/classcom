import {useCallback, useEffect, useState} from 'react';
import {REQUESTS} from '../../api/requests';
import {
  IScheduleTemplateResponse,
  LessonTemplatesType,
  ScheduleCourses,
} from '../../api/types';
import {useIsFocused} from '@react-navigation/native';
import {HOUR_FORMAT_OPTIONS} from '../../constants/DATES';

export const useCoursesHook = () => {
  const IsFocused = useIsFocused();

  const currentHour = new Date().toLocaleTimeString('ru', HOUR_FORMAT_OPTIONS);
  const [courses, setCourses] = useState<ScheduleCourses[]>([]);
  const [classLetters, setClassLetters] = useState<string[]>([]);
  const [classNumbers, setClassNumbers] = useState<string[]>([]);
  const [pickingTime, setPickingTime] = useState<null | 'start' | 'end'>(null);

  const [weeklySchedule, setWeeklySchedule] =
    useState<IScheduleTemplateResponse>();

  const [values, setValues] = useState<Partial<LessonTemplatesType>>({
    startTime: currentHour as never,
    endTime: currentHour as never,
  });

  const onHourPress = (type: 'start' | 'end' | null) => () => {
    setPickingTime(type);
  };

  const onHourChange = (e: Date) => {
    setValues({
      ...values,
      [pickingTime + 'Time']: e.toLocaleTimeString('ru', HOUR_FORMAT_OPTIONS),
    });

    setPickingTime(null);
  };

  const onInputChange = (key: keyof typeof values) => (value: any) => {
    setValues({...values, [key]: value});
  };

  const getCoursesSchedule = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getScheduleCourses();
      setCourses(res.data);
    } catch (error) {}
    try {
      const res = await REQUESTS.general.getClassLetters();
      setClassLetters(res.data);
    } catch (error) {}
    try {
      const res = await REQUESTS.general.getClassNumbers();
      setClassNumbers(res.data);
    } catch (error) {}
  }, []);

  const putLessonTemplates = useCallback(async (data: any) => {
    try {
      await REQUESTS.general.putLessonTemplates(data);
      getWeeklyScheduleTemplates();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getWeeklyScheduleTemplates = useCallback(async () => {
    try {
      const res = await REQUESTS.general.getWeeklyScheduleTemplate();
      setWeeklySchedule(res.data as any);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addNewLessonTemplatesBtn = useCallback(() => {
    putLessonTemplates(values);
  }, [putLessonTemplates, values]);

  useEffect(() => {
    IsFocused && getCoursesSchedule();
  }, [getCoursesSchedule, IsFocused]);

  return {
    values,
    pickingTime,
    onHourPress,
    onHourChange,
    onInputChange,
    courses: courses.map(e => ({label: e.name, value: e.id})),
    classNumbers: classNumbers.map(e => ({label: e, value: e})),
    classLetters: classLetters.map(e => ({label: e, value: e})),
    addNewLessonTemplatesBtn,
    setValues,
    weeklySchedule,
  };
};
