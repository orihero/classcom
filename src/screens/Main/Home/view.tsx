import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MainWrapper from '../../../wrappers/main-wrapper/MainWrapper';
import TopTabs from '../../../components/home-tabs';
import {
  BellIcon,
  CalendarBlueIcon,
  CalendarGreyIcon,
  CalendarIcon,
  EyesIcon,
  SettingBlueIcon,
  SettingGreyIcon,
} from '../../../assets/icons';
import Schedule from '../../../components/ schedule';
import {styles} from './styles';
import Button from '../../../components/button';

const HomeScreen = () => {
  const [state, setState] = useState(0);
  return (
    <MainWrapper>
      <TopTabs
        titleList={['Расписание', 'Настройка']}
        iconActive={[<CalendarGreyIcon />, <SettingBlueIcon />]}
        iconNoActive={[<CalendarBlueIcon />, <SettingGreyIcon />]}
        First={
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
          </>
        }
        Second={
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
              style={{paddingVertical: 8}}
              onPress={() => console.log('Auda')}
              text="Настройка календарно-тематического плана"
            />
          </>
        }
      />
    </MainWrapper>
  );
};

export default HomeScreen;
