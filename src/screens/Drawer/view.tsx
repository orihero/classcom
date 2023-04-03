import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  BookIcon,
  CalendarBlueIcon,
  CalendarDrawerIcon,
  ChartIcon,
  ExitIcon,
  HomeIcon,
  NoteIcon,
  PayIcon,
  SettingDrawerIcon,
  SupportIcon,
  TestingIcon,
} from '../../assets/icons';
import {styles} from './styles';
import DrawerButton from '../../components/drawer-button';

const DrawerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <SafeAreaView />
      </View>

      <View style={styles.screenContainer}>
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<HomeIcon />}
          text="Главная страница"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<BookIcon />}
          text="Электронные ресурсы"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<CalendarDrawerIcon />}
          text="Тематический план"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<TestingIcon />}
          text="Тестирование"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<NoteIcon />}
          text="О программе"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<ChartIcon />}
          text="Статистика"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<PayIcon />}
          text="Оплата"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<SupportIcon />}
          text="Служба поддержки"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<SettingDrawerIcon />}
          text="Настройки"
        />
        <DrawerButton
          onPress={() => console.log('Press')}
          icon={<ExitIcon />}
          text="Выйти"
        />
      </View>
    </View>
  );
};

export default DrawerScreen;
