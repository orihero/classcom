import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DefaultWrapper from '../../../wrappers/default-wrapper/DefaultWrapper';
import Select from '../../../components/select';
import {styles} from './styles';
import {DataIcon} from '../../../assets/icons';

const SettingCalendar = () => {
  return (
    <DefaultWrapper title="Настройка календарно-тематического плана" hasUser>
      <Select title="Предмет" />
      <Text style={styles.dataText}>Дата</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.text}>01.01.2023</Text>
        <TouchableOpacity>
          <DataIcon />
        </TouchableOpacity>
      </View>
      <Select title="Тема" />
    </DefaultWrapper>
  );
};

export default SettingCalendar;
