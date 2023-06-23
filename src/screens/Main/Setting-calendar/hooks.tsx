import {useState} from 'react';
import {useCoursesHook} from '../../general-hooks/courses-hook';

export const useSettingCalendarHooks = () => {
  const {courses} = useCoursesHook();
  const [values, setValues] = useState<{[key: string]: string}>({});
  const onInputChange =
    (key: string = '') =>
    (value: string) => {
      setValues({...values, [key]: value});
    };
  return {courses, values, onInputChange};
};
