import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  ILessonTemplateRequest,
  IScheduleTemplateResponse,
} from '../../../../../api/types';
import Button from '../../../../../components/button';
import Schedule from '../../../../../components/schedule';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../navigation/routes';
import EmptySchedule from '../../../../../components/empty-schedule';
import ReactNativeModal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {HOUR_FORMAT_OPTIONS} from '../../../../../constants/dates';
import {useCoursesHook} from '../../../../general-hooks/courses-hook';
import Select from '../../../../../components/select';
import {COLORS} from '../../../../../constants/colors';
import UiText from '../../../../../components/text';
import {ScrollViewPadding} from '../../../../../constants/constants';

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
  const [modalVisible, setModalVisible] = useState(true);
  const [pickingTime, setPickingTime] = useState<null | 'start' | 'end'>(null);
  const [values, setValues] = useState<Partial<ILessonTemplateRequest>>({
    startTime: currentHour,
    endTime: currentHour,
  });
  const {courses, classLetters, classNumbers} = useCoursesHook();

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
  const lesson = (data || {})[date.getDay() + 1]?.lessonTemplatesMap;
  const navigation = useNavigation();

  const onModalDissmiss = () => {
    setModalVisible(false);
  };
  const onSettingCalendarPress = () => {
    navigation.navigate(ROUTES.HOME.SETTING_CALENDAR as never);
  };
  return (
    <>
      <View style={{marginVertical: 20}} />

      <View style={styles.box}>
        <UiText title="Время" type="mediumRegular20" color="GREY_TWO" />
        <UiText title="Предмет" type="mediumRegular20" color="GREY_TWO" />
        <UiText title="Класс" type="mediumRegular20" color="GREY_TWO" />
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}>
        {Object.keys(lessonMap).map((e, i) => {
          const el = lesson ? lesson[e] : null;
          if (!el) {
            return (
              <EmptySchedule
                onPress={() => setModalVisible(true)}
                key={i}
                number={e + '.'}
              />
            );
          }
          return (
            <Schedule
              key={i}
              number={e + '.'}
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
