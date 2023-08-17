import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IScheduleTemplateResponse} from '../../../../../api/types';
import Button from '../../../../../components/button';
import Schedule from '../../../../../components/schedule';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../navigation/routes';
import EmptySchedule from '../../../../../components/empty-schedule';
import ReactNativeModal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {useCoursesHook} from '../../../../general-hooks/courses-hook';
import Select from '../../../../../components/select';
import {COLORS} from '../../../../../constants/colors';
import UiText from '../../../../../components/text';
import {ScrollViewPadding} from '../../../../../constants/constants';
import {ThemeContext} from '../../../../../utils/themeContext';

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
  const [modalVisible, setModalVisible] = useState(true);
  const {
    courses,
    classLetters,
    classNumbers,
    onHourChange,
    onHourPress,
    onInputChange,
    pickingTime,
    values,
    addNewLessonTemplatesBtn,
    setValues,
    weeklySchedule,
  } = useCoursesHook();

  const [lesson, setLesson] = useState(
    (data || {})[date.getDay() + 1]?.lessonTemplatesMap,
  );
  const {theme} = useContext(ThemeContext);
  let activeColor = COLORS[theme];

  useEffect(() => {
    if (weeklySchedule) {
      setLesson((weeklySchedule || {})[date.getDay() + 1]?.lessonTemplatesMap);
    } else {
      setLesson((data || {})[date.getDay() + 1]?.lessonTemplatesMap);
    }
  }, [setLesson, weeklySchedule, data, date]);

  const getWeekDay = useCallback(
    (date: Date) => {
      const day = date.getDay() + 1;
      setValues(prev => ({...prev, weekday: day}));
    },
    [setValues],
  );

  useEffect(() => {
    getWeekDay(date);
  }, [date, getWeekDay]);

  const navigation = useNavigation();

  const onModalDissmiss = () => {
    setModalVisible(false);
  };

  const handleAddNewLesson = () => {
    addNewLessonTemplatesBtn(), setModalVisible(false);
  };

  const onSettingCalendarPress = () => {
    navigation.navigate(ROUTES.HOME.SETTING_CALENDAR as never);
  };

  const onModalVisible = (item: number) => {
    setModalVisible(true);
    setValues(prev => ({...prev, sorder: item}));
  };

  const renderReactNativeModal = () => {
    return (
      <ReactNativeModal
        onDismiss={onModalDissmiss}
        onBackdropPress={onModalDissmiss}
        onBackButtonPress={onModalDissmiss}
        isVisible={modalVisible}>
        <View
          style={[
            styles.modalContainer,
            {backgroundColor: activeColor.primary},
          ]}>
          <Text style={styles.modalTitle} />
          <UiText
            title="Добавить параметры"
            style={styles.modalTitle}
            type="mediumRegular24"
            color="WHITE"
          />
          <View style={styles.row}>
            <View style={styles.flex}>
              <UiText
                title="Время начало"
                style={styles.modalText}
                type="bookRegular18"
                color="WHITE"
              />
              <TouchableOpacity
                onPress={onHourPress('start')}
                style={[
                  styles.emptyInput,
                  {backgroundColor: activeColor.selectedBack},
                ]}>
                <Text style={styles.emptyInputText}>
                  {values.startTime as never}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space} />
            <View style={styles.flex}>
              <UiText
                title="Время конца"
                style={styles.modalText}
                type="bookRegular18"
                color="WHITE"
              />
              <TouchableOpacity
                onPress={onHourPress('end')}
                style={[
                  styles.emptyInput,
                  {backgroundColor: activeColor.selectedBack},
                ]}>
                <Text style={styles.emptyInputText}>
                  {values.endTime as never}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Select
              items={courses}
              name="courseId"
              value={values.courseId}
              title="Предмет"
              placeholder="Предмет"
              onChange={() => onInputChange('courseId')}
              light={true}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.flex}>
              <Select
                items={classNumbers}
                name="klassNumber"
                value={values.klassNumber}
                title="Выберите класс"
                placeholder="-"
                onChange={() => onInputChange('klassNumber')}
                light={true}
              />
            </View>
            <View style={styles.space} />
            <View style={styles.flex}>
              <Select
                items={classLetters}
                name="klassLetter"
                value={values.klassLetter}
                title="Выберите букву"
                placeholder="-"
                onChange={() => onInputChange('klassLetter')}
                light={true}
              />
            </View>
          </View>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', marginTop: 30},
            ]}>
            <TouchableOpacity onPress={onModalDissmiss}>
              <Text style={[styles.modalTitle, {color: COLORS.BLUISH_WHITE2}]}>
                Отмена
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddNewLesson}>
              <Text style={[styles.modalTitle, {color: COLORS.WHITE}]}>
                Добавить
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    );
  };

  return (
    <>
      <View style={styles.container} />
      <View style={styles.box}>
        <UiText title="Время" type="mediumRegular20" color="GREY_TWO" />
        <UiText title="Предмет" type="mediumRegular20" color="GREY_TWO" />
        <UiText title="Класс" type="mediumRegular20" color="GREY_TWO" />
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ScrollViewPadding}
        style={styles.scroolViewStyle}>
        {Object.keys(lessonMap).map((e, i) => {
          const el = lesson ? lesson[e] : null;
          if (!el) {
            return (
              <EmptySchedule
                onPress={e => onModalVisible(e)}
                key={i}
                number={e}
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
      {renderReactNativeModal()}
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
        style={[styles.bottomBtn, {backgroundColor: activeColor.acriveBox}]}
        text="Настройка календарно-тематического плана"
      />
    </>
  );
};

export default MainSettings;
