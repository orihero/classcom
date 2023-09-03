import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import Select from '../../../components/select';
import {styles} from './styles';
import {DataIcon} from '../../../assets/icons';
import {useSettingCalendarHooks} from './hooks';

const SettingCalendar = () => {
  const {courses, values, onInputChange} = useSettingCalendarHooks();

  return (
    <DefaultWrapper title="Настройка календарно-тематического плана" hasUser>
      <View style={styles.container}>
        <Text style={styles.dataText}>Дата</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.text}>01.01.2023</Text>
          <TouchableOpacity>
            <DataIcon />
          </TouchableOpacity>
        </View>
        <Select
          name="courseId"
          value={values.courseId}
          items={courses}
          title="Предмет"
          placeholder="Предмет"
          onChange={onInputChange}
        />
      </View>
    </DefaultWrapper>
  );
};

export default SettingCalendar;
