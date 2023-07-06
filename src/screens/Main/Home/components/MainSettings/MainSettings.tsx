import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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

const lessonMap = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
};

const MainSettings = ({
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

      <View style={{marginBottom: 40}}>
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
      </View>
      <ReactNativeModal
        onDismiss={onModalDissmiss}
        onBackdropPress={onModalDissmiss}
        onBackButtonPress={onModalDissmiss}
        isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Добавить параметры</Text>
          <View style={styles.row}>
            <View style={styles.flex}>
              <Text style={styles.modalText}>Время начало</Text>
              <TouchableOpacity
                onPress={onHourPress('start')}
                style={styles.emptyInput}>
                <Text style={styles.emptyInputText}>{values.startTime}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space} />
            <View style={styles.flex}>
              <Text style={styles.modalText}>Время конца</Text>
              <TouchableOpacity
                onPress={onHourPress('end')}
                style={styles.emptyInput}>
                <Text style={styles.emptyInputText}>{values.endTime}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
            <Select
              items={courses}
              name="courseId"
              value={values.courseId}
              title="Предмет"
              placeholder="Предмет"
              onChange={onInputChange}
              icon={false}
              light={true}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.flex}>
              <Select
                items={classNumbers}
                name="courseId"
                value={values.courseId}
                title="Выберите класс"
                placeholder="-"
                onChange={onInputChange}
                icon={false}
                light={true}
              />
            </View>
            <View style={styles.space} />
            <View style={styles.flex}>
              <Select
                items={classLetters}
                name="courseId"
                value={values.courseId}
                title="Выберите букву"
                placeholder="-"
                onChange={onInputChange}
                icon={false}
                light={true}
              />
            </View>
          </View>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', marginTop: 30},
            ]}>
            <Text style={[styles.modalTitle, {color: COLORS.BLUISH_WHITE2}]}>
              Отмена
            </Text>
            <TouchableOpacity onPress={onModalDissmiss}>
              <Text style={[styles.modalTitle, {color: COLORS.WHITE}]}>
                Добавить
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
      <DatePicker
        modal={true}
        mode="time"
        onCancel={onHourPress(null)}
        open={!!pickingTime}
        date={new Date()}
        onConfirm={onHourChange}
      />
      <Button
        onPress={onSettingCalendarPress}
        style={{paddingVertical: 8, paddingHorizontal: 30}}
        text="Настройка календарно-тематического плана"
      />
    </>
  );
};

export default MainSettings;
