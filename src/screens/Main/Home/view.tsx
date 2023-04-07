import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  CalendarBlueIcon,
  CalendarGreyIcon,
  SettingBlueIcon,
  SettingGreyIcon,
} from '../../../assets/icons';
import Button from '../../../components/button';
import TopTabs from '../../../components/home-tabs';
import Schedule from '../../../components/schedule';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';
import {styles} from './styles';

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
    content: () => (
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
          style={{paddingVertical: 8, paddingHorizontal: 30}}
          text="Настройка календарно-тематического плана"
        />
      </>
    ),
    iconActive: <SettingBlueIcon />,
    iconPassive: <SettingGreyIcon />,
    title: 'Настройка',
  },
];

const HomeScreen = () => {
  const [state, setState] = useState(0);
  return (
    <MainWrapper>
      <TopTabs content={content} />
    </MainWrapper>
  );
};

export default HomeScreen;