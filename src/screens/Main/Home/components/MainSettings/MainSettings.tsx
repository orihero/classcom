import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../../../../components/button';
import Schedule from '../../../../../components/schedule';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../navigation/routes';

const MainSettings = () => {
  const navigation = useNavigation();
  const onSettingCalendarPress = () => {
    navigation.navigate(ROUTES.HOME.SETTING_CALENDAR as never);
  };
  const [scheduleTemplates, setscheduleTemplates] = useState([]);
  const effect = async () => {};
  useEffect(() => {
    effect();
  }, []);

  return (
    <>
      <View style={{marginVertical: 20}}></View>

      <View style={styles.box}>
        <Text style={styles.text}>Время</Text>
        <Text style={styles.text}>Предмет</Text>
        <Text style={styles.text}>Класс</Text>
      </View>

      <View style={{marginBottom: 40}}>
        <Schedule number={'1.'} />
        <Schedule number={'2.'} />
        <Schedule number={'3.'} />
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
