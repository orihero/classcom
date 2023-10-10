import React, {useCallback, useContext, useEffect, useState} from 'react';
import {REQUESTS} from '../../../api/requests';
import {IScheduleResponse, IScheduleTemplateResponse} from '../../../api/types';
import {CalendarIcon, SettingIcon} from '../../../assets/icons';
import TopTabs from '../../../components/home-tabs';
import {calculateWeekId} from '../../../utils/dateHelper';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';
import MainSettings from './components/MainSettings/MainSettings';
import ScheduleScreen from './components/Schedule/Schedule';
import {COLORS} from '../../../constants/colors';
import {ThemeContext} from '../../../utils/themeContext';

const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  const content = [
    {
      title: 'Расписание',
      iconActive: <CalendarIcon stroke={COLORS.BORDER_COLOR} size={18} />,
      iconPassive: (
        <CalendarIcon stroke={activeColor.btnBackColor2} size={18} />
      ),
      content: ScheduleScreen,
    },
    {
      content: MainSettings,
      iconActive: <SettingIcon fill={activeColor.btnBackColor2} />,
      iconPassive: <SettingIcon fill={COLORS.BORDER_COLOR} />,
      title: 'Настройка',
    },
  ];

  const [shift, setShift] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()));
  const [weeklySchedule, setWeeklySchedule] = useState<IScheduleResponse>();
  const [weeklyScheduleTemplate, setWeeklyScheduleTemplate] =
    useState<IScheduleTemplateResponse>();

  const effect = useCallback(async () => {
    try {
      const weekId = calculateWeekId(date) - calculateWeekId();
      const res = await REQUESTS.general.getWeeklySchedule(weekId, shift);
      setWeeklySchedule(res.data);
      const template = await REQUESTS.general.getWeeklyScheduleTemplate();
      setWeeklyScheduleTemplate(template.data);
    } catch (error) {}
  }, [date, shift]);

  useEffect(() => {
    effect();
  }, [effect]);

  return (
    <MainWrapper date={date} onDateChange={setDate}>
      {
        //@ts-ignore
        <TopTabs
          data={[weeklySchedule || {}, weeklyScheduleTemplate || {}]}
          {...{shift, content, date, activeTab, setActiveTab, setShift}}
        />
      }
    </MainWrapper>
  );
};

export default HomeScreen;
