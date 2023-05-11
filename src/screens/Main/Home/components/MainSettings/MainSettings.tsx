import React from 'react';
import {Text, View} from 'react-native';
import {IScheduleTemplateResponse} from '../../../../../api/types';
import Button from '../../../../../components/button';
import Schedule from '../../../../../components/schedule';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../navigation/routes';

const MainSettings = ({
  data,
  date,
}: {
  data: IScheduleTemplateResponse;
  date: Date;
}) => {
  const lesson = (data || {})[date.getDay() + 1]?.lessonTemplatesMap;
  const navigation = useNavigation();
  const onSettingCalendarPress = () => {
    navigation.navigate(ROUTES.HOME.SETTING_CALENDAR as never);
  };
  return (
    <>
      <View style={{marginVertical: 20}}></View>

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

      <Button
        onPress={onSettingCalendarPress}
        style={{paddingVertical: 8, paddingHorizontal: 30}}
        text="Настройка календарно-тематического плана"
      />
    </>
  );
};

export default MainSettings;
