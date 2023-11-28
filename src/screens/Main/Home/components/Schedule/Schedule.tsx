import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  ILessonTemplateRequest,
  IScheduleTemplateResponse,
} from '../../../../../api/types';
import Schedule from '../../../../../components/schedule';
import {styles} from '../../styles';
import EmptySchedule from '../../../../../components/empty-schedule';
import DatePicker from 'react-native-date-picker';
import {HOUR_FORMAT_OPTIONS} from '../../../../../constants/dates';
import UiText from '../../../../../components/text';
import {ScrollViewPadding} from '../../../../../constants/constants';
// import useScheduleHook from './hook';
// import {COLORS} from '../../../../../constants/COLORS';
// import {ThemeContext} from '../../../../../utils/themeContext';

const lessonMap = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
};

const ScheduleScreen = ({
  data,
  date,
}: {
  data: IScheduleTemplateResponse;
  date: Date;
}) => {
  const currentHour = new Date().toLocaleTimeString('ru', HOUR_FORMAT_OPTIONS);
  const [pickingTime, setPickingTime] = useState<null | 'start' | 'end'>(null);
  const [values, setValues] = useState<Partial<ILessonTemplateRequest>>({
    startTime: currentHour,
    endTime: currentHour,
  });

  // const {weeklySchedule} = useScheduleHook();

  // const [lesson, setLesson] = useState(
  //   (data || {})[date.getDay() + 1]?.lessonTemplatesMap,
  // );

  // useEffect(() => {
  //   if (weeklySchedule) {
  //     setLesson((weeklySchedule || {})[date.getDay() + 1]?.lessonTemplatesMap);
  //   }
  // }, [date, weeklySchedule]);

  // const {theme} = useContext(ThemeContext);
  // //@ts-ignore
  // let activeColor = COLORS[theme.mode];

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

  const lesson = (data || {})[date.getDay() + 1]?.lessonTemplatesMap;

  return (
    <>
      <View style={[styles.container]} />

      {/* <View style={styles.box}>
        <UiText title="Время" type="mediumRegular20" color="GREY_TWO" />
        <UiText title="Предмет" type="mediumRegular20" color="GREY_TWO" />
        <UiText title="Класс" type="mediumRegular20" color="GREY_TWO" />
      </View> */}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[ScrollViewPadding]}>
        {Object.keys(lessonMap).map((e, i) => {
          const el = lesson ? lesson[e] : null;
          if (!el) {
            return (
              <EmptySchedule
                onPress={() => console.log('press')}
                key={i}
                number={e + ''}
              />
            );
          }
          return (
            <Schedule
              key={i}
              number={e}
              classNumber={el.klassNumber + el.klassLetter}
              time={`${el?.startTime
                ?.split(':')
                .slice(0, 2)
                .join(':')}-${el?.endTime?.split(':').slice(0, 2).join(':')}`}
              title={el.courseName}
            />
          );
        })}
      </ScrollView>
      <DatePicker
        modal={true}
        mode="time"
        onCancel={onHourPress(null)}
        open={!!pickingTime}
        date={new Date()}
        onConfirm={onHourChange}
      />
    </>
  );
};

export default ScheduleScreen;
