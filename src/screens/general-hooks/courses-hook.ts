import {useEffect, useState} from 'react';
import {REQUESTS} from '../../api/requests';
import {ICourseResponse} from '../../api/types';

export const useCoursesHook = () => {
  const [courses, setCourses] = useState<ICourseResponse[]>([]);
  useEffect(() => {
    const gerCourses = async () => {
      try {
        const res = await REQUESTS.general.getCourses();
        setCourses(res.data);
      } catch (error) {}
    };
    gerCourses();
  }, []);
  return {courses: courses.map(e => ({label: e.name, value: e.id}))};
};
