import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {REQUESTS} from '../../../api/requests';
import {IScheduleResponse, IScheduleTemplateResponse} from '../../../api/types';
import {
  CalendarBlueIcon,
  CalendarGreyIcon,
  SettingBlueIcon,
  SettingGreyIcon,
} from '../../../assets/icons';
import TopTabs from '../../../components/home-tabs';
import Schedule from '../../../components/schedule';
import {calculateWeekId} from '../../../utils/dateHelper';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';
import MainSettings from './components/MainSettings/MainSettings';
import {styles} from './styles';

const content = [
  {
    title: 'Расписание',
    iconActive: <CalendarGreyIcon />,
    iconPassive: <CalendarBlueIcon />,
    content: ({data, date}: {data: IScheduleResponse; date: Date}) => {
      console.log('====================================');
      console.log(JSON.stringify(data));
      console.log('==================================== DATAA');
      const lesson = (data || {})[date.getDay() + 1]?.lessonsMap;

      return (
        <>
          <View style={{marginVertical: 10}}></View>

          <View style={styles.box}>
            <Text style={styles.text}>Время</Text>
            <Text style={styles.text}>Предмет</Text>
            <Text style={styles.text}>Класс</Text>
          </View>

          <View style={{marginBottom: 40}}>
            {lesson &&
              Object.keys(lesson).map((e, i) => {
                const el = lesson[e];
                if (!el) {
                  return null;
                }
                return (
                  <Schedule
                    key={i}
                    number={e}
                    classNumber={el.klassNumber + el.klassLetter}
                    time={`${el?.startTime
                      ?.split(':')
                      .slice(0, 2)
                      .join(':')}-${el?.endTime
                      ?.split(':')
                      .slice(0, 2)
                      .join(':')}`}
                    title={el.courseName}
                  />
                );
              })}
          </View>
        </>
      );
    },
  },
  {
    content: MainSettings,
    iconActive: <SettingBlueIcon />,
    iconPassive: <SettingGreyIcon />,
    title: 'Настройка',
  },
];

const HomeScreen = () => {
  const [shift, setShift] = useState(1);
  const [activeTab, setActiveTab] = useState();
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
      <TopTabs
        data={[weeklySchedule || {}, weeklyScheduleTemplate || {}]}
        {...{shift, content, date, activeTab, setActiveTab, setShift}}
      />
    </MainWrapper>
  );
};

export default HomeScreen;
