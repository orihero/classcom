import React, {useState} from 'react';
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
  } = useCoursesHook();

  const lesson = (data || {})[date.getDay() + 1]?.lessonTemplatesMap;
  const navigation = useNavigation();

  const onModalDissmiss = () => {
    addNewLessonTemplatesBtn();
    setModalVisible(false);
  };
  const onSettingCalendarPress = () => {
    navigation.navigate(ROUTES.HOME.SETTING_CALENDAR as never);
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
                <Text style={styles.emptyInputText}>
                  {values.startTime as never}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space} />
            <View style={styles.flex}>
              <Text style={styles.modalText}>Время конца</Text>
              <TouchableOpacity
                onPress={onHourPress('end')}
                style={styles.emptyInput}>
                <Text style={styles.emptyInputText}>
                  {values.endTime as never}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
            <Select
              items={courses}
              name="courseName"
              value={values.courseName}
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
                name="klassNumber"
                value={values.klassNumber}
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
                name="klassLetter"
                value={values.klassLetter}
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
        style={styles.bottomBtn}
        text="Настройка календарно-тематического плана"
      />
    </>
  );
};

export default MainSettings;
