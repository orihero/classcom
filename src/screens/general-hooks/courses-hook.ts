import {useEffect, useState} from 'react';
import {REQUESTS} from '../../api/requests';
import {ICourseResponse} from '../../api/types';

export const useCoursesHook = () => {
  const [courses, setCourses] = useState<ICourseResponse[]>([]);
  const [classLetters, setClassLetters] = useState<string[]>([]);
  const [classNumbers, setClassNumbers] = useState<string[]>([]);
  useEffect(() => {
    const gerCourses = async () => {
      try {
        const res = await REQUESTS.general.getCourses();
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
    };
    gerCourses();
  }, []);
  return {
    courses: courses.map(e => ({label: e.name, value: e.id})),
    classNumbers: classNumbers.map(e => ({label: e, value: e})),
    classLetters: classLetters.map(e => ({label: e, value: e})),
  };
};
