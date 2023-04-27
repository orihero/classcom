import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  BookIcon,
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
import DrawerButton from '../../components/drawer-button';
import {DrawerHook} from './hooks';
import {styles} from './styles';

const DrawerScreen = () => {
  const {
    onElectronicPress,
    onHomePress,
    onPaymentPress,
    onProgramPress,
    onSettingPress,
    onStatisticPress,
    onSupportPress,
    onTestingPress,
    onThematicPress,
    onLogout,
  } = DrawerHook();

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <SafeAreaView />
      </View>

      <View style={styles.screenContainer}>
        <DrawerButton
          onPress={onHomePress}
          icon={<HomeIcon />}
          text="Главная страница"
        />
        <DrawerButton
          onPress={onElectronicPress}
          icon={<BookIcon />}
          text="Электронные ресурсы"
        />
        <DrawerButton
          onPress={onThematicPress}
          icon={<CalendarDrawerIcon />}
          text="Тематический план"
        />
        <DrawerButton
          onPress={onTestingPress}
          icon={<TestingIcon />}
          text="Тестирование"
        />
        <DrawerButton
          onPress={onProgramPress}
          icon={<NoteIcon />}
          text="О программе"
        />
        <DrawerButton
          onPress={onStatisticPress}
          icon={<ChartIcon />}
          text="Статистика"
        />
        <DrawerButton
          onPress={onPaymentPress}
          icon={<PayIcon />}
          text="Оплата"
        />
        <DrawerButton
          onPress={onSupportPress}
          icon={<SupportIcon />}
          text="Служба поддержки"
        />
        <DrawerButton
          onPress={onSettingPress}
          icon={<SettingDrawerIcon />}
          text="Настройки"
        />
        <DrawerButton onPress={onLogout} icon={<ExitIcon />} text="Выйти" />
      </View>
    </View>
  );
};

export default DrawerScreen;
