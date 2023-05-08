import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  CalendarBlueIcon,
  CalendarGreyIcon,
  SettingBlueIcon,
  SettingGreyIcon,
} from '../../../assets/icons';
import TopTabs from '../../../components/home-tabs';
import Schedule from '../../../components/schedule';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';
import MainSettings from './components/MainSettings/MainSettings';
import {styles} from './styles';
import {REQUESTS} from '../../../api/requests';

const content = [
  {
    title: 'Расписание',
    iconActive: <CalendarGreyIcon />,
    iconPassive: <CalendarBlueIcon />,
    content: () => (
      <>
        <View style={{marginVertical: 10}}></View>

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
      </>
    ),
  },
  {
    content: MainSettings,
    iconActive: <SettingBlueIcon />,
    iconPassive: <SettingGreyIcon />,
    title: 'Настройка',
  },
];

const HomeScreen = () => {
  const [shift, setShift] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()));

  const effect = async () => {
    try {
      const res = await REQUESTS.general.getWeeklySchedule();
    } catch (error) {}
  };

  useEffect(() => {}, []);

  return (
    <MainWrapper date={date} onDateChange={setDate}>
      <TopTabs shift={shift} content={content} />
    </MainWrapper>
  );
};

export default HomeScreen;
